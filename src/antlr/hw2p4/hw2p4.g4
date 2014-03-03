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


Whitespace  :   [ \t\r\n]+;

TEXT        :   ~['</']+ ;  //I don't know why this works but it does. Then again, it probably doesn't work.
SEA_WS      :   (' '|'\t'|'\r'? '\n')+ ; 