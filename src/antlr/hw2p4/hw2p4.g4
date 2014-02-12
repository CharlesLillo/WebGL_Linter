/**
A sloppy, first attempt grammar. Good enough for hw2p4, but not fully
representative of how our full-featured parser will look. HTML in general
is fairly difficult to parse, so we will be sticking a dedicated XML or HTML
parser before the ANTLR parser in the pipeline to avoid reliability problems.
This will also enable us to focus on just parsing C and Javascript, which will
already be a nontrivial task as it is.
*/

grammar WebGL_Parser_Assignment2p4;

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

Whitespace  :   [ \t\r\n]+  -> skip ;

TEXT        :   ~['</']+ ;  //I don't know why this works but it does. Then again, it probably doesn't work.
SEA_WS      :   (' '|'\t'|'\r'? '\n')+ ; 