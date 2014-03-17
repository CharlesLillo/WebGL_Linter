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

/*GL Required Constants*/
const1sym 	:	'COLOR_BUFFER_BIT' Whitespace*;
const2sym 	:	'DEPTH_BUFFER_BIT' Whitespace*;
const3sym 	:	'STENCIL_BUFFER_BIT' Whitespace*;
const4sym 	:	'FRAMEBUFFER' Whitespace*;
const5sym 	:	'RENDERBUFFER' Whitespace*;
const6sym 	:	'TEXTURE_2D' Whitespace*;
const7sym 	:	'RGB' Whitespace*;
const8sym 	:	'NEAREST' Whitespace*;
const9sym 	:	'RGBA' Whitespace*;
const10sym 	:	'UNSIGNED_BYTE' Whitespace*;

const11sym 	:	'DEPTH_ATTACHMENT' Whitespace*;
const12sym 	:	'COLOR_ATTACHMENT0' Whitespace*;
const13sym 	:	'DEPTH_COMPONENT16' Whitespace*;
const14sym 	:	'TEXTURE_WRAP_S' Whitespace*;
const15sym 	:	'CLAMP_TO_EDGE' Whitespace*;
const16sym 	:	'DEPTH_TEST' Whitespace*;
const17sym 	:	'TEXTURE_MAG_FILTER' Whitespace*;
const18sym 	:	'TEXTURE_MIN_FILTER' Whitespace*;
const19sym 	:	'ARRAY_BUFFER' Whitespace*;
const20sym 	:	'STATIC_DRAW' Whitespace*;

const21sym 	:	'FLOAT' Whitespace*;
const22sym 	:	'TEXTURE0' Whitespace*;
const23sym 	:	'TEXTURE1' Whitespace*;
const24sym 	:	'TEXTURE2' Whitespace*;
const25sym 	:	'TRIANGLES' Whitespace*;
const26sym 	:	'UNPACK_FLIP_Y_WEBGL' Whitespace*;
const27sym 	:	'LINEAR' Whitespace*;
const28sym 	:	'LINEAR_MIPMAP_LINEAR' Whitespace*;
const29sym 	:	'UNPACK_ALIGNMENT' Whitespace*;
const30sym 	:	'ELEMENT_ARRAY_BUFFER' Whitespace*;

const31sym 	:	'POINT' Whitespace*;
const32sym 	:	'LINES' Whitespace*;
const33sym 	:	'LINE_LOOP' Whitespace*;
const34sym 	:	'LINE_STRIP' Whitespace*;
const35sym 	:	'TRIANGLE_STRIP' Whitespace*;
const36sym 	:	'TRIANGLE_FAN' Whitespace*;

/*JS Functions - NOTE, many of these will actually require parameters and parenthesis, not whitespace after */
func1sym 	:	'getContext';
func2sym 	:	'getExtension';
func3sym 	:	'clear';
func4sym 	:	'createFramebuffer';
func5sym 	:	'bindFramebuffer';
func6sym 	:	'createTexture';
func7sym 	:	'bindTexture';
func8sym 	:	'texParameteri';
func9sym 	:	'texImage2D';
func10sym 	:	'createRenderbuffer';

func11sym 	:	'bindRenderbuffer';
func12sym 	:	'renderbufferStorage';
func13sym 	:	'framebufferTexture2D';
func14sym 	:	'framebufferRenderbuffer';
func15sym 	:	'readPixels';
func16sym 	:	'clearColor';
func17sym 	:	'enable';
func18sym 	:	'createBuffer';
func19sym 	:	'bufferData';
func20sym 	:	'bindBuffer';

func21sym 	:	'uniform4fv';
func22sym 	:	'enableVertexAttribArray';
func23sym 	:	'vertexAttribPointer';
func24sym 	:	'disableVertexAttribArray';
func25sym 	:	'vertexAttrib3f';
func26sym 	:	'activeTexture';
func27sym 	:	'uniform1i';
func28sym 	:	'drawArrays';
func29sym 	:	'useProgram';
func30sym 	:	'getAttribLocation';

func31sym 	:	'getUniformLocation';
func32sym 	:	'pixelStorei';
func33sym 	:	'generateMipmap';
func34sym 	:	'uniformMatrix4fv';
func35sym 	:	'uniform3fv';
func36sym 	:	'uniform1f';
func37sym 	:	'viewport';
func38sym 	:	'shaderSource';
func39sym 	:	'compileShader';
func40sym 	:	'attachShader';

func41sym 	:	'linkProgram';
func42sym 	:	'createProgram';
func43sym 	:	'experimental-'?'webgl';

/*GLSL Functions*/
glfunc1sym  :   'normalize';
glfunc2sym  :   'dot';
glfunc3sym  :   'reflect';
glfunc4sym  :   'max';
glfunc5sym  :   'texture2D';

/*GLSL Dedicated Variables*/
glPOSsym	: 'gl_Position' Whitespace*;
glFRAGsym	: 'gl_FragColor' Whitespace*;

/*Other words*/
ifsym  		:   'if';
whilesym  	:   'while';
dosym  		:   'do';
thensym  	:   'then';
constsym  	:   'const';
elsesym		:	'else';
nullsym		:	'null';
truesym		:	'true';
falsesym	:	'false';

