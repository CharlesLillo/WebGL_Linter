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
var internalFormats = ["ALPHA", "RGB", "RGBA", "LUMINANCE", "LUMINANCE_ALPHA"];
var byteTypes = ["UNSIGNED_BYTE", "UNSIGNED_SHORT_5_6_5", "UNSIGNED_SHORT_4_4_4_4", "UNSIGNED_SHORT_5_5_5_1"];
var texTargets = ["TEXTURE_2D", "TEXTURE_CUBE_MAP_POSITIVE_X", "TEXTURE_CUBE_MAP_POSITIVE_Y", "TEXTURE_CUBE_MAP_POSITIVE_Z", "TEXTURE_CUBE_MAP_NEGATIVE_X",
    "TEXTURE_CUBE_MAP_NEGATIVE_Y", "TEXTURE_CUBE_MAP_NEGATIVE_Z"
];
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
    if (functionName == "getContext") {
        if (args[0].value != "webgl" && args[0].value != "experimental-webgl")
            error(0);
    }
    //getExtension
    if (functionName == "getExtension") {
        if (args[0].type != "Literal")
            error(1);
    }
    //clear(needs binary experssion masking check)
    if (functionName == "clear") {
        if (args[0].type != "BinaryExpression") {
            if (bufferBits.indexOf(args[0].property.name)==-1)
                error(2);
        }
        else{
            if (bufferBits.indexOf(args[0].left.property.name)==-1 || bufferBits.indexOf(args[0].right.property.name)==-1  )
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
        if (args[0].property.name != "FRAMEBUFFER" || (args[1].type != "Identifier"))
            error(4);
    }
    //bindTexture
    if (functionName == "bindTexture") {
        if ((args[0].property.name != "TEXTURE_2D" && args[0].property.name != "TEXTURE_CUBE_MAP") || args[1].type != "Identifier")
            error(5);
    }
    //texParameteri (too many symbols to check for in arg[2], so ignoring)
    if (functionName == "texParameteri") {
        if ((args[0].property.name != "TEXTURE_2D" && args[0].property.name != "TEXTURE_CUBE_MAP") ||
            (args[1].property.name != "TEXTURE_WRAP_S" && args[1].property.name != "TEXTURE_WRAP_T" &&
                args[1].property.name != "TEXTURE_MIN_FILTER" && args[1].property.name != "TEXTURE_MAG_FILTER"));
        error(6);
    }
    //texImage2D
    if (functionName == "texImage2D") {
        if ((texTargets.indexOf(args[0].property.name) == -1) ||
            (args[1].type != "Literal" && args[1].type != "Identifier") ||
            (internalFormats.indexOf(args[2].property.name) == -1) ||
            (args[3].type != "Literal" && args[3].type != "Identifier") ||
            (args[4].type != "Literal" && args[4].type != "Identifier") ||
            (args[5].type != "Literal" && args[5].type != "Identifier") ||
            (internalFormats.indexOf(args[6].property.name) == -1) ||
            (byteTypes.indexOf(args[7].property.name) == -1) ||
            (args[8].type != "Literal" && args[8].type != "Identifier"))
            error(7);
    }
    //createRenderbuffer
    if (functionName == "createRenderbuffer") {
        if (args.length != 0)
            error(8);
    }
}

//Error output function. Will change to an array of errors that are printed at the end of traversing the ast.

function error(err) {
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
    }
}
