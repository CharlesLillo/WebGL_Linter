//Node modules using requirejs
var fs = require('fs');
var esprima = require('esprima');
var estraverse = require('estraverse');

//Globals for use
var filename = process.argv[2];
console.log('Processing', filename, '\n');
// Array that holds all of the errors (or warnings) found in the analysis "Global Errors"
var gErrors = [];

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
var ast = esprima.parse(fs.readFileSync(filename), {loc: true});
//var ast = esprima.parse(fs.readFileSync(filename), {tokens: true});

//Writes AST to a file called AST.json
var tree = JSON.stringify(ast, null, 4);
fs.writeFile("AST.json", tree, function(err) {
    if (err) {
        console.log(err);
    } else {
        console.log("The file was saved!");
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
var texTypes = ["TEXTURE_WRAP_S", "TEXTURE_WRAP_T", "TEXTURE_MIN_FILTER" ,"TEXTURE_MAG_FILTER"];
//Begin Tests
estraverse.traverse(ast, {
    enter: enter
});

//Estraverse enter function

function enter(node) {
    var locationInFile;
    //Checks current nodes type
    if (node.type === 'CallExpression') {
        //Pulls the argument node from the current node
        var args = node['arguments'];
        analyzeArgs(node, args);
    }
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
//TODO: TT 4/8/14 Cody's checks do not check for array index out of bounds or null pointer exceptions
function analyzeArgs(node, args) {
    var functionName = getFunctionName(node);
    //Get Context
    if (functionName == "getContext") {
        if (args.length != 1)
            error(29, node)
        if (args[0].value != "webgl" && args[0].value != "experimental-webgl")
            error(0);
    }
    //getExtension
    if (functionName == "getExtension") {
        if (args.length != 1)
            error(29, node)
        if (args[0].type != "Literal")
            error(1);
    }
    //clear(needs binary experssion masking check)
    if (functionName == "clear") {
        if (args.length != 1)
            error(29, node)
        if (args[0].type != "BinaryExpression") {
            if (bufferBits.indexOf(args[0].property.name) == -1)
                error(2);
        } else {
            if (bufferBits.indexOf(args[0].left.property.name) == -1 || bufferBits.indexOf(args[0].right.property.name) == -1)
                error(2);
        }
    }
    //createFrameBuffer
    if (functionName == "createFramebuffer") {
        if (args.length != 0)
            error(3);
    }
    //bindFrameBuffer
    if (functionName == "bindFramebuffer") {
        if (args.length != 2)
            error(29, node)
        if (args[0].property.name != "FRAMEBUFFER" || (args[1].type != "Identifier"))
            error(4);
    }
    //bindTexture
    if (functionName == "bindTexture") {
        if (args.length != 2)
            error(29, node)
        if ((args[0].property.name != "TEXTURE_2D" && args[0].property.name != "TEXTURE_CUBE_MAP") || (args[1].type != "Identifier" && args[1].type != "Literal"))
            error(5);
    }
    //texParameteri (too many symbols to check for in arg[2], so ignoring)
    if (functionName == "texParameteri") {
        if((args[0].type != "MemberExpression") || (args[1].type != "MemberExpression") || (args[2].type != "MemberExpression")){
            error(30);
        }
        if ((args[0].property.name != "TEXTURE_2D" && args[0].property.name != "TEXTURE_CUBE_MAP") || texTypes.indexOf(args[1].property.name)==-1)
        error(6);
    }
    //texImage2D
    if (functionName == "texImage2D") {
        if (args.length < 6)
            error(29, node)
        //Too far an overestimation
        // if ((texTargets.indexOf(args[0].property.name) == -1) ||
        //     (args[1].type != "Literal" && args[1].type != "Identifier") ||
        //     (internalFormats.indexOf(args[2].property.name) == -1) ||
        //     (args[3].type != "Literal" && args[3].type != "Identifier") ||
        //     (args[4].type != "Literal" && args[4].type != "Identifier") ||
        //     (args[5].type != "Literal" && args[5].type != "Identifier") ||
        //     (internalFormats.indexOf(args[6].property.name) == -1) ||
        //     (byteTypes.indexOf(args[7].property.name) == -1) ||
        //     (args[8].type != "Literal" && args[8].type != "Identifier"))
        //   error(7);
    }
    //createRenderbuffer
    if (functionName == "createRenderbuffer") {
        if (args.length != 0)
            error(8);
    }

    //Begin Cody Errors
    if (functionName == "uniform1f" || functionName == "uniform1i") {
        if (args.length != 4 && args.length != 2) {
            error(29, node);
        }
        if ((args[0].type != "Literal" && args[0].type != "Identifier") || (args[1].type != "Literal" && args[1].type != "Identifier")) {
            error(21);
        }
    }
    if (functionName == "uniform2f" || functionName == "uniform2i") {
        if (args.length != 4 && args.length != 2)
            error(29, node);
        if ((args[0].type != "Literal" && args[0].type != "Identifier") || (args[1].type != "Literal" && args[1].type != "Identifier"))
            error(21);
    }
    if (functionName == "uniform3f" || functionName == "uniform3i") {
        if (args.length != 4 && args.length != 2)
            error(29, node);
        if ((args[0].type != "Literal" && args[0].type != "Identifier") || (args[1].type != "Literal" && args[1].type != "Identifier"))
            error(21);
    }
    if (functionName == "uniform4f" || functionName == "uniform4i") {
        if (args.length != 4 && args.length != 2)
            error(29, node);
        if ((args[0].type != "Literal" && args[0].type != "Identifier") || (args[1].type != "Literal" && args[1].type != "Identifier"))
            error(21);
    }

    //Uniform - 2 args: uint, array void uniform[1234][fi]v(uint location, Array value)
    if (functionName == "uniform1fv" || functionName == "uniform1iv") {
        if (args.length != 4 && args.length != 2) {
            error(29, node);
        }
        if ((args[0].type != "Literal" && args[0].type != "Identifier") || (args[1].type != "Literal" && args[1].type != "Identifier")) {
            error(21);
        }
    }
    if (functionName == "uniform2fv" || functionName == "uniform2iv") {
        if (args.length != 4 && args.length != 2)
            error(29, node);
        if ((args[0].type != "Literal" && args[0].type != "Identifier") || (args[1].type != "Literal" && args[1].type != "Identifier"))
            error(21);
    }
    if (functionName == "uniform3fv" || functionName == "uniform3iv") {
        if (args.length != 4 && args.length != 2)
            error(29, node);
        if ((args[0].type != "Literal" && args[0].type != "Identifier") || (args[1].type != "Literal" && args[1].type != "Identifier"))
            error(21);
    }
    if (functionName == "uniform4fv" || functionName == "uniform4iv") {
        if (args.length != 4 && args.length != 2)
            error(29, node);
        if ((args[0].type != "Literal" && args[0].type != "Identifier") || (args[1].type != "Literal" && args[1].type != "Identifier"))
            error(21);

    }
    //Vertex Attrib 3 F- multiple, maybe add fv
    if (functionName == "vertexAttrib1f") {
        if (args.length != 4 && args.length != 2) {
            error(29, node);
        }
        if (args[0].type != "Literal" && args[0].type != "Identifier") {
            error(21);
        }
    }
    if (functionName == "vertexAttrib2f") {
        if (args.length != 4 && args.length != 2)
            error(29, node);
        if ((args[0].type != "Literal" && args[0].type != "Identifier" && args[0].type != "MemberExpression" ) || (args[1].type != "Literal" && args[1].type != "Identifier" && args[1].type != "MemberExpression" ))
            error(21);
    }
    if (functionName == "vertexAttrib3f") {
        if (args.length != 4 && args.length != 2)
            error(29, node);
        if ((args[0].type != "Literal" && args[0].type != "Identifier" && args[0].type != "MemberExpression" ) || (args[1].type != "Literal" && args[1].type != "Identifier" && args[1].type != "MemberExpression" ))
            error(21);
    }
    if (functionName == "vertexAttrib4f") {
        if (args.length != 4 && args.length != 2)
            error(29, node);
        if ((args[0].type != "Literal" && args[0].type != "Identifier" && args[0].type != "MemberExpression" ) || (args[1].type != "Literal" && args[1].type != "Identifier" && args[1].type != "MemberExpression" ))
            error(21);
    }
    //Vertex Attrib Pointer-3 args: uint, int, enum, bool, long, long
    if (functionName == "vertexAttribPointer") {
        if ((args[0].type != "Literal" && args[0].type != "Identifier" && args[0].type != "MemberExpression" ) || (args[1].type != "Literal" && args[1].type != "Identifier" && args[1].type != "MemberExpression" ))
            error(22);
    }

    //Enable Vertex Attrib Array-1 arg uint
    if (functionName == "enableVertexAttribArray") {
        if (args.length != 1)
            error(29, node)
        if (args[0].type != "Identifier" && args[0].type != "Literal" && args[0].type != "MemberExpression")
            error(23);
    }


    //Disable Vertex Attrib Arrayvoid disableVertexAttribArray(uint index) index: [0, MAX_VERTEX_ATTRIBS - 1]
    if (functionName == "disableVertexAttribArray") {
        if (args.length != 1)
            error(29, node)
        if (args[0].type != "Identifier" && args[0].type != "Literal"  && args[0].type != "MemberExpression")
            error(24);
    }


    //Active Texture- void activeTexture(enum texture)
    if (functionName == "activeTexture") {
        if (args.length != 1)
            error(29, node)
        if ((args[0].property.name != "TEXTURE0" && args[0].property.name != "TEXTURE1" && args[0].property.name != "TEXTURE2" && args[0].property.name != "TEXTURE3" && args[0].property.name != "TEXTURE4" && args[0].property.name != "TEXTURE5" && args[0].property.name != "TEXTURE6" && args[0].property.name != "TEXTURE7"))
            error(25);
    }

    //Draw Arrays-void drawArrays(enum mode, int first, long count)
    if (functionName == "drawArrays") {
        if (args.length != 3)
            error(29, node)
        if ((args[0].property.name != "LINE_STRIP" && args[0].property.name != "LINES" && args[0].property.name != "POINTS" && args[0].property.name != "TRIANGLE_STRIP" && args[0].property.name != "TRIANGLES") || (args[1].type != "Identifier" && args[1].type != "Literal") || (args[2].type != "Identifier" && args[2].type != "Literal"))
            error(26);
    }
    //Use Program - void useProgram(Object program)
    if (functionName == "useProgram") {
        if (args.length != 1)
            error(29, node)
        if (args[0].type != "Identifier" && args[0].name != null)
            error(27);
    }
    //Get Attrib Location-ulong getAttribLocation(Object program, string name)
    if (functionName == "getAttribLocation") {
        if (args.length != 2)
            error(29, node)
        if (args[0].type != "Identifier" || (args[1].type != "Identifier" && args[1].type != "Literal"))
            error(28);
    }

    //Toby's extended function checks
    tobyAnalyzeArgs(node, args);
}

//the stuff Toby wrote--will put in the above function when done, bros

function tobyAnalyzeArgs(node, args) {
    var functionName = getFunctionName(node);

    if (functionName == "getUniformLocation") {
        if (args.length != 2)
            tobyError(103,node);
        if (args[0].type != "Identifier")
            tobyError(101,node);
        if (args[1].type != "Literal")
            tobyError(102,node);
    }
    if (functionName == "pixelStorei") {
        if (args.length != 2)
            tobyError(104,node);
        switch (args[0].property.name) {
            case "PACK_ALIGNMENT":
                break;
            case "UNPACK_ALIGNMENT":
                break;
            case "UNPACK_FLIP_Y_WEBGL":
                break;
            case "UNPACK_PREMULTIPLY_ALPHA_WEBGL":
                break;
            case "UNPACK_COLORSPACE_CONVERSION_WEBGL":
                break;
            default:
                tobyError(105,node);
        }
        if (args[1].type != "Literal")
            tobyError(106,node);
    }
    if (functionName == "generateMipmap") {
        if (args.length != 1)
            tobyError(107,node);
        switch (args[0].property.name) {
            case "TEXTURE_2D":
                break;
            case "TEXTURE_CUBE_MAP":
                break;
            default:
                tobyError(107,node);
        }
    }
    if (functionName == "uniformMatrix4fv") {
        if (args.length != 3) {
            tobyError(108,node);
            return;
        }
        if (args[0].type != "Identifier")
            tobyError(109,node);
        if (args[1].value != true && args[1].value != false)
            tobyError(110,node);
        if (args[2].type != "Identifier" && args[2].type != "MemberExpression")
            tobyError(111,node);
    }
    if (functionName == "viewport") {
        if (args.length != 4) {
            tobyError(118,node);
            return;
        }
        if (args[0].type != "Literal")
            tobyError(119,node);
        if (args[1].type != "Literal")
            tobyError(120,node);
        if (args[2].type != "Literal")
            tobyError(121,node);
        if (args[3].type != "Literal")
            tobyError(122,node);
    }
    if (functionName == "shaderSource") {
        if (args.length != 2) {
            tobyError(123,node);
            return;
        }
        if (args[0].type != "Identifier")
            tobyError(124,node);
        if (args[1].type != "Literal")
            tobyError(125,node);
    }
    if (functionName == "compileShader") {
        if (args.length != 1) {
            tobyError(126,node);
            return;
        }
        if (args[0].type != "Identifier")
            tobyError(127,node);
    }
    if (functionName == "attachShader") {
        if (args.length != 2) {
            tobyError(128,node);
            return;
        }
        if (args[0].type != "Identifier")
            tobyError(129,node);
        if (args[1].type != "Identifier")
            tobyError(130,node);
    }
    if (functionName == "linkProgram") {
        if (args.length != 1) {
            tobyError(131,node);
            return;
        }
        if (args[0].type != "Identifier")
            tobyError(132,node);
    }
    if (functionName == "createProgram") {
        if (args.length != 0 && args.length != 3)
            tobyError(100,node);
    }
}


function error(err, node) {
    // This will be pushed to our global error list, gErrors at the end of this method
    var errorToPush, location, reason, evidence;
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
        case 6:
            reason = ("texParameteri has invalid arguments.");
            break;
        case 7:
            reason = ("texImage2D has invalid arguments.");
            break;
        case 8:
            reason = ("createRenderbuffer should not have arguments.");
            break;
        case 20:
            reason = ("Please provide the accurate number of parameters.");
            break;
        case 21:
            reason = ("Please provide a literal or identifier for the uniform or vertexAttrib functions.");
            break;
        case 22:
            reason = ("vertexAttribPointer has invalid arguments.");
            break;
        case 23:
            reason = ("enableVertexAttribArray has invalid arguments.");
            break;
        case 24:
            reason = ("disableVertexAttribArray has invalid arguments.");
            break;
        case 25:
            reason = ("activeTexture has invalid arguments.");
            break;
        case 26:
            reason = ("drawArrays has invalid arguments.");
            break;
        case 27:
            reason = ("useProgram has invalid arguments.");
            break;
        case 28:
            reason = ("getAttribLocation has invalid arguments.");
            break;
        case 29:
            reason = (getFunctionName(node) + " has an invalid or non-optimal number arguments.");
            break;
        case 30: 
            reason = ("texParameteri should use gl defined constants as arguments.");
            break;
    }
    // so that the same thing is still sent to console as before Toby's 4/8/14 commit
    console.log(reason);

    //TODO: TT 4/8/14 right now this doesn't give human-readable output to the "evidence" variable; we may need to find a better hack for getting the actual text of the program
    evidence = JSON.stringify(node);
    //TODO: TT 4/8/14 construct the Error object and push it onto gErrors
    errorToPush = new Error(location, reason, evidence);
    gErrors.push(errorToPush);
}

//TODO: TT 4/8/14 move this somewhere more tidy, and actually define errors
function tobyError(err, node) {
    var functionName = getFunctionName(node);
            console.log(functionName + " has an invalid or non-optimal number arguments.");
}
