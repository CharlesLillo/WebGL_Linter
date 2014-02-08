/* Properly formatted code/comments in this section will be prepended to lex.yy.c */

%{
#include <stdio.h>
#include <stdlib.h>

typedef enum {
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
GLfunc1sym, GLfunc2sym, GLfunc3sym, GLfunc4sym, GLfunc5sym, DONTCAREsym, nullsym,
truesym, falsesym
} token_type;
%}

	/*Identifier Macros*/
ID       	[a-zA-Z][a-zA-Z0-9]{0,10}
	/*Error Macros*/

	/*Whitespace Macro*/
white [ \t\n\r\0]


%%


	/*RESERVED WORDS*/

	/*JS Types*/
"var"{white}?			{ fprintf(yyout,"%d ", varsym); }

	/*GLSL Types*/
"boolean"{white}?		{ fprintf(yyout,"%d ", boolsym); }
"byte"{white}?			{ fprintf(yyout,"%d ", bytesym); }
"ubyte"{white}?			{ fprintf(yyout,"%d ", ubytesym); }
"int"{white}?			{ fprintf(yyout,"%d ", intsym);}
"uint"{white}?			{ fprintf(yyout,"%d ", uintsym);}
"char"{white}?			{ fprintf(yyout,"%d ", charsym);}
"short"{white}?			{ fprintf(yyout,"%d ", shortsym);}
"ushort"{white}?		{ fprintf(yyout,"%d ", ushortsym);}
"fixed"{white}?			{ fprintf(yyout,"%d ", fixedsym);}
"sizei"{white}?			{ fprintf(yyout,"%d ", sizeisym);}
"enum"{white}?			{ fprintf(yyout,"%d ", enumsym);}
"intptr"{white}?		{ fprintf(yyout,"%d ", intptrsym);}
"sizeiptr"{white}?		{ fprintf(yyout,"%d ", sizeiptrsym);}
"float"{white}?			{ fprintf(yyout,"%d ", floatsym);}
"clampf"{white}?		{ fprintf(yyout,"%d ", clampfsym);}
"bitfield"{white}?		{ fprintf(yyout,"%d ", bitfieldsym);}

	/*GL Types */
"attribute"{white}?		{ fprintf(yyout,"%d ", attribsym); }
"uniform"{white}?		{ fprintf(yyout,"%d ", unisym); }
"varying"{white}?		{ fprintf(yyout,"%d ", varysym); }
"vec4"{white}?			{ fprintf(yyout,"%d ", vec4sym);}
"vec3"{white}?			{ fprintf(yyout,"%d ", vec3sym);}
"vec2"{white}?			{ fprintf(yyout,"%d ", vec2sym);}
"mat4"{white}?			{ fprintf(yyout,"%d ", mat4sym);}
"mat3"{white}?			{ fprintf(yyout,"%d ", mat3sym);}
"mat2"{white}?			{ fprintf(yyout,"%d ", mat2sym);}
"sampler2D"{white}?		{ fprintf(yyout,"%d ", sampsym); }

	/*GL Required Constants*/
"COLOR_BUFFER_BIT"{white}? 		{ fprintf(yyout,"%d ", const1sym); }
"DEPTH_BUFFER_BIT"{white}? 		{ fprintf(yyout,"%d ", const2sym); }
"STENCIL_BUFFER_BIT "{white}?	{ fprintf(yyout,"%d ", const3sym); }
"FRAMEBUFFER"{white}?			{ fprintf(yyout,"%d ", const4sym); }
"RENDERBUFFER"{white}?			{ fprintf(yyout,"%d ", const5sym); }
"TEXTURE_2D"{white}?			{ fprintf(yyout,"%d ", const6sym); }
"RGB"{white}?					{ fprintf(yyout,"%d ", const7sym); }
"NEAREST"{white}?				{ fprintf(yyout,"%d ", const8sym); }
"RGBA"{white}?					{ fprintf(yyout,"%d ", const9sym); }
"UNSIGNED_BYTE"{white}?			{ fprintf(yyout,"%d ", const10sym); }

