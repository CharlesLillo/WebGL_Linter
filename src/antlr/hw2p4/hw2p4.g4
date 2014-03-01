/**
A sloppy, first attempt grammar. Good enough for hw2p4, but not fully
representative of how our full-featured parser will look. HTML in general
is fairly difficult to parse, so we will be sticking a dedicated XML or HTML
parser before the ANTLR parser in the pipeline to avoid reliability problems.
This will also enable us to focus on just parsing C and Javascript, which will
already be a nontrivial task as it is.
*/

grammar hw2p4;

document    :   htmlElement ;

/*TODO: allow an arbitrary number of arbitrary elements before and after
        headElement*/
htmlElement : '<html>' Whitespace* headElement Whitespace* '</html>' ;

/*TODO: this is just for testing */
headElement :   '<head>' Whitespace* vertexCodeScript Whitespace* fragmentCodeScript Whitespace* javascript Whitespace* '</head>' ;

content     :   chardata? ;

chardata    :   TEXT | SEA_WS ; 

/*TODO: fix the glaring inadequacies of this grammar*/
vertexCodeScript    :   '<script id="vertex-code" type="x-shader">' Whitespace* content Whitespace* '</script>' ;
fragmentCodeScript  :   '<script id="fragment-code" type="x-shader">' Whitespace* content Whitespace* '</script>' ;
javascript  :   '<script type="text/javascript">' Whitespace* content Whitespace* '</script>' ;

/*JS types*/
var 		:	'var' Whitespace*;

/*GLSL Types*/
boolsym			:	'bool' Whitespace*;
bytesym			:	'byte' Whitespace*;
ubytesym		:	'ubyte' Whitespace*;
intsym 			:	'int' Whitespace*;
uintsym			:	'uint' Whitespace*;
charsym 		:	'char' Whitespace*;
shortsym 		:	'short' Whitespace*;
ushortsym 		:	'ushort' Whitespace*;
fixedsym		:	'fixed' Whitespace*;
sizeisym 		:	'sizei' Whitespace*;
enumsym 		:	'enum' Whitespace*;
intptrsym 		:	'intptr' Whitespace*;
sizeiptrsym 	:	'sizeiptr' Whitespace*;
floatsym 		:	'float' Whitespace*;
clampfsym  		:	'clampf' Whitespace*;
bitfieldsym  	:	'bitfield' Whitespace*;

/*GL types*/
attribute 	:	'attribute' Whitespace*;
uniform 	:	'uniform' Whitespace*;
varying 	:	'varying' Whitespace*;
vec4 		:	'vec4' Whitespace*;
vec3 		:	'vec3' Whitespace*;
vec2 		:	'vec2' Whitespace*;
mat4 		:	'mat4' Whitespace*;
mat3 		:	'mat3' Whitespace*;
mat2 		:	'mat2' Whitespace*;
sampler2D 	:	'sampler2D' Whitespace*;

Whitespace  :   [ \t\r\n]+;

TEXT        :   ~['</']+ ;  //I don't know why this works but it does. Then again, it probably doesn't work.
SEA_WS      :   (' '|'\t'|'\r'? '\n')+ ; 