// Generated from hw2p4.g4 by ANTLR 4.0
import org.antlr.v4.runtime.tree.*;
import org.antlr.v4.runtime.Token;

public interface hw2p4Visitor<T> extends ParseTreeVisitor<T> {
	T visitContent(hw2p4Parser.ContentContext ctx);

	T visitJavascript(hw2p4Parser.JavascriptContext ctx);

	T visitHtmlElement(hw2p4Parser.HtmlElementContext ctx);

	T visitDocument(hw2p4Parser.DocumentContext ctx);

	T visitVertexCodeScript(hw2p4Parser.VertexCodeScriptContext ctx);

	T visitFragmentCodeScript(hw2p4Parser.FragmentCodeScriptContext ctx);

	T visitChardata(hw2p4Parser.ChardataContext ctx);

	T visitHeadElement(hw2p4Parser.HeadElementContext ctx);
}