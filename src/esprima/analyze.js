var fs = require('fs');
var esprima = require('esprima');
var estraverse = require('estraverse');

var filename = process.argv[2];
var glCHECK = 0;
console.log('Processing', filename);
var ast = esprima.parse(fs.readFileSync(filename));

//GL CONTEXT test
estraverse.traverse(ast, {
  enter: function(node){
    if (node.type === 'Literal' && (node.value == 'web-gl' || node.value == 'experiment-webgl')){
        console.log("CONTEXT DECLARED");
        return;
    }
    //console.log(node);
  }
});