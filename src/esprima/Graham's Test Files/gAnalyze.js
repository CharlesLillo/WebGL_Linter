//Node modules using requirejs
var fs = require('fs');
var esprima = require('esprima');
var estraverse = require('estraverse');

//Globals for use
var filename = process.argv[2];
console.log('Processing', filename, '\n');

//AST Object created by esprima, for argv program name
var ast = esprima.parse(fs.readFileSync(filename));
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
var targetBufferData = ["ARRAY_BUFFER", "ELEMENT_ARRAY_BUFFER"];
var usageBufferData = ["STATIC_DRAW", "STREAM_DRAW", "DYNAMIC_DRAW"];
var cap = ["BLEND", "CULL_FACE", "DEPTH_TEST", "DITHER", "POLYGON_OFFSET_FILL", "SAMPLE_ALPHA_TO_COVERAGE", "SAMPLE_COVERAGE", "SCISSOR_TEST", "STENCIL_TEST"];
var attachments = ["COLOR_ATTACHMENT0", "DEPTH_ATTACHMENT", "STENCIL_ATTACHMENT"];
var internalFormats = ["ALPHA", "RGB", "RGBA", "LUMINANCE", "LUMINANCE_ALPHA"];
var internalFormatsRender = ["DEPTH_COMPONENT16", "RGBA4", "RGB5_A1", "RGB565", "STENCIL_INDEX8"];
var byteTypes = ["UNSIGNED_BYTE", "UNSIGNED_SHORT_5_6_5", "UNSIGNED_SHORT_4_4_4_4", "UNSIGNED_SHORT_5_5_5_1"];
var texTargets = ["TEXTURE_2D", "TEXTURE_CUBE_MAP_POSITIVE_X", "TEXTURE_CUBE_MAP_POSITIVE_Y", "TEXTURE_CUBE_MAP_POSITIVE_Z", "TEXTURE_CUBE_MAP_NEGATIVE_X",
    "TEXTURE_CUBE_MAP_NEGATIVE_Y", "TEXTURE_CUBE_MAP_NEGATIVE_Z"];
var bufferBits = ["COLOR_BUFFER_BIT", "DEPTH_BUFFER_BIT", "STENCIL_BUFFER_BIT"];

//Begin Tests
estraverse.traverse(ast, {
    enter: enter
});

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
    if (functionName == "bindRenderbuffer") {
        // arg0
        if (args[0].property.type != "Identifier") {
            error(0);
        }
        else if (args[0].property.name != "RENDERBUFFER") {
            error(1);
        }
        // arg1
        if (args[1].type != "Identifier") {
            error(0);
        }
    }
    //getExtension
    if (functionName == "renderbufferStorage") {
        // arg0
        if (args[0].property.type != "Identifier") {
            error(0);
        }
        else if (args[0].property.name != "RENDERBUFFER") {
            error(1);
        }
        // arg1
        if (args[1].property.type != "Identifier") {
            error(0);
        }
        else if (internalFormatsRender.indexOf(args[1].property.name) == -1) {
            error(2);
        }
        // arg2
        if (args[2].type != "Literal" && args[2].type != "Identifier") {
            error(3);
        }
        // arg3
        if (args[3].type != "Literal" && args[3].type != "Identifier") {
            error(3);
        }
    }
    //clear(needs binary experssion masking check)
    if (functionName == "framebufferTexture2D") {
        // arg0
        if (args[0].property.type != "Identifier") {
            error(0);
        }
        else if (args[0].property.name != "FRAMEBUFFER") {
            error(4);
        }
        // arg1
        if (args[1].property.type != "Identifier") {
            error(0);
        }
        else if (attachments.indexOf(args[1].property.name) == -1) {
            error(5);
        }
        // arg2
        if (args[2].property.type != "Identifier") {
            error(0);
        }
        else if (args[2].property.name != "TEXTURE_2D") {
            error(6);
        }
        // arg3
        if (args[3].type != "Identifier") {
            error(0);
        }
        // arg4
        if (args[4].type != "Literal" && args[4].type != "Identifier") {
            error(3);
        }
    }
    //createFrameBuffer
    if (functionName == "framebufferRenderbuffer") {
        // arg0
        if (args[0].property.type != "Identifier") {
            error(0);
        }
        else if (args[0].property.name != "FRAMEBUFFER") {
            error(4);
        }
        // arg1
        if (args[1].property.type != "Identifier") {
            error(0);
        }
        else if (args[1].property.name != "DEPTH_ATTACHMENT") {
            error(7);
        }
        // arg2
        if (args[2].property.type != "Identifier") {
            error(0);
        }
        else if (args[2].property.name != "RENDERBUFFER") {
            error(1);
        }
        // arg3
        if (args[3].type != "Identifier") {
            error(0);
        }
    }
    //bindFrameBuffer
    if (functionName == "readPixels") {
        // arg0
        if (args[0].type != "Literal" && args[0].type != "Identifier") {
            error(3);
        }
        // arg1
        if (args[1].type != "Literal" && args[1].type != "Identifier") {
            error(3);
        }
        // arg2
        if (args[2].type != "Literal" && args[2].type != "Identifier") {
            error(3);
        }
        // arg3
        if (args[3].type != "Literal" && args[3].type != "Identifier") {
            error(3);
        }
        // arg4
        if (args[4].property.type != "Identifier") {
            error(0);
        }
        else if (args[4].property.name != "RGBA") {
            error(8);
        }
        // arg5
        if (args[5].property.type != "Identifier") {
            error(0);
        }
        else if (args[5].property.name != "UNSIGNED_BYTE") {
            error(9);
        }
        // arg6
        if (args[6].type != "Identifier") {
            error(0);
        }
    }
    //bindTexture
    if (functionName == "clearColor") {
        // arg0
        if (args[0].type != "Literal" && args[0].type != "Identifier") {
            error(3);
        }
        // arg1
        if (args[1].type != "Literal" && args[1].type != "Identifier") {
            error(3);
        }
        // arg2
        if (args[2].type != "Literal" && args[2].type != "Identifier") {
            error(3);
        }
        // arg3
        if (args[3].type != "Literal" && args[3].type != "Identifier") {
            error(3);
        }
    }
    //texParameteri (too many symbols to check for in arg[2], so ignoring)
    if (functionName == "enable") {
        // arg0
        if (args[0].property.type != "Identifier") {
            error(0);
        }
        else if (cap.indexOf(args[0].property.name) == -1) {
            error(10);
        }
    }
    //texImage2D
    if (functionName == "createBuffer") {
        if (args.length != 0)
            error(3);
    }
    //createRenderbuffer
    if (functionName == "bufferData") {
        // arg0
        if (args[0].property.type != "Identifier") {
            error(0);
        }
        else if (targetBufferData.indexOf(args[0].property.name) == -1) {
            error(11);
        }
        // arg1
        if (args[1].type != "NewExpression") {
            error(15);
        }
        else if (args[1].callee.type != "Identifier") {
            error(14);
        }
        else if (args[1].callee.name != "Float32Array") {
            error(13);
        }
        else if (args[1].property)
        // arg2
        if (args[2].property.type != "Identifier") {
            error(0);
        }
        else if (usageBufferData.indexOf(args[2].property.name) == -1) {
            error(12);
        }
    }
    //createRenderbuffer
    if (functionName == "bindBuffer") {
        // arg0
        if (args[0].property.type != "Identifier") {
            error(0);
        }
        else if (args[0].property.name != "ARRAY_BUFFER") {
            error(11);
        }
        // arg1
        if (args[1].type != "Identifier") {
            error(0);
        }
    }
}

