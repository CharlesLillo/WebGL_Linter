/*
 * Parses Javascript. Wtf else do you want from me?
 */
parser grammar Javascript_Grammar;

//This is most likely incorrect dec but we'll fix it
tokens{
boolsym = 1, identsym, numbersym, plussym, minussym,
multsym, slashsym, oddsym, eqsym, neqsym,
lessym, leqsym, gtrsym, geqsym, lparentsym,
rparentsym, commasym, semicolonsym, periodsym, becomessym,
uintsym, bytesym, ifsym, thensym, whilesym,
dosym, callsym, constsym, intsym, ubytesym, quotsym,
charsym, shortsym, elsesym, fixedsym, sizeisym, enumsym, intptrsym,
sizeiptrsym, floatsym, bitfieldsym, varsym, clampfsym, attribsym,
unisym, varysym, vec4sym, vec3sym, vec2sym, mat4sym, mat3sym, mat2sym,
sampsym, ushortsym, const1sym, const2sym, const3sym, const4sym, const5sym, const6sym,
const7sym, const8sym, const9sym, const10sym, const11sym, const12sym, const13sym,
const14sym, const15sym, const16sym, const17sym, const18sym, const19sym, const20sym,
const21sym, const22sym, const23sym, const24sym, const25sym, const26sym, const27sym,
const28sym, const29sym, const30sym, const31sym, const32sym, const33sym, const34sym,
const35sym, const36sym, func1sym, func2sym, func3sym, func4sym, func5sym, func6sym,
func7sym, func8sym, func9sym, func10sym, func11sym, func12sym, func13sym,
func14sym, func15sym, func16sym, func17sym, func18sym, func19sym, func20sym,
func21sym, func22sym, func23sym, func24sym, func25sym, func26sym, func27sym,
func28sym, func29sym, func30sym, func31sym, func32sym, func33sym, func34sym,
func35sym, func36sym, func37sym, func38sym, func39sym, func40sym, func41sym,
func42sym, func43sym, GLPOSsym, GLFRAGsym,
GLfunc1sym, GLfunc2sym, GLfunc3sym, GLfunc4sym, GLfunc5sym, DONTCAREsym
}

/*JS Function Rules*/
call: 

webgl_function: getContext
| clear

/* 
	Notes by Graham on 2/8/2014: 
		- Many const#sym parameters must have 'gl.' prepended to the constant, assuming gl = canvas.getContext("webgl"); For example, in the clear function, func3sym, the first parameter may be gl.COLOR_BUFFER_BIT. We have that const1sym is COLOR_BUFFER_BIT. How will we ensure that our context variable is prepended to the contants that require it to be?
		- Should we support longsym?: 
			- Justification: a lot of the intsym should technically be longsym, specifically where a width or height is the function parameter. There are some other function parameters that may be longs as well.

	Masks:
		- clear, func3sym, may contain a mask in the parameter.
			- For example, a call to clear may look like gl.clear(gl.COLOR_BUFFER_BIT|gl.DEPTH_BUFFER_BIT);
			- We may need to introduct a pipesym to allow for masks where they are allowed.

	DONTCAREsym to be typechecked:
		- The following functions containing DONTCAREsym must be typechecked as the parameter is equal to another JS function.
			- bindTexture must have a createTexture();
			- bindRenderbuffer must have a createRenderbuffer();
			- framebufferTexture2D must have a createTexture();
			- framebufferRenderbuffer must have a createRenderBuffer();
			- useProgram must have a createProgram();
			- getAttribLocation must have a createProgram(); and an attributeName, where attributeName is a valid attribute variable that exists in the Vertex Shader program.
			- getUniformLocation must have a createProgram(); and a uniformName, where uniformName is a valid uniform variable that exists in the Vertex Shader program.
			- shaderSource must take a createShader(); and a sourceString, where sourceString is a string containing the source code of the shader it is associated with.
			- compileShader must take a createShader();
			- attachShader must take a createProgram(); and a createShader();
			- linkProgram must take a createProgram();

	varsym to be typechecked:
		- readPixels must take an Object pixels.
		- uniform4fv must take an Array value.
		- vertexAttrib3f may take an Array value.
		- uniform1i may take an int.
		- uniformMatrix4fv must take an Array value.

	Overloaded functions:
		- bufferData has two function definitions:
			- the first and third parameters are always of the same type between the two function definitions.
			- the second parameter is what changes between the two function definitions.
				- Case 1: long size (in our case long is viewed as intsym)
				- Case 2: Object data (in our case Object is viewed as varsym)
		- vertexAttrib3f can take a variable length number of parameters.
			- Case 1: varsym that is a 3 element array
				each element of the vertex attribute will be set equal value of the corresponding element of the varsym.
			- Case 2: a programmer may use explicit values as parameters rather than using a variable to define the value to the attribute. For example, to set a 3 element attribute equal to (1, 1, 1), the function call would look like gl.vertexAttrib3f(attributeIndex, 1, 1, 1), where attributeIndex is the index at which the attribute being set is located in an array of attribute indices.
			- Case 3: I'm not sure whether it may be that case the a function call may include a varsym intermixed with a variable number of explicit values. For example, could there be a call such as vertexAttrib3f(attributeIndex, varsym, 1), where varsym is a 2 element array? This may be something we want to check at a later date.

	Index Ranges to know:
		- enableVertexAttribArray: [0, MAX_VERTEX_ATTRIBS - 1].
		- vertexAttribPointer: [0, MAX_VERTEX_ATTRIBS - 1].
		- disableVertexAttribArray: [0, MAX_VERTEX_ATTRIBS - 1].
		- activeTexture: [TEXTURE0..TEXTUREi] where i = MAX_COMBINED_TEXTURE_IMAGE_UNITS - 1.

	Strides to know:
		- vertexAttribPointer: 5th parameter, [0, 255].

	Offsets to know:
		- vertexAttribPointer: 6th parameter, must be multiple of type (3rd parameter) size in WebGL.

	Legend:
		- a parameter denoted as '*' signifies one or more token(s) that we do not currently track.
			- Example: texParameteri may have const6sym or * as the first parameter. In this case '*' represents TEXTURE_CUBE_MAP, a valid parameter.
*/

