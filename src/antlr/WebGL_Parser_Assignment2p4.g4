/*
WebGL is basically just a bunch of C and Javascript.

Right, Charley?

Alright, well then our grammar is pretty damn simple:
    if (it's C)
        parse the C code
    else if (it's Javascript)
        parse the Javascript code
    else
        sell your neighbor's cat on Craigslist
*/

grammar WebGL_Parser_Assignment2p4;

/*
GRAMMAR IMPORTS
See: https://theantlrguy.atlassian.net/wiki/display/ANTLR4/Grammar+Structure
    Subsection: "Grammar Imports"
*/
    /*C11 grammar provided by the ANTLR project. This isn't exactly C99,
    but let's just call it close enough, yeah?*/
    import C11_Grammar_antlr_github; //C11 Grammar provided by the ANTLR project
    /*This grammar is not filled in yet. We will either find one already
    made for us, or simply [hah!] build one from the Javascript language spec.*/
    import Javascript_Grammar;
/*
END GRAMMAR IMPORTS
*/

