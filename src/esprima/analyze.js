//Node modules using requirejs
var fs = require('fs');
var esprima = require('esprima');
var estraverse = require('estraverse');

//Globals for use
var filename = process.argv[2];
console.log('Processing', filename,'\n');
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
    //Checks currnent nodes type
    if (node.type === 'CallExpression') {
        //Pulls the argument node from the current node
        var args = node['arguments'];
        //Pushes the functions names to our function list
        functions.push(getFunctionName(node));
        //Pushes all the argument names in the argument array to the list
        for (var i = 0; i < args.length; i++) {
            functions.push(args[i].value);
        }
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
//Analysis
for (var i = 0; i < functions.length; i++) {
    if (functions[i] == "getContext") {
        if (functions[i + 1] != "webgl" && functions[i + 1] != "experimental-webgl") error(0);
    }
}
console.log("Functions are: " + functions);
//END GL CONTEXT TEST

//Error output function. Will change to an array of errors that are printed at the end of traversing the ast.
function error(err) {
    switch (err) {
        case 0:
            console.log("The GL context variable isn't declared properly. Try using the string 'webgl' or 'experimental-webgl'.");
            break;
    }
}
