/**
 * Main class used as demonstration for unparsing of WebGL code.
 */

import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.nio.charset.Charset;
import java.nio.file.Files;
import java.nio.file.StandardOpenOption;

import static java.nio.file.StandardOpenOption.*;

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
	public static void main(String[] args) {
		String inputProgram, outputFile;
		InputStream is = null;
		FileOutputStream os = null;
		String unparsedProgram = null;
		File fin, fout;
		if ( args.length != 2 ) {
			usage();
			return;
		} else {
			inputProgram = args[0];
			outputFile = args[1];
			fin = new File(inputProgram);
			fout = new File(outputFile);
		}
		
		if(fin.isFile() && fin.canRead()) {
			try {
				is = new FileInputStream(inputProgram);
				ANTLRInputStream input = new ANTLRInputStream(is);
		        hw2p4Lexer lexer = new hw2p4Lexer(input);
		        CommonTokenStream tokens = new CommonTokenStream(lexer);
		        hw2p4Parser parser = new hw2p4Parser(tokens);
		        ParseTree tree = parser.document(); // parse; document is the start rule

		        UnparseVisitor unparser = new UnparseVisitor();
		        unparsedProgram = unparser.visit(tree);
			} catch (IOException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}  finally {
				try {
					is.close();
				} catch (IOException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
			}
		}
		
		if(fout.isFile() && fout.canWrite()) {
			try {
				os = new FileOutputStream(outputFile);
				os.write(unparsedProgram.getBytes());
			} catch (IOException e) {
				e.printStackTrace();
			} finally {
				try {
					os.close();
				} catch (IOException e) {
					e.printStackTrace();
				}
			}
		}
	}
	
	private static void usage() {
		//TODO
	}

}
