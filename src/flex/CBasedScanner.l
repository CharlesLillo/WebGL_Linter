/* Properly formatted code/comments in this section will be prepended to lex.yy.c */

%{
#include <stdio.h>
#include <stdlib.h>

typedef enum {
nulsym = 1, identsym, numbersym, plussym, minussym,
multsym, slashsym, oddsym, eqsym, neqsym,
lessym, leqsym, gtrsym, geqsym, lparentsym,
rparentsym, commasym, semicolonsym, periodsym, becomessym,
beginsym, endsym, ifsym, thensym, whilesym,
dosym, callsym, constsym, intsym, procsym,
writesym, readsym, elsesym, inv1, inv2, inv3, inv4
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


	/*Reserved Words*/
"null"{white}?			{ fprintf(yyout,"%d ", nulsym); }
"int"{white}?			{ fprintf(yyout,"%d ", intsym);}
"if"{white}?			{ fprintf(yyout,"%d ", ifsym);}
"call"{white}?			{ fprintf(yyout,"%d ", callsym); }
"while"{white}?			{ fprintf(yyout,"%d ", whilesym); }
"do"{white}?			{ fprintf(yyout,"%d ", dosym); }
"then"{white}?			{ fprintf(yyout,"%d ", thensym); }
"begin"{white}?			{ fprintf(yyout,"%d ", beginsym); }
"const"{white}?			{ fprintf(yyout,"%d ", constsym); }
"odd"{white}?			{ fprintf(yyout,"%d ", oddsym); }
"else"{white}?			{ fprintf(yyout,"%d ", elsesym); }
"end"{white}?			{ fprintf(yyout,"%d ", endsym); }
"procedure"{white}?		{ fprintf(yyout,"%d ", procsym); }
"write"{white}?			{ fprintf(yyout,"%d ", writesym); }
"read"{white}?			{ fprintf(yyout,"%d ", readsym); }

	/*Identifiers*/
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
":=" 	{ fprintf(yyout,"%d ", becomessym); }
"-"		{ fprintf(yyout,"%d ", minussym); }
"*"		{ fprintf(yyout,"%d ", multsym); }
"/"		{ fprintf(yyout,"%d ", slashsym); }
"("		{ fprintf(yyout,"%d ", lparentsym); }
")"		{ fprintf(yyout,"%d ", rparentsym); }
"," 	{ fprintf(yyout,"%d ", commasym); }
"=" 	{ fprintf(yyout,"%d ", eqsym); }
";" 	{ fprintf(yyout,"%d ", semicolonsym); }
"." 	{ fprintf(yyout,"%d ", periodsym); }

	/*ERRORS*/
{ID_wrong} 	{ fprintf(yyout,"%d ", inv1); }
{int_long} 	{ fprintf(yyout,"%d ", inv2); }
{ID_long}	{ fprintf(yyout,"%d ", inv3); }

	/* eat up whitespace */
{white}+

	/*Uncaught symbols*/
.    	{ printf("%d %s\n ", inv4, yytext); }

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
