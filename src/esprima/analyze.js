//Node modules using requirejs
var fs = require('fs');
var esprima = require('esprima');
var estraverse = require('estraverse');

//Globals for use
var filename = process.argv[2];
console.log('Processing', filename, '\n');
var glCHECK = 0;
var functions = [];

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

//GL Context test
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
        if (args[0].property.name != "COLOR_BUFFER_BIT" && args[0].property.name != "DEPTH_BUFFER_BIT" && args[0].property.name != "STENCIL_BUFFER_BIT")
            error(2);
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
        if (args[0].value != "webgl" && args[0].value != "experimental-webgl")
            error(5);
    }
    //texParameteri
    if (functionName == "texParameteri") {
        if (args[0].value != "webgl" && args[0].value != "experimental-webgl")
            error(6);
    }
    //texImage2D
    if (functionName == "texImage2D") {
        if (args[0].value != "webgl" && args[0].value != "experimental-webgl")
            error(7);
    }
    //createRenderbuffer
    if (functionName == "createRenderbuffer") {
        if (args[0].value != "webgl" && args[0].value != "experimental-webgl")
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
        	console.log("createFrameBuffer should not have arguments.");
        	break;
        case 4: 
        	console.log("Framebuffer not bound correctly.");
        	break;
    }
}
