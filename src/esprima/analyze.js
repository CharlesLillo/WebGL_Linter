//Node modules using requirejs
var fs = require('fs');
var esprima = require('esprima');
var estraverse = require('estraverse');

//Globals for use
var filename = process.argv[2];
console.log('---------- Processing', filename, '----------\n');
var uniformList = [];
var attribList = [];
var gErrors = [];
var bufferList = [];
var framebufferList = [];
var bindingBuffers = [];
var bindingFramebuffers = [];
var uniformArgList = [];
var bindingUniforms = [];

/*
Left TODO:
1. Take lists of uniforms and make sure they are right type (if uniform3__ it should be a vec3, etc)
2. Combine errors and make them better in their reason output
*/

/* Error object. These can be stored in an array to output in a console, webpage, or whatever.
 Errors are simply pushed onto an array as the analysis procedes, an idea borrowed from JSLint/JSHint.

 Params:
 location: node.loc object representing the location of the error
 reason: the problem
 evidence: the text line in which the problem occurred
 */

function Error(location, reason, evidence) {
    this.location = location;
    this.reason = reason;
    this.evidence = evidence;

    this.getStartLine = function() {
        return this.location.start.line;
    }
    this.getEndLine = function() {
        return this.location.end.line;
    }
    this.getStartColumn = function() {
        return this.location.start.column;
    }
    this.getEndColumn = function() {
        return this.location.end.column;
    }
}


//AST Object created by esprima, for argv program name
var ast = esprima.parse(fs.readFileSync(filename), {
    loc: true
});
//var ast = esprima.parse(fs.readFileSync(filename), {tokens: true});

//Writes AST to a file called AST.json
var tree = JSON.stringify(ast, null, 4);
fs.writeFile("AST.json", tree, function(err) {
    if (err) {
        console.log(err);
    } else {
        console.log("\nThe AST was saved!");
    }
});

//Analysis variable sets
var internalFormats = ["ALPHA", "RGB", "RGBA", "LUMINANCE", "LUMINANCE_ALPHA"];
var byteTypes = ["UNSIGNED_BYTE", "UNSIGNED_SHORT_5_6_5", "UNSIGNED_SHORT_4_4_4_4", "UNSIGNED_SHORT_5_5_5_1"];
var texTargets = ["TEXTURE_2D", "TEXTURE_CUBE_MAP_POSITIVE_X", "TEXTURE_CUBE_MAP_POSITIVE_Y", "TEXTURE_CUBE_MAP_POSITIVE_Z", "TEXTURE_CUBE_MAP_NEGATIVE_X",
    "TEXTURE_CUBE_MAP_NEGATIVE_Y", "TEXTURE_CUBE_MAP_NEGATIVE_Z"
];
var bufferBits = ["COLOR_BUFFER_BIT", "DEPTH_BUFFER_BIT", "STENCIL_BUFFER_BIT"];
var numTypes = ["UNSIGNED_BYTE", "UNSIGNED_SHORT", "BYTE", "SHORT", "FIXED", "FLOAT"];
var texTypes = ["TEXTURE_WRAP_S", "TEXTURE_WRAP_T", "TEXTURE_MIN_FILTER", "TEXTURE_MAG_FILTER"];
var bufferTypes = ["ELEMENT_ARRAY_BUFFER", "ARRAY_BUFFER"];

//Begin Tests

//Function verification tests
estraverse.traverse(ast, {
    enter: enter
});


//------------------------Tests that occur after first pass--------------------
//***********
//***********
//-----------------------------------------------------------------------------

//Shader test
//Reads shader code (from third argument in command line. If empty, skips this part)
if (process.argv[3] != null) {
    fs.readFile(process.argv[3], 'utf8', function(err, data) {
        if (err) {
            return "Your shader code wasnt found. ERROR: " + console.log(err);
        }

        //Set variables here to grab the types we need
        for (var i = 0; i < attribList.length; i+=2) {
            var attribName = new RegExp(attribList[i]);
            var attribcount = data.match(attribName);
            if (attribcount == null)
                console.log(attribList[i+1] + ". The attribute '" + attribList[i] + "'" + " isn't declared in the shader code");
        }

        //Uniform type checking
        for (var i = 0; i < uniformList.length; i+=2) {
            var uniformName = new RegExp(uniformList[i]);
            var uniformcount = data.match(uniformName);
            if (uniformcount == null)
                console.log(uniformList[i+1] + ". The uniform '" + uniformList[i] + "'" + " isn't declared in the shader code");
        }

    });
}
//END Shader test

