//Node modules using requirejs
var fs = require('fs');
var esprima = require('esprima');
var estraverse = require('estraverse');

//Globals for use
var filename = process.argv[2];
console.log('Processing', filename,'\n');

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
var numTypes = ["UNSIGNED_BYTE", "UNSIGNED_SHORT", "BYTE", "SHORT", "FIXED", "FLOAT"];



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

//END GL CONTEXT TEST

function analyzeArgs(functionName, args){
 //Uniform 1 i- if
    if (functionName == "uniform1f" || functionName == "uniform1i") {
         if(args.length != 1){
            error(20);
        }
        if(args[0].type != "Literal" && args[0].type != "Identifier"){
            error(21);
        }
    }
    if (functionName == "uniform2f" || functionName == "uniform2i" ){
         if (args.length != 2)
            error(20);
        if((args[0].type != "Literal" && args[0].type != "Identifier") || (args[1].type != "Literal" && args[1].type != "Identifier"))
            error(21);
    }
    if (functionName == "uniform3f" || functionName == "uniform3i") {
         if (args.length != 3)
            error(20);
        if((args[0].type != "Literal" && args[0].type != "Identifier") || (args[1].type != "Literal" && args[1].type != "Identifier") || (args[2].type != "Literal" && args[2].type != "Identifier"))
            error(21);
    }
    if(functionName == "uniform4f"  || functionName == "uniform4i") {
        if (args.length != 4)
            error(20);
        if((args[0].type != "Literal" && args[0].type != "Identifier") || (args[1].type != "Literal" && args[1].type != "Identifier") || (args[2].type != "Literal" && args[2].type != "Identifier") || (args[3].type != "Literal" && args[3].type != "Identifier"))
            error(21);
    }

 //Uniform - 2 args: uint, array void uniform[1234][fi]v(uint location, Array value)
      if (functionName == "uniform1fv" || functionName == "uniform1iv") {
         if(args.length != 1){
            error(20);
        }
        if(args[0].type != "Literal" && args[0].type != "Identifier"){
            error(21);
        }
    }
    if (functionName == "uniform2fv" || functionName == "uniform2iv" ){
         if (args.length != 2)
            error(20);
        if((args[0].type != "Literal" && args[0].type != "Identifier") || (args[1].type != "Literal" && args[1].type != "Identifier"))
            error(21);
    }
    if (functionName == "uniform3fv" || functionName == "uniform3iv") {
         if (args.length != 3)
            error(20);
        if((args[0].type != "Literal" && args[0].type != "Identifier") || (args[1].type != "Literal" && args[1].type != "Identifier") || (args[2].type != "Literal" && args[2].type != "Identifier"))
            error(21);
    }
    if(functionName == "uniform4fv"  || functionName == "uniform4iv") {
        if (args.length != 4)
            error(20);
        if((args[0].type != "Literal" && args[0].type != "Identifier") || (args[1].type != "Literal" && args[1].type != "Identifier") || (args[2].type != "Literal" && args[2].type != "Identifier") || (args[3].type != "Literal" && args[3].type != "Identifier"))
            error(21);

    }
  //Vertex Attrib 3 F- multiple, maybe add fv
      if (functionName == "vertexAttrib1f") {
         if(args.length != 1){
            error(20);
        }
        if(args[0].type != "Literal" && args[0].type != "Identifier"){
            error(21);
        }
    }
    if (functionName == "vertexAttrib2f"){
         if (args.length != 2)
            error(20);
        if((args[0].type != "Literal" && args[0].type != "Identifier") || (args[1].type != "Literal" && args[1].type != "Identifier"))
            error(21);
    }
    if (functionName == "vertexAttrib3f") {
         if (args.length != 3)
            error(20);
        if((args[0].type != "Literal" && args[0].type != "Identifier") || (args[1].type != "Literal" && args[1].type != "Identifier") || (args[2].type != "Literal" && args[2].type != "Identifier"))
            error(21);
    }
    if(functionName == "vertexAttrib4f") {
        if (args.length != 4)
            error(20);
        if((args[0].type != "Literal" && args[0].type != "Identifier") || (args[1].type != "Literal" && args[1].type != "Identifier") || (args[2].type != "Literal" && args[2].type != "Identifier") || (args[3].type != "Literal" && args[3].type != "Identifier"))
            error(21);
    }
 //Vertex Attrib Pointer-3 args: uint, int, enum, bool, long, long
    if (functionName == "vertexAttribPointer") {
        if ((args[0].type != "Identifier" && args[0].type != "Literal" ) || (args[1].type != "Identifier" && args[1].type != "Literal" ) || (numTypes.indexOf(args[2].property.name) == -1) || (args[3].type != "Identifier" && args[3].type != "Literal" ) || (args[4].type != "Identifier" && args[4].type != "Literal" ) || (args[5 ].type != "Identifier" && args[5].type != "Literal" ))
            error(22);
    }

 //Enable Vertex Attrib Array-1 arg uint
    if (functionName == "enableVertexAttribArray") {
        if (args[0].type != "Identifier" && args[0].type != "Literal")
            error(23);
    }


 //Disable Vertex Attrib Arrayvoid disableVertexAttribArray(uint index) index: [0, MAX_VERTEX_ATTRIBS - 1]
    if (functionName == "disableVertexAttribArray") {
        if (args[0].type != "Identifier" && args[0].type != "Literal")
            error(24);
    }


 //Active Texture- void activeTexture(enum texture)
    if (functionName == "activeTexture") {
        if (args[0].type != "Identifier" || (args[0].property.name !="TEXTURE0" && args[0].property.name !="TEXTURE1" && args[0].property.name !="TEXTURE2" && args[0].property.name !="TEXTURE3" && args[0].property.name !="TEXTURE4" && args[0].property.name !="TEXTURE5" && args[0].property.name !="TEXTURE6" && args[0].property.name !="TEXTURE7"))
            error(25);
    }

 //Draw Arrays-void drawArrays(enum mode, int first, long count)
    if (functionName == "drawArrays") {
        if ((args[0].property.name!="LINE_STRIP" && args[0].property.name!="LINES" && args[0].property.name!="POINTS" && args[0].property.name!="TRIANGLE_STRIP" && args[0].property.name!="TRIANGLES") || (args[1].type !="Identifier" && args[1].type != "Literal") || (args[2].type!="Identifier" && args[2].type!="Literal"))
            error(26);
    }
 //Use Program - void useProgram(Object program)
    if (functionName == "useProgram") {
        if (args[0].type != "Identifier")
            error(27);
    }
//Get Attrib Location-ulong getAttribLocation(Object program, string name)
    if (functionName == "getAttribLocation") {
        if (args[0].type != "Identifier" || ( args[1].type != "Identifier" && args[1].type != "Literal"))
            error(28);
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
    }
}