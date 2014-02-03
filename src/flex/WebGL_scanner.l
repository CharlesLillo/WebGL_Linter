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
dosym, callsym, constsym, intsym, ubytesym,
charsym, shortsym, elsesym, fixedsym, sizeisym, enumsym, intptrsym,
sizeiptrsym, floatsym, bitfieldsym, varsym
} token_type;
%}

	/*Identifier Macros*/
digit       [0-9]
integer   	{digit}{1,5}
ID       	[a-zA-Z][a-zA-Z0-9]{0,10}

	/*Error Macros*/
ID_long		[a-zA-Z][a-zA-Z0-9]{11,}
int_long	{digit}{6,}
ID_wrong	{digit}+[a-zA-Z][a-zA-Z0-9]*

	/*Whitespace Macro*/
white [ \t\n\r\0]


%%


/*RESERVED WORDS */

/*JS Types */
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
"TEXTURE_MAG_FILTER"{white}?	{ fprintf(yyout,"%d ", const7sym); }
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

/*JS Functions*/


/*GLSL Functions*/


/*Other words*/

"if"{white}?			{ fprintf(yyout,"%d ", ifsym);}
"while"{white}?			{ fprintf(yyout,"%d ", whilesym); }
"do"{white}?			{ fprintf(yyout,"%d ", dosym); }
"then"{white}?			{ fprintf(yyout,"%d ", thensym); }
"const"{white}?			{ fprintf(yyout,"%d ", constsym); }
"else"{white}?			{ fprintf(yyout,"%d ", elsesym); }

	/*Identifiers */
{ID} {fprintf(yyout,"%d|%s ", identsym, yytext);}

	/* Number */
{integer}     { fprintf(yyout,"%d|%s ", numbersym, yytext); }

	/* Special Symbols */
"<=" 	{ fprintf(yyout,"%d ", leqsym); }
">=" 	{ fprintf(yyout,"%d ", geqsym); }
"<>" 	{ fprintf(yyout,"%d ", neqsym); }
">" 	{ fprintf(yyout,"%d ", gtrsym); }
"<" 	{ fprintf(yyout,"%d ", lessym); }
"+"		{ fprintf(yyout,"%d ", plussym); }
"=" 	{ fprintf(yyout,"%d ", becomessym); }
"-"		{ fprintf(yyout,"%d ", minussym); }
"*"		{ fprintf(yyout,"%d ", multsym); }  /* this will fire for pointers, possibly adjust def */
"/"		{ fprintf(yyout,"%d ", slashsym); }
"("		{ fprintf(yyout,"%d ", lparentsym); }
")"		{ fprintf(yyout,"%d ", rparentsym); }
"," 	{ fprintf(yyout,"%d ", commasym); }
"=" 	{ fprintf(yyout,"%d ", eqsym); }
";" 	{ fprintf(yyout,"%d ", semicolonsym); }
"." 	{ fprintf(yyout,"%d ", periodsym); }


	/*ERRORS */

	/* eat up whitespace */

{white}+

	/*Uncaught symbols*/
.{ printf("%d %s\n ", inv4, yytext); }


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