//Error output function. Will change to an array of errors that are printed at the end of traversing the ast.

function error(err) {
    switch (err) {
        case 0:
            console.log("Invlaid Type. Expected Type: Identifier");
            break;
        case 1:
            console.log("Invlaid Identifier. Expected Identifier: RENDERBUFFER");
            break;
        case 2:
            console.log("Invalid Identifier. Expected Identifier: DEPTH_COMPONENT16, RGBA4, RGB5_A1, RGB565, STENCIL_INDEX8");
            break;
        case 3:
            console.log("Invalid Type. Expected Type: Identifier or Literal");
            break;
        case 4:
            console.log("Invlaid Identifier. Expected Identifier: FRAMEBUFFER");
            break;
        case 5:
            console.log("Invlaid Identifier. Expected Identifier: COLOR_ATTACHMENT0, DEPTH_ATTACHMENT, STENCIL_ATTACHMENT");
            break;
        case 6:
            console.log("Invlaid Identifier. Expected Identifier: TEXTURE_2D");
            break;
        case 7:
            console.log("Invlaid Identifier. Expected Identifier: DEPTH_ATTACHMENT");
            break;
        case 8:
            console.log("Invlaid Identifier. Expected Identifier: RGBA");
            break;
        case 9:
            console.log("Invlaid Identifier. Expected Identifier: UNSIGNED_BYTE");
            break;
        case 10:
            console.log("Invlaid Identifier. Expected Identifier: BLEND, CULL_FACE, DEPTH_TEST, DITHER, POLYGON_OFFSET_FILL, SAMPLE_ALPHA_TO_COVERAGE, SAMPLE_COVERAGE, SCISSOR_TEST, STENCIL_TEST");
            break;
        case 11:
            console.log("Invlaid Identifier. Expected Identifier: ARRAY_BUFFER, ELEMENT_ARRAY_BUFFER");
            break;
        case 12:
            console.log("Invlaid Identifier. Expected Identifier: STATIC_DRAW, STREAM_DRAW, DYNAMIC_DRAW");
            break;
        case 13:
            console.log("Invlaid Identifier. Expected Identifier: Float32Array");
            break;
        case 14:
            console.log("Invlaid Callee Type. Expected Type: Identifier");
            break;
        case 15:
            console.log("Invlaid Type. Expected Type: NewExpression");
            break;
    }
}