/*Arithmetic and Logic Symbols*/
leqsym  		:   '<=';
geqsym  		:   '>=';
neqsym  		:   '<>';
gtrsym  		:   '>';
lessym  		:   '<';
plussym			:	'+';
eqsym			:	'=';
minussym		:	'-';
multsym			:	'*';/*may need adjustment or watch for pointers*/
slashsym  		:   '/';
lparentsym  	:   '(';
rparentsym  	:   ')';
commasym  		:   ',';
semicolonsym  	:   ';';
periodsym		:	'.';
quotsym			:	'"';

//FUNCTION DEFINITONS (I am replacing DONTCARESYM with the TEXT rule so it compiles for the time being)
getContext: func1sym lparentsym quotsym func43sym quotsym rparentsym semicolonsym;

getExtension: func2sym lparentsym quotsym TEXT quotsym rparentsym semicolonsym;

clear: func3sym lparentsym (const1sym || const2sym || const3sym || *) rparentsym semicolonsym;

createFrameBuffer: func4sym lparentsym rparentsym semicolonsym;

bindFrameBuffer: func5sym lparentsym const19sym commasym const4sym rparentsym semicolonsym;

createTexture: func6sym lparentsym rparentsym semicolonsym;

bindTexture: func7sym lparentsym const6sym commasym TEXT rparentsym semicolonsym;

texParameteri: func8sym lparentsym (const6sym || *) rparentsym semicolonsym;

texImage2D: func9sym lparentsym (const6sym || *) commasym instym commasym (const9sym || *) commasym instym commasym instym commasym instym commasym (const9sym || *) commasym (const10sym || *) commasym (nullsym || *) rparentsym semicolonsym;

createRenderbuffer: func10sym lparentsym rparentsym semicolonsym;

bindRenderbuffer: func11sym lparentsym const5sym commasym TEXT rparentsym semicolonsym;

renderbufferStorage: func12sym lparentsym const5sym commasym (const13sym || *) commasym instym commasym instym rparentsym semicolonsym;

framebufferTexture2D: func13sym lparentsym (const4sym || *) commasym (const12sym || *) commasym (const6sym || *) commasym TEXT commasym intsym rparentsym semicolonsym;

framebufferRenderbuffer: func14sym lparentsym const4sym commasym (const11sym || const12sym || *) commasym const5sym commasym TEXT rparentsym semicolonsym;

readPixels: func15sym lparentsym intsym commasym intsym commasym intsym commasym intsym commasym const10sym commasym varsym rparentsym semicolonsym;

clearColor: func16sym lparentsym floatsym commasym floatsym commasym floatsym commasym floatsym rparentsym semicolonsym;

enable: func17sym lparentsym (const16sym || *) rparentsym semicolonsym;

createBuffer: func18sym lparentsym rparentsym semicolonsym;

bufferData: func19sym lparentsym (const19sym || *) commasym [(intsym) || (varsym)] commasym (const20sym || *) rparentsym semicolonsym;

bindBuffer: func20sym lparentsym rparentsym semicolonsym;

uniform4fv: func21sym lparentsym uintsym commasym varsym rparentsym semicolonsym;

enableVertexAttribArray: func22sym lparentsym uintsym rparentsym semicolonsym;

vertexAttribPointer: func23sym lparentsym uintsym commasym intsym commasym  (const21sym || *) commasym boolsym commasym intsym commasym intsym rparentsym semicolonsym;

disableVertexAttribArray: func24sym lparentsym uintsym rparentsym semicolonsym;

vertexAttrib3f: func25sym lparentsym uintsym commasym [(floatsym commasym floatsym commasym floatsym) || (intsym commasym intsym commasym intsym) || (varsym) || (*)] commasym rparentsym semicolonsym;

activeTexure: func26sym lparentsym (const22sym || const23sym || const24sym) rparentsym semicolonsym;

uniform1i: func27sym lparentsym uintsym commasym (intsym || varsym) rparentsym semicolonsym;

drawArrays: func28sym lparentsym ( const25sym || const31sym || const32sym || const33sym || const34sym || const35sym || const36sym) commasym intsym commasym intsym rparentsym semicolonsym;

useProgram: func29sym lparentsym TEXT rparentsym semicolonsym;

getAttribLocation: func30sym lparentsym TEXT commasym TEXT rparentsym semicolonsym;

getUniformLocation: func31sym lparentsym TEXT commasym TEXT rparentsym semicolonsym;

pixelStorei: func32sym lparentsym (const29sym || *) commasym intsym rparentsym semicolonsym;

generateMipmap: func33sym lparentsym (const6sym || *) rparentsym semicolonsym;

uniformMatrix4fv: func34sym lparentsym uintsym commasym falsesym commasym varsym rparentsym semicolonsym;

uniform3fv: func35sym lparentsym uintsym commasym falsesym commasym varsym rparentsym semicolonsym;

uniform1f: func36sym lparentsym uintsym commasym (floatsym || varsym) rparentsym semicolonsym;

viewport: func37sym lparentsym intsym commasym intsym commasym intsym commasym instym rparentsym semicolonsym;

shaderSource: func38sym lparentsym TEXT commasym TEXT rparentsym semicolonsym;

compileShader: func39sym lparentsym TEXT rparentsym semicolonsym;

attachShader: func40sym lparentsym TEXT commasym TEXT rparentsym semicolonsym;

linkProgram: func41sym lparentsym TEXT rparentsym semicolonsym;

createProgram: func42sym lparentsym rparentsym semicolonsym;


Whitespace  :   [ \t\r\n]+;

TEXT        :   ~['</']+ ;  //I don't know why this works but it does. Then again, it probably doesn't work.
SEA_WS      :   (' '|'\t'|'\r'? '\n')+ ; 