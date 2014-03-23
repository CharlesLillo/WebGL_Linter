/**
A sloppy, first attempt grammar. Good enough for hw2p4, but not fully
representative of how our full-featured parser will look. HTML in general
is fairly difficult to parse, so we will be sticking a dedicated XML or HTML
parser before the ANTLR parser in the pipeline to avoid reliability problems.
This will also enable us to focus on just parsing C and Javascript, which will
already be a nontrivial task as it is.
*/

grammar test;

document    :   htmlElement ;

/*TODO: allow an arbitrary number of arbitrary elements before and after
        headElement*/
htmlElement : '<html>' Whitespace* headElement Whitespace* '</html>' ;

/*TODO: this is just for testing */
headElement :   '<head>' Whitespace* vertexCodeScript Whitespace* fragmentCodeScript Whitespace* javascript Whitespace* '</head>' ;

content     :   chardata? ;

chardata    :   Var | Glcontextsym | TEXT | SEA_WS; 

vertexCodeScript    :   '<script id="vertex-code" type="x-shader">' Whitespace* content Whitespace* '</script>' ;
fragmentCodeScript  :   '<script id="fragment-code" type="x-shader">' Whitespace* content Whitespace* '</script>' ;
javascript  :   '<script type="text/javascript">' Whitespace* content Whitespace* '</script>' ;

/*Catch all token modifier*/
//tokenZ: var | glcontextsym | boolsym;

/*JS types*/
Var 		:	'var' ;

/*GL CONTEXT VARIABLE (HARDCODED FOR PARSING)*/
Glcontextsym 	: 	'gl' | 'GL';

/*GLSL Types*/
Boolsym			:	'bool' ;
Bytesym			:	'byte' ;
Ubytesym		:	'ubyte' ;
Intsym 			:	'int' ;
Uintsym			:	'uint' ;
Charsym 		:	'char' ;
Shortsym 		:	'short' ;
Ushortsym 		:	'ushort' ;
Fixedsym		:	'fixed' ;
Sizeisym 		:	'sizei' ;
Enumsym 		:	'enum' ;
Intptrsym 		:	'intptr' ;
Sizeiptrsym 	:	'sizeiptr' ;
Floatsym 		:	'float' ;
Clampfsym  		:	'clampf' ;
Bitfieldsym  	:	'bitfield' ;

/*GL types*/
Attribute 	:	'attribute' ;
Uniform 	:	'uniform' ;
Varying 	:	'varying' ;
Vec4 		:	'vec4' ;
Vec3 		:	'vec3' ;
Vec2 		:	'vec2' ;
Mat4 		:	'mat4' ;
Mat3 		:	'mat3' ;
Mat2 		:	'mat2' ;
Sampler2D 	:	'sampler2D' ;

/*GL Required Constants*/
Const1sym 	:	'COLOR_BUFFER_BIT' ;
Const2sym 	:	'DEPTH_BUFFER_BIT' ;
Const3sym 	:	'STENCIL_BUFFER_BIT' ;
Const4sym 	:	'FRAMEBUFFER' ;
Const5sym 	:	'RENDERBUFFER' ;
Const6sym 	:	'TEXTURE_2D' ;
Const7sym 	:	'RGB' ;
Const8sym 	:	'NEAREST' ;
Const9sym 	:	'RGBA' ;
Const10sym 	:	'UNSIGNED_BYTE' ;
Const11sym 	:	'DEPTH_ATTACHMENT' ;
Const12sym 	:	'COLOR_ATTACHMENT0' ;
Const13sym 	:	'DEPTH_COMPONENT16' ;
Const14sym 	:	'TEXTURE_WRAP_S' ;
Const15sym 	:	'CLAMP_TO_EDGE' ;
Const16sym 	:	'DEPTH_TEST' ;
Const17sym 	:	'TEXTURE_MAG_FILTER' ;
Const18sym 	:	'TEXTURE_MIN_FILTER' ;
Const19sym 	:	'ARRAY_BUFFER' ;
Const20sym 	:	'STATIC_DRAW' ;
Const21sym 	:	'FLOAT' ;
Const22sym 	:	'TEXTURE0' ;
Const23sym 	:	'TEXTURE1' ;
Const24sym 	:	'TEXTURE2' ;
Const25sym 	:	'TRIANGLES' ;
Const26sym 	:	'UNPACK_FLIP_Y_WEBGL' ;
Const27sym 	:	'LINEAR' ;
Const28sym 	:	'LINEAR_MIPMAP_LINEAR' ;
Const29sym 	:	'UNPACK_ALIGNMENT' ;
Const30sym 	:	'ELEMENT_ARRAY_BUFFER' ;
Const31sym 	:	'POINT' ;
Const32sym 	:	'LINES' ;
Const33sym 	:	'LINE_LOOP' ;
Const34sym 	:	'LINE_STRIP' ;
Const35sym 	:	'TRIANGLE_STRIP' ;
Const36sym 	:	'TRIANGLE_FAN' ;

