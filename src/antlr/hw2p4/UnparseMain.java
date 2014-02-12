/**
 * Main class used as demonstration for unparsing of WebGL code.
 */

import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;
import java.io.FileInputStream;

import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.tree.ParseTree;

/**
 * @author Toby Tobkin
 *
 */
public class UnparseMain {

	/**
	 * @param args
	 * @throws IOException 
	 */
	public static void main(String[] args) throws IOException {
		String inputProgram = null;
		InputStream is = null;
		String unparsedProgram = null;
		if ( args.length != 1 ) {
			usage();
			return;
		} else {
			inputProgram = args[0];
		}
		
		is = new FileInputStream(inputProgram);
		ANTLRInputStream input = new ANTLRInputStream(is);
        hw2p4Lexer lexer = new hw2p4Lexer(input);
        CommonTokenStream tokens = new CommonTokenStream(lexer);
        hw2p4Parser parser = new hw2p4Parser(tokens);
        ParseTree tree = parser.document(); // parse; document is the start rule

        UnparseVisitor unparser = new UnparseVisitor();
        unparsedProgram = unparser.visit(tree);
	}
	
	private static void usage() {
		//TODO
	}

}