"DEPTH_ATTACHMENT"{white}? 		{ fprintf(yyout,"%d ", const11sym); }
"COLOR_ATTACHMENT0"{white}? 	{ fprintf(yyout,"%d ", const12sym); }
"DEPTH_COMPONENT16 "{white}?	{ fprintf(yyout,"%d ", const13sym); }
"TEXTURE_WRAP_S"{white}?		{ fprintf(yyout,"%d ", const14sym); }
"CLAMP_TO_EDGE"{white}?			{ fprintf(yyout,"%d ", const15sym); }
"DEPTH_TEST"{white}?			{ fprintf(yyout,"%d ", const16sym); }
"TEXTURE_MAG_FILTER"{white}?	{ fprintf(yyout,"%d ", const17sym); }
"TEXTURE_MIN_FILTER"{white}?	{ fprintf(yyout,"%d ", const18sym); }
"ARRAY_BUFFER"{white}?			{ fprintf(yyout,"%d ", const19sym); }
"STATIC_DRAW"{white}?			{ fprintf(yyout,"%d ", const20sym); }

"FLOAT"{white}? 				{ fprintf(yyout,"%d ", const21sym); }
"TEXTURE0"{white}? 				{ fprintf(yyout,"%d ", const22sym); }
"TEXTURE1 "{white}?				{ fprintf(yyout,"%d ", const23sym); }
"TEXTURE2"{white}?				{ fprintf(yyout,"%d ", const24sym); }
"TRIANGLES"{white}?				{ fprintf(yyout,"%d ", const25sym); }
"UNPACK_FLIP_Y_WEBGL"{white}?	{ fprintf(yyout,"%d ", const26sym); }
"LINEAR"{white}?				{ fprintf(yyout,"%d ", const27sym); }
"LINEAR_MIPMAP_LINEAR"{white}?	{ fprintf(yyout,"%d ", const28sym); }
"UNPACK_ALIGNMENT"{white}?		{ fprintf(yyout,"%d ", const29sym); }
"ELEMENT_ARRAY_BUFFER"{white}?	{ fprintf(yyout,"%d ", const30sym); }
	
"POINT"{white}? 				{ fprintf(yyout,"%d ", const31sym); }
"LINES"{white}? 				{ fprintf(yyout,"%d ", const32sym); }
"LINE_LOOP"{white}? 			{ fprintf(yyout,"%d ", const33sym); }
"LINE_STRIP"{white}? 			{ fprintf(yyout,"%d ", const34sym); }
"TRIANGLE_STRIP"{white}? 		{ fprintf(yyout,"%d ", const35sym); }
"TRIANGLE_FAN"{white}? 			{ fprintf(yyout,"%d ", const36sym); }

	/*JS Functions - NOTE, many of these will actually require parameters and parenthesis, not whitespace after */
"getContext" 			    { fprintf(yyout,"%d ", func1sym); }
"getExtension"			    { fprintf(yyout,"%d ", func2sym); }
"clear"						{ fprintf(yyout,"%d ", func3sym); }
"createFramebuffer" 	   	{ fprintf(yyout,"%d ", func4sym); }
"bindFramebuffer"		    { fprintf(yyout,"%d ", func5sym); }
"createTexture"				{ fprintf(yyout,"%d ", func6sym); }
"bindTexture" 			    { fprintf(yyout,"%d ", func7sym); }
"texParameteri"				{ fprintf(yyout,"%d ", func8sym); }
"texImage2D"			    { fprintf(yyout,"%d ", func9sym); }
"createRenderbuffer" 	    { fprintf(yyout,"%d ", func10sym); }

"bindRenderbuffer" 			{ fprintf(yyout,"%d ", func11sym); }
"renderbufferStorage"		{ fprintf(yyout,"%d ", func12sym); }
"framebufferTexture2D"		{ fprintf(yyout,"%d ", func13sym); }
"framebufferRenderbuffer" 	{ fprintf(yyout,"%d ", func14sym); }
"readPixels"				{ fprintf(yyout,"%d ", func15sym); }
"clearColor"				{ fprintf(yyout,"%d ", func16sym); }
"enable" 					{ fprintf(yyout,"%d ", func17sym); }
"createBuffer"				{ fprintf(yyout,"%d ", func18sym); }
"bufferData"				{ fprintf(yyout,"%d ", func19sym); }
"bindBuffer" 				{ fprintf(yyout,"%d ", func20sym); }

"uniform4fv" 				{ fprintf(yyout,"%d ", func21sym); }
"enableVertexAttribArray"	{ fprintf(yyout,"%d ", func22sym); }
"vertexAttribPointer"		{ fprintf(yyout,"%d ", func23sym); }
"disableVertexAttribArray" 	{ fprintf(yyout,"%d ", func24sym); }
"vertexAttrib3f"			{ fprintf(yyout,"%d ", func25sym); }
"activeTexture"				{ fprintf(yyout,"%d ", func26sym); }
"uniform1i" 				{ fprintf(yyout,"%d ", func27sym); }
"drawArrays"				{ fprintf(yyout,"%d ", func28sym); }
"useProgram"				{ fprintf(yyout,"%d ", func29sym); }
"getAttribLocation" 		{ fprintf(yyout,"%d ", func30sym); }