/*JS Functions - NOTE, many of these will actually require parameters and parenthesis, not whitespace after */
Func1sym 	:	'getContext';
Func2sym 	:	'getExtension';
Func3sym 	:	'clear';
Func4sym 	:	'createFramebuffer';
Func5sym 	:	'bindFramebuffer';
Func6sym 	:	'createTexture';
Func7sym 	:	'bindTexture';
Func8sym 	:	'texParameteri';
Func9sym 	:	'texImage2D';
Func10sym 	:	'createRenderbuffer';
Func11sym 	:	'bindRenderbuffer';
Func12sym 	:	'renderbufferStorage';
Func13sym 	:	'framebufferTexture2D';
Func14sym 	:	'framebufferRenderbuffer';
Func15sym 	:	'readPixels';
Func16sym 	:	'clearColor';
Func17sym 	:	'enable';
Func18sym 	:	'createBuffer';
Func19sym 	:	'bufferData';
Func20sym 	:	'bindBuffer';
Func21sym 	:	'uniform4fv';
Func22sym 	:	'enableVertexAttribArray';
Func23sym 	:	'vertexAttribPointer';
Func24sym 	:	'disableVertexAttribArray';
Func25sym 	:	'vertexAttrib3f';
Func26sym 	:	'activeTexture';
Func27sym 	:	'uniform1i';
Func28sym 	:	'drawArrays';
Func29sym 	:	'useProgram';
Func30sym 	:	'getAttribLocation';
Func31sym 	:	'getUniformLocation';
Func32sym 	:	'pixelStorei';
Func33sym 	:	'generateMipmap';
Func34sym 	:	'uniformMatrix4fv';
Func35sym 	:	'uniform3fv';
Func36sym 	:	'uniform1f';
Func37sym 	:	'viewport';
Func38sym 	:	'shaderSource';
Func39sym 	:	'compileShader';
Func40sym 	:	'attachShader';
Func41sym 	:	'linkProgram';
Func42sym 	:	'createProgram';
Func43sym 	:	'experimental-'?'webgl';

/*GLSL Functions*/
Glfunc1sym  :   'normalize';
Glfunc2sym  :   'dot';
Glfunc3sym  :   'reflect';
Glfunc4sym  :   'max';
Glfunc5sym  :   'texture2D';

/*GLSL Dedicated Variables*/
GlPOSsym	: 'gl_Position' ;
GlFRAGsym	: 'gl_FragColor' ;

/*Other words*/
Ifsym  		:   'if';
Whilesym  	:   'while';
Dosym  		:   'do';
Thensym  	:   'then';
Constsym  	:   'const';
Elsesym		:	'else';
Nullsym		:	'null';
Truesym		:	'true';
Falsesym	:	'false';

/*Arithmetic and Logic Symbols*/
Leqsym  		:   '<=';
Geqsym  		:   '>=';
Neqsym  		:   '<>';
Gtrsym  		:   '>';
Lessym  		:   '<';
Plussym			:	'+';
Eqsym			:	'=';
Minussym		:	'-';
Multsym			:	'*';/*may need adjustment or watch for pointers*/
Slashsym  		:   '/';
Lparentsym  	:   '(';
Rparentsym  	:   ')';
Commasym  		:   ',';
Semicolonsym  	:   ';';
Periodsym		:	'.';
Quotsym			:	'"';

