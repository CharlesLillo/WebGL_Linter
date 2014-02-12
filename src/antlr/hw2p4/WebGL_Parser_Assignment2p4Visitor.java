// Generated from C:\Users\tobyt_000\Development\program analysis\assignment 2\WebGL_Linter\src\antlr\WebGL_Parser_Assignment2p4.g4 by ANTLR 4.1
import org.antlr.v4.runtime.misc.NotNull;
import org.antlr.v4.runtime.tree.ParseTreeVisitor;

/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by {@link WebGL_Parser_Assignment2p4Parser}.
 *
 * @param <T> The return type of the visit operation. Use {@link Void} for
 * operations with no return type.
 */
public interface WebGL_Parser_Assignment2p4Visitor<T> extends ParseTreeVisitor<T> {
	/**
	 * Visit a parse tree produced by {@link WebGL_Parser_Assignment2p4Parser#content}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitContent(@NotNull WebGL_Parser_Assignment2p4Parser.ContentContext ctx);

	/**
	 * Visit a parse tree produced by {@link WebGL_Parser_Assignment2p4Parser#javascript}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitJavascript(@NotNull WebGL_Parser_Assignment2p4Parser.JavascriptContext ctx);

	/**
	 * Visit a parse tree produced by {@link WebGL_Parser_Assignment2p4Parser#htmlElement}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitHtmlElement(@NotNull WebGL_Parser_Assignment2p4Parser.HtmlElementContext ctx);

	/**
	 * Visit a parse tree produced by {@link WebGL_Parser_Assignment2p4Parser#document}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitDocument(@NotNull WebGL_Parser_Assignment2p4Parser.DocumentContext ctx);

	/**
	 * Visit a parse tree produced by {@link WebGL_Parser_Assignment2p4Parser#vertexCodeScript}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitVertexCodeScript(@NotNull WebGL_Parser_Assignment2p4Parser.VertexCodeScriptContext ctx);

	/**
	 * Visit a parse tree produced by {@link WebGL_Parser_Assignment2p4Parser#fragmentCodeScript}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitFragmentCodeScript(@NotNull WebGL_Parser_Assignment2p4Parser.FragmentCodeScriptContext ctx);

	/**
	 * Visit a parse tree produced by {@link WebGL_Parser_Assignment2p4Parser#chardata}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitChardata(@NotNull WebGL_Parser_Assignment2p4Parser.ChardataContext ctx);

	/**
	 * Visit a parse tree produced by {@link WebGL_Parser_Assignment2p4Parser#headElement}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitHeadElement(@NotNull WebGL_Parser_Assignment2p4Parser.HeadElementContext ctx);
}