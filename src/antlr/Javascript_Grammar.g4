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

getContext: func1sym lparentsym quotsym func43sym quotsym rparentsym semicolonsym;

clear: func3sym lparentsym const1sym rparentsym semicolonsym;



/*Types that might be seen in function parsing, have to change scanner then*/
INT : '0'..'9'+;
FLOAT : ('0'..'9')+ '.' ('0'..'9')*;
STRING : '"' ('a'..'z'|'A'..'Z'|'_'|' ')* '"';
ID : ('a'..'z'|'A'..'Z'|'_') ('a'..'z'|'A'..'Z'|'0'..'9'|'_')*;