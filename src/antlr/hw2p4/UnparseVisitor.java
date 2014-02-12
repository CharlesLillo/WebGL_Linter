import org.antlr.v4.runtime.misc.NotNull;

/**
 * 
 */

/**
 * @author tobyt_000
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
	 * <p/>
	 * The default implementation returns the result of calling
	 * {@link #visitChildren} on {@code ctx}.
	 */
	@Override public T visitContent(@NotNull hw2p4Parser.ContentContext ctx) { return visitChildren(ctx); }

	/**
	 * {@inheritDoc}
	 * <p/>
	 * The default implementation returns the result of calling
	 * {@link #visitChildren} on {@code ctx}.
	 */
	@Override public T visitJavascript(@NotNull hw2p4Parser.JavascriptContext ctx) { return visitChildren(ctx); }

	/**
	 * {@inheritDoc}
	 * <p/>
	 * The default implementation returns the result of calling
	 * {@link #visitChildren} on {@code ctx}.
	 */
	@Override public T visitHtmlElement(@NotNull hw2p4Parser.HtmlElementContext ctx) { return visitChildren(ctx); }

	/**
	 * {@inheritDoc}
	 * <p/>
	 * The default implementation returns the result of calling
	 * {@link #visitChildren} on {@code ctx}.
	 */
	@Override public T visitDocument(@NotNull hw2p4Parser.DocumentContext ctx) { return visitChildren(ctx); }

	/**
	 * {@inheritDoc}
	 * <p/>
	 * The default implementation returns the result of calling
	 * {@link #visitChildren} on {@code ctx}.
	 */
	@Override public T visitVertexCodeScript(@NotNull hw2p4Parser.VertexCodeScriptContext ctx) { return visitChildren(ctx); }

	/**
	 * {@inheritDoc}
	 * <p/>
	 * The default implementation returns the result of calling
	 * {@link #visitChildren} on {@code ctx}.
	 */
	@Override public T visitFragmentCodeScript(@NotNull hw2p4Parser.FragmentCodeScriptContext ctx) { return visitChildren(ctx); }

	/**
	 * {@inheritDoc}
	 * <p/>
	 * The default implementation returns the result of calling
	 * {@link #visitChildren} on {@code ctx}.
	 */
	@Override public T visitChardata(@NotNull hw2p4Parser.ChardataContext ctx) { return visitChildren(ctx); }

	/**
	 * {@inheritDoc}
	 * <p/>
	 * The default implementation returns the result of calling
	 * {@link #visitChildren} on {@code ctx}.
	 */
	@Override public T visitHeadElement(@NotNull hw2p4Parser.HeadElementContext ctx) { return visitChildren(ctx); }
}