/*FUNCTION DEFINITONS (I am replacing DONTCARESYM with the TEXT rule so it compiles for the time being)*/
// getContext: glcontextsym periodsym func1sym lparentsym quotsym glcontextsym periodsym func43sym quotsym rparentsym semicolonsym;
// getExtension: glcontextsym periodsym func2sym lparentsym quotsym TEXT quotsym rparentsym semicolonsym;
// clear: glcontextsym periodsym func3sym lparentsym glcontextsym periodsym (const1sym | const2sym | const3sym) rparentsym semicolonsym;
// createFrameBuffer: glcontextsym periodsym func4sym lparentsym rparentsym semicolonsym;
// bindFrameBuffer: glcontextsym periodsym func5sym lparentsym glcontextsym periodsym const19sym commasym glcontextsym periodsym const4sym rparentsym semicolonsym;
// createTexture: glcontextsym periodsym func6sym lparentsym rparentsym semicolonsym;
// bindTexture: glcontextsym periodsym func7sym lparentsym glcontextsym periodsym const6sym commasym TEXT rparentsym semicolonsym;
// texParameteri: glcontextsym periodsym func8sym lparentsym glcontextsym periodsym const6sym rparentsym semicolonsym;
// texImage2D: glcontextsym periodsym func9sym lparentsym glcontextsym periodsym const6sym commasym NUM commasym glcontextsym periodsym const9sym commasym NUM commasym NUM commasym NUM commasym glcontextsym periodsym const9sym commasym glcontextsym periodsym const10sym commasym nullsym rparentsym semicolonsym;
// createRenderbuffer: glcontextsym periodsym func10sym lparentsym rparentsym semicolonsym;
// bindRenderbuffer: glcontextsym periodsym func11sym lparentsym glcontextsym periodsym const5sym commasym TEXT rparentsym semicolonsym;
// renderbufferStorage: glcontextsym periodsym func12sym lparentsym glcontextsym periodsym const5sym commasym glcontextsym periodsym const13sym commasym NUM commasym NUM rparentsym semicolonsym;
// framebufferTexture2D: glcontextsym periodsym func13sym lparentsym glcontextsym periodsym const4sym commasym glcontextsym periodsym const12sym commasym glcontextsym periodsym const6sym commasym TEXT commasym intsym rparentsym semicolonsym;
// framebufferRenderbuffer: glcontextsym periodsym func14sym lparentsym glcontextsym periodsym const4sym commasym (const11sym | const12sym) commasym glcontextsym periodsym const5sym commasym TEXT rparentsym semicolonsym;
// readPixels: glcontextsym periodsym func15sym lparentsym intsym commasym intsym commasym intsym commasym intsym commasym glcontextsym periodsym const10sym commasym const10sym rparentsym semicolonsym;
// clearColor: glcontextsym periodsym func16sym lparentsym floatsym commasym floatsym commasym floatsym commasym floatsym rparentsym semicolonsym;
// enable: glcontextsym periodsym func17sym lparentsym glcontextsym periodsym const16sym rparentsym semicolonsym;
// createBuffer: glcontextsym periodsym func18sym lparentsym rparentsym semicolonsym;
// bufferData: glcontextsym periodsym func19sym lparentsym glcontextsym periodsym const19sym commasym TEXT commasym glcontextsym periodsym const20sym rparentsym semicolonsym;
// bindBuffer: glcontextsym periodsym func20sym lparentsym glcontextsym periodsym const19sym commasym TEXT rparentsym semicolonsym;
// uniform4fv: glcontextsym periodsym func21sym lparentsym uintsym commasym TEXT rparentsym semicolonsym;
// enableVertexAttribArray: glcontextsym periodsym func22sym lparentsym uintsym rparentsym semicolonsym;
// vertexAttribPointer: glcontextsym periodsym func23sym lparentsym uintsym commasym intsym commasym glcontextsym periodsym const21sym commasym boolsym commasym intsym commasym intsym rparentsym semicolonsym;
// disableVertexAttribArray: glcontextsym periodsym func24sym lparentsym uintsym rparentsym semicolonsym;
// vertexAttrib3f: glcontextsym periodsym func25sym lparentsym uintsym commasym NUM commasym NUM commasym NUM rparentsym semicolonsym;

/*activeTexure: func26sym lparentsym (const22sym || const23sym || const24sym) rparentsym semicolonsym;
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
viewport: func37sym lparentsym intsym commasym intsym commasym intsym commasym NUM rparentsym semicolonsym;
shaderSource: func38sym lparentsym TEXT commasym TEXT rparentsym semicolonsym;
compileShader: func39sym lparentsym TEXT rparentsym semicolonsym;
attachShader: func40sym lparentsym TEXT commasym TEXT rparentsym semicolonsym;
linkProgram: func41sym lparentsym TEXT rparentsym semicolonsym;
createProgram: func42sym lparentsym rparentsym semicolonsym;*/


Whitespace  :   [ \t\r\n]+;
NUM 		:	('0'..'9')+;
TEXT        :   ~['</']+ ;  //I don't know why this works but it does. Then again, it probably doesn't work.
SEA_WS      :   (' '|'\t'|'\r'? '\n')+ ; 