//Buffer allocation (maybe add position checking)
if (bufferList.length > 0 && bindingBuffers.length > 0) {
    for (var i = 0; i < bindingBuffers.length; i += 2) {
        if (bufferList.indexOf(bindingBuffers[i]) == -1)
            console.log(bindingUniforms[i + 1] + ". The buffer '" + bindingBuffers[i] + "' may not have been created.");
    }
    //console.log(bindingBuffers);
}
if (framebufferList.length > 0 && bindingFramebuffers.length > 0) {
    for (var i = 0; i < bindingFramebuffers.length; i += 2) {
        if (framebufferList.indexOf(bindingFramebuffers[i]) == -1)
            console.log(bindingUniforms[i + 1] + ". The buffer '" + bindingFramebuffers[i] + "' may not have been created.");
    }
    //console.log(bindingBuffers);
}
//END BUFFER ALLOCATION

//Uniform Binding Check
if (uniformArgList.length > 0 && bindingUniforms.length > 0) {
    for (var i = 0; i < bindingUniforms.length; i += 2) {
        if (uniformArgList.indexOf(bindingUniforms[i]) == -1)
            console.log(bindingUniforms[i + 1] + ". The uniform '" + bindingUniforms[i] + "' may not be of type uniform or may not have been created.");
    }
    //console.log(bindingUniforms);
}
//END BINDING CHECK

//------------------------END OF TESTS-----------------------------------------
//***********
//***********
//-----------------------------------------------------------------------------

//Estraverse enter function

function enter(node) {
    var locationInFile;
    //Checks current nodes type
    if (node.type === 'CallExpression') {
        //Pulls the argument node from the current node
        var args = node['arguments'];
        analyzeArgs(node, args);
    }
    //Collects declared buffers in an array
    if (node.type === 'ExpressionStatement' && node.expression.type == 'AssignmentExpression') {
        //Collects declared identifiers for second pass
        if (node.expression.right != null && node.expression.right.callee != null && node.expression.right.callee.property != null) {

            if (node.expression.right.callee.property.name == 'createBuffer') {
                if (node.expression.left.name != null)
                    bufferList.push(node.expression.left.name);
                if (node.expression.left.object != null)
                    bufferList.push(node.expression.left.object.name);

            }
            if (node.expression.right.callee.property.name == 'createFramebuffer') {
                if (node.expression.left.name != null)
                    framebufferList.push(node.expression.left.name);
                if (node.expression.left.object != null)
                    framebufferList.push(node.expression.left.object.name);

            } else if (node.expression.right.callee.property.name == 'getUniformLocation') {
                if (node.expression.left.name != null)
                    uniformArgList.push(node.expression.left.name);
                if (node.expression.left.object != null)
                    uniformArgList.push(node.expression.left.object.name);
            }
        }
    }
}

//Error output
for (var i = 0; i < gErrors.length; i++) {
    console.log(gErrors[i].location.start.line + ": " + gErrors[i].reason);
}

//Function that gets the function name depending on how it was called

function getFunctionName(node) {
    if (node.callee.type === 'Identifier') {
        return node.callee.name;
    }
    if (node.callee.type === 'MemberExpression') {
        return node.callee.property.name;
    }
}

//Main analysis function

