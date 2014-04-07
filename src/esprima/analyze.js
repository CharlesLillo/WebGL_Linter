//Node modules using requirejs
var fs = require('fs');
var esprima = require('esprima');
var estraverse = require('estraverse');

//Globals for use
var filename = process.argv[2];
console.log('Processing', filename, '\n');
var uniformList = [];
var attribList = [];

//AST Object created by esprima, for argv program name
var ast = esprima.parse(fs.readFileSync(filename));
//var ast = esprima.parse(fs.readFileSync(filename), {tokens: true});

//Writes AST to a file called AST.json
var tree = JSON.stringify(ast, null, 4);
fs.writeFile("AST.json", tree, function(err) {
    if (err) {
        console.log(err);
    } else {
        console.log("The AST was saved!");
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

//Begin Tests

//Function verification tests
estraverse.traverse(ast, {
    enter: enter
});

//Shader test
//Reads shader code (from third argument in command line. If empty, skips this part)
if (process.argv[3] != null) {
    fs.readFile(process.argv[3], 'utf8', function(err, data) {
        if (err) {
            return "Your shader code wasnt found. ERROR: " + console.log(err);
        }

        //Set variables here to grab the types we need
        var attrcount = data.match(/attribute/g);

        var attribListGLSL = [];
        for (var i = 0; i < uniformList.length; i++) {
            var attribName = new RegExp(attribList[i]);
            var attribcount = data.match(attribName);
            if (attribcount == null)
                console.log("The attribute '" + attribList[i] + "'" + " isn't declared in the shader code");
        }

        //Uniform type checking
        var uniformListGLSL = [];
        for (var i = 0; i < uniformList.length; i++) {
            var uniformName = new RegExp(uniformList[i]);
            var uniformcount = data.match(uniformName);
            if (uniformcount == null)
                console.log("The uniform '" + uniformList[i] + "'" + " isn't declared in the shader code");
        }

    });
}

//Estraverse enter function

function enter(node) {
    //Checks current nodes type
    if (node.type === 'CallExpression') {
        //Pulls the argument node from the current node
        var args = node['arguments'];
        //Pushes the functions names to our function list
        var functionName = getFunctionName(node);
        analyzeArgs(functionName, args);
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

function analyzeArgs(functionName, args) {
    //Get Context
    if (functionName == "getContext") {
        if (args.length != 1) {
            error(29, functionName);
        } else if (args[0].value != "webgl" && args[0].value != "experimental-webgl")
            error(0);
    }
    //getExtension
    if (functionName == "getExtension") {
        if (args.length != 1)
            error(29, functionName)
        else if (args[0].type != "Literal")
            error(1);
    }
    //clear(needs binary experssion masking check)
    if (functionName == "clear") {
        if (args.length != 1)
            error(29, functionName)
        else if (args[0].type != "BinaryExpression") {
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
            error(29, functionName)
        else if (args[0].property.name != "FRAMEBUFFER" || (args[1].type != "Identifier"))
            error(4);
    }
    //bindTexture
    if (functionName == "bindTexture") {
        if (args.length != 2)
            error(29, functionName)
        else if ((args[0].property.name != "TEXTURE_2D" && args[0].property.name != "TEXTURE_CUBE_MAP") || (args[1].type != "Identifier" && args[1].type != "Literal"))
            error(5);
    }
    //texParameteri (too many symbols to check for in arg[2], so ignoring)
    if (functionName == "texParameteri") {
        if ((args[0].type != "MemberExpression") || (args[1].type != "MemberExpression") || (args[2].type != "MemberExpression")) {
            error(30);
        } else if ((args[0].property.name != "TEXTURE_2D" && args[0].property.name != "TEXTURE_CUBE_MAP") || texTypes.indexOf(args[1].property.name) == -1)
            error(6);
    }
    //texImage2D
    if (functionName == "texImage2D") {
        if (args.length < 6)
            error(29, functionName)
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
            error(29, functionName);
        } else if ((args[0].type != "Literal" && args[0].type != "Identifier") || (args[1].type != "Literal" && args[1].type != "Identifier")) {
            error(21);
        }
    }
    if (functionName == "uniform2f" || functionName == "uniform2i") {
        if (args.length != 4 && args.length != 2)
            error(29, functionName);
        else if ((args[0].type != "Literal" && args[0].type != "Identifier") || (args[1].type != "Literal" && args[1].type != "Identifier"))
            error(21);
    }
    if (functionName == "uniform3f" || functionName == "uniform3i") {
        if (args.length != 4 && args.length != 2)
            error(29, functionName);
        else if ((args[0].type != "Literal" && args[0].type != "Identifier") || (args[1].type != "Literal" && args[1].type != "Identifier"))
            error(21);
    }
    if (functionName == "uniform4f" || functionName == "uniform4i") {
        if (args.length != 4 && args.length != 2)
            error(29, functionName);
        else if ((args[0].type != "Literal" && args[0].type != "Identifier") || (args[1].type != "Literal" && args[1].type != "Identifier"))
            error(21);
    }

    //Uniform - 2 args: uint, array void uniform[1234][fi]v(uint location, Array value)
    if (functionName == "uniform1fv" || functionName == "uniform1iv") {
        if (args.length != 4 && args.length != 2) {
            error(29, functionName);
        } else if ((args[0].type != "Literal" && args[0].type != "Identifier") || (args[1].type != "Literal" && args[1].type != "Identifier")) {
            error(21);
        }
    }
    if (functionName == "uniform2fv" || functionName == "uniform2iv") {
        if (args.length != 4 && args.length != 2)
            error(29, functionName);
        else if ((args[0].type != "Literal" && args[0].type != "Identifier") || (args[1].type != "Literal" && args[1].type != "Identifier"))
            error(21);
    }
    if (functionName == "uniform3fv" || functionName == "uniform3iv") {
        if (args.length != 4 && args.length != 2)
            error(29, functionName);
        else if ((args[0].type != "Literal" && args[0].type != "Identifier") || (args[1].type != "Literal" && args[1].type != "Identifier"))
            error(21);
    }
    if (functionName == "uniform4fv" || functionName == "uniform4iv") {
        if (args.length != 4 && args.length != 2)
            error(29, functionName);
        else if ((args[0].type != "Literal" && args[0].type != "Identifier") || (args[1].type != "Literal" && args[1].type != "Identifier"))
            error(21);

    }
    //Vertex Attrib 3 F- multiple, maybe add fv
    if (functionName == "vertexAttrib1f") {
        if (args.length != 4 && args.length != 2) {
            error(29, functionName);
        } else if (args[0].type != "Literal" && args[0].type != "Identifier") {
            error(21);
        }
    }
    if (functionName == "vertexAttrib2f") {
        if (args.length != 4 && args.length != 2)
            error(29, functionName);
        else if ((args[0].type != "Literal" && args[0].type != "Identifier" && args[0].type != "MemberExpression") || (args[1].type != "Literal" && args[1].type != "Identifier" && args[1].type != "MemberExpression"))
            error(21);
    }
    if (functionName == "vertexAttrib3f") {
        if (args.length != 4 && args.length != 2)
            error(29, functionName);
        else if ((args[0].type != "Literal" && args[0].type != "Identifier" && args[0].type != "MemberExpression") || (args[1].type != "Literal" && args[1].type != "Identifier" && args[1].type != "MemberExpression"))
            error(21);
    }
    if (functionName == "vertexAttrib4f") {
        if (args.length != 4 && args.length != 2)
            error(29, functionName);
        else if ((args[0].type != "Literal" && args[0].type != "Identifier" && args[0].type != "MemberExpression") || (args[1].type != "Literal" && args[1].type != "Identifier" && args[1].type != "MemberExpression"))
            error(21);
    }
    //Vertex Attrib Pointer-3 args: uint, int, enum, bool, long, long
    if (functionName == "vertexAttribPointer") {
        if ((args[0].type != "Literal" && args[0].type != "Identifier" && args[0].type != "MemberExpression") || (args[1].type != "Literal" && args[1].type != "Identifier" && args[1].type != "MemberExpression"))
            error(22);
    }

    //Enable Vertex Attrib Array-1 arg uint
    if (functionName == "enableVertexAttribArray") {
        if (args.length != 1)
            error(29, functionName)
        else if (args[0].type != "Identifier" && args[0].type != "Literal" && args[0].type != "MemberExpression")
            error(23);
    }


    //Disable Vertex Attrib Arrayvoid disableVertexAttribArray(uint index) index: [0, MAX_VERTEX_ATTRIBS - 1]
    if (functionName == "disableVertexAttribArray") {
        if (args.length != 1)
            error(29, functionName)
        else if (args[0].type != "Identifier" && args[0].type != "Literal" && args[0].type != "MemberExpression")
            error(24);
    }


    //Active Texture- void activeTexture(enum texture)
    if (functionName == "activeTexture") {
        if (args.length != 1)
            error(29, functionName)
        else if ((args[0].property.name != "TEXTURE0" && args[0].property.name != "TEXTURE1" && args[0].property.name != "TEXTURE2" && args[0].property.name != "TEXTURE3" && args[0].property.name != "TEXTURE4" && args[0].property.name != "TEXTURE5" && args[0].property.name != "TEXTURE6" && args[0].property.name != "TEXTURE7"))
            error(25);
    }

    //Draw Arrays-void drawArrays(enum mode, int first, long count)
    if (functionName == "drawArrays") {
        if (args.length != 3)
            error(29, functionName)
        else if ((args[0].property.name != "LINE_STRIP" && args[0].property.name != "LINES" && args[0].property.name != "POINTS" && args[0].property.name != "TRIANGLE_STRIP" && args[0].property.name != "TRIANGLES") || (args[1].type != "Identifier" && args[1].type != "Literal") || (args[2].type != "Identifier" && args[2].type != "Literal"))
            error(26);
    }
    //Use Program - void useProgram(Object program)
    if (functionName == "useProgram") {
        if (args.length != 1)
            error(29, functionName)
        else if (args[0].type != "Identifier" && args[0].name != null)
            error(27);
    }
    //Get Attrib Location-ulong getAttribLocation(Object program, string name)
    if (functionName == "getAttribLocation") {
        if (args.length != 2)
            error(29, functionName)
        else if (args[0].type != "Identifier" || (args[1].type != "Identifier" && args[1].type != "Literal"))
            error(28);
        else
            attribList.push(args[1].value);
    }

    //Toby's extended function checks
    tobyAnalyzeArgs(functionName, args);
}

function tobyAnalyzeArgs(functionName, args) {
    if (functionName == "getUniformLocation") {
        if (args.length != 2)
            tobyError(103, functionName);
        else if (args[0].type != "Identifier")
            tobyError(101, functionName);
        else if (args[1].type != "Literal")
            tobyError(102, functionName);
        else
            uniformList.push(args[1].value);

    }
    if (functionName == "pixelStorei") {
        if (args.length != 2)
            tobyError(104, functionName);
        else {
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
                    tobyError(105, functionName);
            }
            if (args[1].type != "Literal")
                tobyError(106, functionName);
        }
    }
    if (functionName == "generateMipmap") {
        if (args.length != 1)
            tobyError(107, functionName);
        else {
            switch (args[0].property.name) {
                case "TEXTURE_2D":
                    break;
                case "TEXTURE_CUBE_MAP":
                    break;
                default:
                    tobyError(107, functionName);
            }
        }
    }
    if (functionName == "uniformMatrix4fv") {
        if (args.length != 3) {
            tobyError(108, functionName);
            return;
        } else if (args[0].type != "Identifier")
            tobyError(109, functionName);
        else if (args[1].value != true && args[1].value != false)
            tobyError(110, functionName);
        else if (args[2].type != "Identifier" && args[2].type != "MemberExpression")
            tobyError(111, functionName);
    }
    if (functionName == "viewport") {
        if (args.length != 4) {
            tobyError(118, functionName);
            return;
        } else if (args[0].type != "Literal")
            tobyError(119, functionName);
        else if (args[1].type != "Literal")
            tobyError(120, functionName);
        else if (args[2].type != "Literal")
            tobyError(121, functionName);
        else if (args[3].type != "Literal")
            tobyError(122, functionName);
    }
    if (functionName == "shaderSource") {
        if (args.length != 2) {
            tobyError(123, functionName);
            return;
        } else if (args[0].type != "Identifier")
            tobyError(124, functionName);
        else if (args[1].type != "Literal")
            tobyError(125, functionName);
    }
    if (functionName == "compileShader") {
        if (args.length != 1) {
            tobyError(126, functionName);
            return;
        } else if (args[0].type != "Identifier")
            tobyError(127, functionName);
    }
    if (functionName == "attachShader") {
        if (args.length != 2) {
            tobyError(128, functionName);
            return;
        } else if (args[0].type != "Identifier")
            tobyError(129, functionName);
        else if (args[1].type != "Identifier")
            tobyError(130, functionName);
    }
    if (functionName == "linkProgram") {
        if (args.length != 1) {
            tobyError(131, functionName);
            return;
        } else if (args[0].type != "Identifier")
            tobyError(132, functionName);
    }
    if (functionName == "createProgram") {
        if (args.length != 0 && args.length != 3)
            tobyError(100, functionName);
    }
}

//Error output function. Will change to an array of errors that are printed at the end of traversing the ast.

function error(err, functionName) {
    switch (err) {
        case 0:
            console.log("The GL context variable isn't declared properly. Try using the string 'webgl' or 'experimental-webgl'.");
            break;
        case 1:
            console.log("The extension should be a string value.");
            break;
        case 2:
            console.log("The clear function must use a Buffer Bit Value.");
            break;
        case 3:
            console.log("createFramebuffer should not have arguments.");
            break;
        case 4:
            console.log("Framebuffer not bound correctly.");
            break;
        case 5:
            console.log("Texture not bound correctly.");
            break;
        case 6:
            console.log("texParameteri has invalid arguments.");
            break;
        case 7:
            console.log("texImage2D has invalid arguments.");
            break;
        case 8:
            console.log("createRenderbuffer should not have arguments.");
            break;
        case 20:
            console.log("Please provide the accurate number of parameters.");
            break;
        case 21:
            console.log("Please provide a literal or identifier for the uniform or vertexAttrib functions.");
            break;
        case 22:
            console.log("vertexAttribPointer has invalid arguments.");
            break;
        case 23:
            console.log("enableVertexAttribArray has invalid arguments.");
            break;
        case 24:
            console.log("disableVertexAttribArray has invalid arguments.");
            break;
        case 25:
            console.log("activeTexture has invalid arguments.");
            break;
        case 26:
            console.log("drawArrays has invalid arguments.");
            break;
        case 27:
            console.log("useProgram has invalid arguments.");
            break;
        case 28:
            console.log("getAttribLocation has invalid arguments.");
            break;
        case 29:
            console.log(functionName + " has an invalid or non-optimal number arguments.");
            break;
        case 30:
            console.log("texParameteri should use gl defined constants as arguments.");
            break;
    }

}


function tobyError(err, functionName) {
    console.log(functionName + "has an invalid or non-optimal number arguments.");
}
