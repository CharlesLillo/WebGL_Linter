import org.antlr.v4.runtime.misc.NotNull;

/**
 * 
 */

/**
 * @author Toby Tobkin
 * 
 */
public class UnparseVisitor extends hw2p4BaseVisitor<String> {
	/** String representing the program that is unparsed */
	String unparsedFile;

	public UnparseVisitor() {
		this.unparsedFile = "";
	}

	/**
	 * {@inheritDoc}
	 */
	@Override
	public String visitDocument(@NotNull hw2p4Parser.DocumentContext ctx) {
		return ctx.getText();
	}
}