function analyzeArgs(node, args) {
    var functionName = getFunctionName(node);

    //Get Context
    if (functionName == "getContext") {
        if (args.length != 1) {
            error(29, node);
        } else if (args[0].value != "webgl" && args[0].value != "experimental-webgl")
            error(0);
    }
    //getExtension
    if (functionName == "getExtension") {
        if (args.length != 1)
            error(29, node)
        else if (args[0].type != "Literal")
            error(1);
    }
    //clear(needs binary experssion masking check)
    if (functionName == "clear") {
        if (args.length != 1)
            error(29, node)
        else if (args[0].type != "BinaryExpression") {
            if (bufferBits.indexOf(args[0].property.name) == -1)
                error(2);
        } else {
            if (bufferBits.indexOf(args[0].left.property.name) == -1 || bufferBits.indexOf(args[0].right.property.name) == -1)
                error(2);
        }
    }
    //createBuffer
    if (functionName == "createBuffer") {
        if (args.length != 0) {
            error(31, node);
        }
    }
    //bindBuffer put array of buffer values here, other way of getting bound buffer names (objects i think)
    if (functionName == "bindBuffer") {
        if (args.length != 2)
            error(29, node);
        else if (args[0].property == null)
            error(404, node);
        else if (bufferTypes.indexOf(args[0].property.name) == -1 || (args[1].type != "Identifier" && (args[1].type != "MemberExpression")))
            error(32, node);
        else if (args[1].object != null) {
            bindingBuffers.push(args[1].object.name);
            bindingBuffers.push(node.loc.start.line);
        } else {
            bindingBuffers.push(args[1].name);
            bindingBuffers.push(node.loc.start.line);
        }
    }
    //createFrameBuffer
    if (functionName == "createFramebuffer") {
        if (args.length != 0)
            error(3, node);
    }
    //bindFrameBuffer
    if (functionName == "bindFramebuffer") {
        if (args.length != 2)
            error(29, node)
        else if (args[0].property == null)
            error(404, node);
        else if (args[0].property.name != "FRAMEBUFFER" || (args[1].type != "Identifier"))
            error(4, node);
        else if (args[1].object != null) {
            bindingFramebuffers.push(args[1].object.name);
            bindingFramebuffers.push(node.loc.start.line);
        } else {
            bindingFramebuffers.push(args[1].name);
            bindingFramebuffers.push(node.loc.start.line);
        }

    }
    //bindTexture
    if (functionName == "bindTexture") {
        if (args.length != 2)
            error(29, node)
        else if ((args[0].property.name != "TEXTURE_2D" && args[0].property.name != "TEXTURE_CUBE_MAP") || (args[1].type != "Identifier" && args[1].type != "Literal"))
            error(5, node);
    }
    //texParameteri (too many symbols to check for in arg[2], so ignoring)
    if (functionName == "texParameteri") {
        if ((args[0].type != "MemberExpression") || (args[1].type != "MemberExpression") || (args[2].type != "MemberExpression")) {
            error(30, node);

        } else if (args[0].property == null)
            error(404, node);
        else if ((args[0].property.name != "TEXTURE_2D" && args[0].property.name != "TEXTURE_CUBE_MAP") || texTypes.indexOf(args[1].property.name) == -1)
            error(29, node);
    }
    //texImage2D
    if (functionName == "texImage2D") {
        if (args.length < 6)
            error(29, node)
    }
    //createRenderbuffer
    if (functionName == "createRenderbuffer") {
        if (args.length != 0)
            error(29, node);
    }
    //Uniform input functions
    if (functionName == "uniform1f" || functionName == "uniform1i") {
        if (args.length != 2)
            error(29, node);
        else if ((args[0].type != "Literal" && args[0].type != "Identifier") || (args[1].type != "Literal" && args[1].type != "Identifier"))
            error(21, node);
        else if (args[0].object != null) {
            bindingUniforms.push(args[0].object.name);
            bindingUniforms.push(node.loc.start.line);
        } else {
            bindingUniforms.push(args[0].name);
            bindingUniforms.push(node.loc.start.line);
        }
    }
    if (functionName == "uniform2f" || functionName == "uniform2i") {
        if (args.length != 3)
            error(29, node);
        else if ((args[0].type != "Literal" && args[0].type != "Identifier") || (args[1].type != "Literal" && args[1].type != "Identifier"))
            error(21, node);
        else if (args[0].object != null) {
            bindingUniforms.push(args[0].object.name);
            bindingUniforms.push(node.loc.start.line);
        } else {
            bindingUniforms.push(args[0].name);
            bindingUniforms.push(node.loc.start.line);
        }
    }
    if (functionName == "uniform3f" || functionName == "uniform3i") {
        if (args.length != 4)
            error(29, node);
        else if ((args[0].type != "Literal" && args[0].type != "Identifier") || (args[1].type != "Literal" && args[1].type != "Identifier"))
            error(21, node);
        else if (args[0].object != null) {
            bindingUniforms.push(args[0].object.name);
            bindingUniforms.push(node.loc.start.line);
        } else {
            bindingUniforms.push(args[0].name);
            bindingUniforms.push(node.loc.start.line);
        }
    }
    if (functionName == "uniform4f" || functionName == "uniform4i") {
        if (args.length != 5)
            error(29, node);
        else if ((args[0].type != "Literal" && args[0].type != "Identifier") || (args[1].type != "Literal" && args[1].type != "Identifier"))
            error(21, node);
        else if (args[0].object != null) {
            bindingUniforms.push(args[0].object.name);
            bindingUniforms.push(node.loc.start.line);
        } else {
            bindingUniforms.push(args[0].name);
            bindingUniforms.push(node.loc.start.line);
        }
    }

    //Uniform - 2 args: uint, array void uniform[1234][fi]v(uint location, Array value)
    if (functionName == "uniform1fv" || functionName == "uniform1iv") {
        if (args.length != 2)
            error(29, node);
        else if ((args[0].type != "Literal" && args[0].type != "Identifier") || (args[1].type != "Literal" && args[1].type != "Identifier"))
            error(21, node);
        else if (args[0].object != null) {
            bindingUniforms.push(args[0].object.name);
            bindingUniforms.push(node.loc.start.line);
        } else {
            bindingUniforms.push(args[0].name);
            bindingUniforms.push(node.loc.start.line);
        }
    }
    if (functionName == "uniform2fv" || functionName == "uniform2iv") {
        if (args.length != 2)
            error(29, node);
        else if ((args[0].type != "Literal" && args[0].type != "Identifier") || (args[1].type != "Literal" && args[1].type != "Identifier"))
            error(21, node);
        else if (args[0].object != null) {
            bindingUniforms.push(args[0].object.name);
            bindingUniforms.push(node.loc.start.line);
        } else {
            bindingUniforms.push(args[0].name);
            bindingUniforms.push(node.loc.start.line);
        }
    }
    if (functionName == "uniform3fv" || functionName == "uniform3iv") {
        if (args.length != 2)
            error(29, node);
        else if ((args[0].type != "Literal" && args[0].type != "Identifier") || (args[1].type != "Literal" && args[1].type != "Identifier"))
            error(21, node);
        else if (args[0].object != null) {
            bindingUniforms.push(args[0].object.name);
            bindingUniforms.push(node.loc.start.line);
        } else {
            bindingUniforms.push(args[0].name);
            bindingUniforms.push(node.loc.start.line);
        }
    }
    if (functionName == "uniform4fv" || functionName == "uniform4iv") {
        if (args.length != 2)
            error(29, node);
        else if ((args[0].type != "Literal" && args[0].type != "Identifier") || (args[1].type != "Literal" && args[1].type != "Identifier"))
            error(21, node);
        else if (args[0].object != null) {
            bindingUniforms.push(args[0].object.name);
            bindingUniforms.push(node.loc.start.line);
        } else {
            bindingUniforms.push(args[0].name);
            bindingUniforms.push(node.loc.start.line);
        }
    }
    //Vertex Attrib 3 F- multiple, maybe add fv
    if (functionName == "vertexAttrib1f") {
        if (args.length < 2 || args.length > 4)
            error(29, node);
        else if (args[0].type != "Literal" && args[0].type != "Identifier")
            error(21, node);
    }
    if (functionName == "vertexAttrib2f") {
        if (args.length < 2 || args.length > 4)
            error(29, node);
        else if ((args[0].type != "Literal" && args[0].type != "Identifier" && args[0].type != "MemberExpression") || (args[1].type != "Literal" && args[1].type != "Identifier" && args[1].type != "MemberExpression"))
            error(21, node);
    }
    if (functionName == "vertexAttrib3f") {
        if (args.length < 2 || args.length > 4)
            error(29, node);
        else if ((args[0].type != "Literal" && args[0].type != "Identifier" && args[0].type != "MemberExpression") || (args[1].type != "Literal" && args[1].type != "Identifier" && args[1].type != "MemberExpression"))
            error(21, node);
    }
    if (functionName == "vertexAttrib4f") {
        if (args.length < 2 || args.length > 4)
            error(29, node);
        else if ((args[0].type != "Literal" && args[0].type != "Identifier" && args[0].type != "MemberExpression") || (args[1].type != "Literal" && args[1].type != "Identifier" && args[1].type != "MemberExpression"))
            error(21, node);
    }
    //Vertex Attrib Pointer-3 args: uint, int, enum, bool, long, long
    if (functionName == "vertexAttribPointer") {
        if ((args[0].type != "Literal" && args[0].type != "Identifier" && args[0].type != "MemberExpression") || (args[1].type != "Literal" && args[1].type != "Identifier" && args[1].type != "MemberExpression"))
            error(29, node);
    }

    //Enable Vertex Attrib Array-1 arg uint
    if (functionName == "enableVertexAttribArray") {
        if (args.length != 1)
            error(29, node)
        else if (args[0].type != "Identifier" && args[0].type != "Literal" && args[0].type != "MemberExpression")
            error(29, node);
    }


    //Disable Vertex Attrib Arrayvoid disableVertexAttribArray(uint index) index: [0, MAX_VERTEX_ATTRIBS - 1]
    if (functionName == "disableVertexAttribArray") {
        if (args.length != 1)
            error(29, node)
        else if (args[0].type != "Identifier" && args[0].type != "Literal" && args[0].type != "MemberExpression")
            error(29, node);
    }


    //Active Texture- void activeTexture(enum texture)
    if (functionName == "activeTexture") {
        if (args.length != 1)
            error(29, node)
        else if ((args[0].property.name != "TEXTURE0" && args[0].property.name != "TEXTURE1" && args[0].property.name != "TEXTURE2" && args[0].property.name != "TEXTURE3" && args[0].property.name != "TEXTURE4" && args[0].property.name != "TEXTURE5" && args[0].property.name != "TEXTURE6" && args[0].property.name != "TEXTURE7"))
            error(29, node);
    }

    //Draw Arrays-void drawArrays(enum mode, int first, long count)
    //Draw Arrays-void drawArrays(enum mode, int first, long count)
    if (functionName == "drawArrays") {
        if (args.length != 3)
            error(29, node);
        else if ((args[0].property.name != "LINE_STRIP" && args[0].property.name != "LINES" && args[0].property.name != "POINTS" && args[0].property.name != "TRIANGLE_STRIP" && args[0].property.name != "TRIANGLES")){
            error(404, node);
        }
        else if ((args[1].type != "Identifier" && args[1].type != "Literal") || (args[2].type != "Identifier" && args[2].type != "Literal")){
            error(29, node);
        }
    }
    //Use Program - void useProgram(Object program)
    if (functionName == "useProgram") {
        if (args.length != 1)
            error(29, node)
        else if (args[0].type != "Identifier" && args[0].name != null)
            error(29, node);
    }
    //Get Attrib Location-ulong getAttribLocation(Object program, string name)
    if (functionName == "getAttribLocation") {
        if (args.length != 2)
            error(29, node)
        else if (args[0].type != "Identifier" || (args[1].type != "Identifier" && args[1].type != "Literal"))
            error(29, node);
        else{
            attribList.push(args[1].value);
            attribList.push(node.loc.start.line);
        }
    }
    //uniformMatrix4fv
    if (functionName == "uniformMatrix4fv") {
        if (args.length != 3) {
            error(108, node);
            return;
        } else if (args[0].type != "Identifier")
            error(109, node);
        else if (args[1].value != true && args[1].value != false)
            error(110, node);
        else if (args[2].type != "Identifier" && args[2].type != "MemberExpression")
            error(111, node);
    }
    //getUniformLocation
    if (functionName == "getUniformLocation") {
        if (args.length != 2)
            error(103, node);
        else if (args[0].type != "Identifier")
            error(101, node);
        else if (args[1].type != "Literal")
            error(102, node);
        else {
            uniformList.push(args[1].value);
            uniformList.push(node.loc.start.line);
            // if (process.argv[3] != null) {
            //     var temp_type = getType(args[1].value);
            //     uniformList.push(temp_type);
            // }
        }

    }
    //pixelStorei
    if (functionName == "pixelStorei") {
        if (args.length != 2)
            error(104, node);
         else {
            switch (args[0].property.name) {
                case "PACK_ALIGNMENT":
                    error(404, node);
                    break;
                case "UNPACK_ALIGNMENT":
                    error(404, node);
                    break;
                case "UNPACK_FLIP_Y_WEBGL":
                    error(404, node);
                    break;
                case "UNPACK_PREMULTIPLY_ALPHA_WEBGL":
                    error(404, node);
                    break;
                case "UNPACK_COLORSPACE_CONVERSION_WEBGL":
                    error(404, node);
                    break;
                default:
                    error(105, node);
            }
            if (args[1].type != "Literal")
                error(106, node);
        }
    }
    //generateMipmap
    if (functionName == "generateMipmap") {
        if (args.length != 1)
            error(107, node);
        else {
            switch (args[0].property.name) {
                case "TEXTURE_2D":
                    break;
                case "TEXTURE_CUBE_MAP":
                    break;
                default:
                    error(107, node);
            }
        }
    }
    //viewport
    if (functionName == "viewport") {
        if (args.length != 4) {
            error(118, node);
            return;
        } else if (args[0].type != "Literal")
            error(119, node);
        else if (args[1].type != "Literal")
            error(120, node);
        else if (args[2].type != "Literal")
            error(121, node);
        else if (args[3].type != "Literal")
            error(122, node);
    }
    //shaderSource
    if (functionName == "shaderSource") {
        if (args.length != 2) {
            error(123, node);
            return;
        } else if (args[0].type != "Identifier")
            error(124, node);
        else if (args[1].type != "Literal")
            error(125, node);
    }
    //compileShader
    if (functionName == "compileShader") {
        if (args.length != 1) {
            error(126, node);
            return;
        } else if (args[0].type != "Identifier")
            error(127, node);
    }
    //attachShader
    if (functionName == "attachShader") {
        if (args.length != 2) {
            error(128, node);
            return;
        } else if (args[0].type != "Identifier")
            error(129, node);
        else if (args[1].type != "Identifier")
            error(130, node);
    }
    //linkProgram
    if (functionName == "linkProgram") {
        if (args.length != 1) {
            error(131, node);
            return;
        } else if (args[0].type != "Identifier")
            error(132, node);
    }
    //linkProgram
    if (functionName == "createProgram") {
        if (args.length != 0 && args.length != 3)
            error(100, node);
    }
}