"getUniformLocation" 		{ fprintf(yyout,"%d ", func31sym); }
"pixelStorei"				{ fprintf(yyout,"%d ", func32sym); }
"generateMipmap"			{ fprintf(yyout,"%d ", func33sym); }
"uniformMatrix4fv" 			{ fprintf(yyout,"%d ", func34sym); }
"uniform3fv"				{ fprintf(yyout,"%d ", func35sym); }
"uniform1f"					{ fprintf(yyout,"%d ", func36sym); }
"viewport" 					{ fprintf(yyout,"%d ", func37sym); }
"shaderSource"				{ fprintf(yyout,"%d ", func38sym); }
"compileShader"				{ fprintf(yyout,"%d ", func39sym); }
"attachShader" 				{ fprintf(yyout,"%d ", func40sym); }

"linkProgram" 				{ fprintf(yyout,"%d ", func41sym); }
"createProgram"				{ fprintf(yyout,"%d ", func42sym); }
("experimental-")?"webgl"	{ fprintf(yyout,"%d ", func43sym); }

	/*GLSL Functions*/
"normalize" 			    { fprintf(yyout,"%d ", GLfunc1sym); }
"dot"			    		{ fprintf(yyout,"%d ", GLfunc2sym); }
"reflect"					{ fprintf(yyout,"%d ", GLfunc3sym); }
"max" 	    				{ fprintf(yyout,"%d ", GLfunc4sym); }
"texture2D"		    		{ fprintf(yyout,"%d ", GLfunc5sym); }

	/*GLSL Dedicated Variables*/
"gl_Position"{white}? 			    { fprintf(yyout,"%d ", GLPOSsym); }
"gl_FragColor"{white}? 			    { fprintf(yyout,"%d ", GLFRAGsym); }


	/*Other words*/

"if"{white}?			{ fprintf(yyout,"%d ", ifsym);}
"while"{white}?			{ fprintf(yyout,"%d ", whilesym); }
"do"{white}?			{ fprintf(yyout,"%d ", dosym); }
"then"{white}?			{ fprintf(yyout,"%d ", thensym); }
"const"{white}?			{ fprintf(yyout,"%d ", constsym); }
"else"{white}?			{ fprintf(yyout,"%d ", elsesym); }
"null"{white}?			{ fprintf(yyout,"%d ", nullsym); }
"true"{white}?			{ fprintf(yyout,"%d ", truesym); }
"false"{white}?			{ fprintf(yyout,"%d ", falsesym); }

	/* Special Symbols */
"<=" 	{ fprintf(yyout,"%d ", leqsym); }
">=" 	{ fprintf(yyout,"%d ", geqsym); }
"<>" 	{ fprintf(yyout,"%d ", neqsym); }
">" 	{ fprintf(yyout,"%d ", gtrsym); }
"<" 	{ fprintf(yyout,"%d ", lessym); }
"+"		{ fprintf(yyout,"%d ", plussym); }
"=" 	{ fprintf(yyout,"%d ", eqsym); }
"-"		{ fprintf(yyout,"%d ", minussym); }
"*"		{ fprintf(yyout,"%d ", multsym); }  /* this will fire for pointers, possibly adjust def */
"/"		{ fprintf(yyout,"%d ", slashsym); }
"("		{ fprintf(yyout,"%d ", lparentsym); }
")"		{ fprintf(yyout,"%d ", rparentsym); }
"," 	{ fprintf(yyout,"%d ", commasym); }
";" 	{ fprintf(yyout,"%d ", semicolonsym); }
"." 	{ fprintf(yyout,"%d ", periodsym); }
"\"" 	{ fprintf(yyout,"%d ", quotsym); }


	/*ERRORS */

	/* eat up whitespace */
{white}+

	/*Uncaught symbols*/
{ID}	{ printf("%d", DONTCAREsym); }
.		{ printf("%d", DONTCAREsym); }



%% 

	/* Properly formatted code/comments in this section are appended to lex.yy.c */

  /* If called, allows for scanning of another file */
int yywrap()
{
	return 1;
}

  /* Main function for Flex file */
int main(int argc, char* argv[])
{
	FILE* ofp = fopen("outputfile_scanner.out", "w");
	if (argc > 1) yyin = fopen(argv[1], "r");
	else yyin = stdin;
	yyout=ofp;
	yylex();
	return 1;
}
