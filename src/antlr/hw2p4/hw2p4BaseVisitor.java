// Generated from hw2p4.g4 by ANTLR 4.0
import org.antlr.v4.runtime.tree.*;
import org.antlr.v4.runtime.Token;
import org.antlr.v4.runtime.ParserRuleContext;

public class hw2p4BaseVisitor<T> extends AbstractParseTreeVisitor<T> implements hw2p4Visitor<T> {
	@Override public T visitContent(hw2p4Parser.ContentContext ctx) { return visitChildren(ctx); }

	@Override public T visitJavascript(hw2p4Parser.JavascriptContext ctx) { return visitChildren(ctx); }

	@Override public T visitHtmlElement(hw2p4Parser.HtmlElementContext ctx) { return visitChildren(ctx); }

	@Override public T visitDocument(hw2p4Parser.DocumentContext ctx) { return visitChildren(ctx); }

	@Override public T visitVertexCodeScript(hw2p4Parser.VertexCodeScriptContext ctx) { return visitChildren(ctx); }

	@Override public T visitFragmentCodeScript(hw2p4Parser.FragmentCodeScriptContext ctx) { return visitChildren(ctx); }

	@Override public T visitChardata(hw2p4Parser.ChardataContext ctx) { return visitChildren(ctx); }

	@Override public T visitHeadElement(hw2p4Parser.HeadElementContext ctx) { return visitChildren(ctx); }
}