//Error output function. Will change to an array of errors that are printed at the end of traversing the ast.

function error(err, node) {
    // This will be pushed to our global error list, gErrors at the end of this method
    var errorToPush, location, reason, evidence;
    var functionName = getFunctionName(node);
    location = node.loc;

    switch (err) {
        case 0:
            reason = ("The GL context variable isn't declared properly. Try using the string 'webgl' or 'experimental-webgl'.");
            break;
        case 1:
            reason = ("The extension should be a string value.");
            break;
        case 2:
            reason = ("The clear function must use a Buffer Bit Value.");
            break;
        case 3:
            reason = ("createFramebuffer should not have arguments.");
            break;
        case 4:
            reason = ("Framebuffer not bound correctly.");
            break;
        case 5:
            reason = ("Texture not bound correctly.");
            break;
        case 20:
            reason = ("Please provide the accurate number of parameters.");
            break;
        case 21:
            reason = ("Please provide a literal or identifier for the uniform or vertexAttrib functions.");
            break;
        case 29:
            reason = (functionName + " has an invalid or non-optimal number arguments.");
            break;
        case 30:
            reason = ("texParameteri should use gl defined constants as arguments.");
            break;
        case 31:
            reason = ("createBuffer should not have arguments.");
            break;
        case 32:
            reason = ("Buffer not bound correctly. Invalid arguments.");
            break;
        case 404:
            reason = ("Must use GL constant. Invalid arguments.");
            break
            //Catches all generic arg errors
        default:
            var functionName = getFunctionName(node);
            reason = functionName + " has an invalid or non-optimal number arguments.";
            break;

    }

    evidence = JSON.stringify(node);
    errorToPush = new Error(location, reason, evidence);
    gErrors.push(errorToPush);
}

// //Helper function

// function getType(value) {
//     fs.readFile(process.argv[3], 'utf8', function(err, data) {
//         if (err) {
//             return "Your shader code wasnt found. ERROR: " + console.log(err);
//         }
//         var res = data.split(" ");
//         for (var i = 0; i < res.length; i++) {
//             res[i] = res[i].trim();
//             res[i] = res[i].split(";",1)[0];
//         }
//         var temp = res.indexOf(value);
//         return res[temp-1];
//     });
// }
