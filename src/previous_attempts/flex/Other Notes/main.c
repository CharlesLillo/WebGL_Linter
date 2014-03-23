#include <stdio.h>
#include <stdlib.h>
#include "vm.h"
#include "parser.h"
#include "lex.yy.h"

int main(int argc, char* argv[])
{
    scanner(argc, argv);
    if (parserCodeGenerator() == 1)
    {
        return 1;
    }
    virtualMachine();
    return 0;
}