getContext: func1sym lparentsym quotsym func43sym quotsym rparentsym semicolonsym;

getExtension: func2sym lparentsym quotsym DONTCAREsym quotsym rparentsym semicolonsym;

clear: func3sym lparentsym (const1sym || const2sym || const3sym || *) rparentsym semicolonsym;

createFrameBuffer: func4sym lparentsym rparentsym semicolonsym;

bindFrameBuffer: func5sym lparentsym const19sym commasym const4sym rparentsym semicolonsym;

createTexture: func6sym lparentsym rparentsym semicolonsym;

bindTexture: func7sym lparentsym const6sym commasym DONTCAREsym rparentsym semicolonsym;

texParameteri: func8sym lparentsym (const6sym || *) rparentsym semicolonsym;

texImage2D: func9sym lparentsym (const6sym || *) commasym instym commasym (const9sym || *) commasym instym commasym instym commasym instym commasym (const9sym || *) commasym (const10sym || *) commasym (nullsym || *) rparentsym semicolonsym;

createRenderbuffer: func10sym lparentsym rparentsym semicolonsym;

bindRenderbuffer: func11sym lparentsym const5sym commasym DONTCAREsym rparentsym semicolonsym;

renderbufferStorage: func12sym lparentsym const5sym commasym (const13sym || *) commasym instym commasym instym rparentsym semicolonsym;

framebufferTexture2D: func13sym lparentsym (const4sym || *) commasym (const12sym || *) commasym (const6sym || *) commasym DONTCAREsym commasym intsym rparentsym semicolonsym;

framebufferRenderbuffer: func14sym lparentsym const4sym commasym (const11sym || const12sym || *) commasym const5sym commasym DONTCAREsym rparentsym semicolonsym;

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

useProgram: func29sym lparentsym DONTCAREsym rparentsym semicolonsym;

getAttribLocation: func30sym lparentsym DONTCAREsym commasym DONTCAREsym rparentsym semicolonsym;

getUniformLocation: func31sym lparentsym DONTCAREsym commasym DONTCAREsym rparentsym semicolonsym;

pixelStorei: func32sym lparentsym (const29sym || *) commasym intsym rparentsym semicolonsym;

generateMipmap: func33sym lparentsym (const6sym || *) rparentsym semicolonsym;

uniformMatrix4fv: func34sym lparentsym uintsym commasym falsesym commasym varsym rparentsym semicolonsym;

uniform3fv: func35sym lparentsym uintsym commasym falsesym commasym varsym rparentsym semicolonsym;

uniform1f: func36sym lparentsym uintsym commasym (floatsym || varsym) rparentsym semicolonsym;

viewport: func37sym lparentsym intsym commasym intsym commasym intsym commasym instym rparentsym semicolonsym;

shaderSource: func38sym lparentsym DONTCAREsym commasym DONTCAREsym rparentsym semicolonsym;

compileShader: func39sym lparentsym DONTCAREsym rparentsym semicolonsym;

attachShader: func40sym lparentsym DONTCAREsym commasym DONTCAREsym rparentsym semicolonsym;

linkProgram: func41sym lparentsym DONTCAREsym rparentsym semicolonsym;

createProgram: func42sym lparentsym rparentsym semicolonsym;

/*Types that might be seen in function parsing, have to change scanner then*/
INT : '0'..'9'+;
FLOAT : ('0'..'9')+ '.' ('0'..'9')*;
STRING : '"' ('a'..'z'|'A'..'Z'|'_'|' ')* '"';
ID : ('a'..'z'|'A'..'Z'|'_') ('a'..'z'|'A'..'Z'|'0'..'9'|'_')*;