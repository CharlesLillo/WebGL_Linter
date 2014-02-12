// Generated from hw2p4.g4 by ANTLR 4.0
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class hw2p4Parser extends Parser {
	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		T__7=1, T__6=2, T__5=3, T__4=4, T__3=5, T__2=6, T__1=7, T__0=8, Whitespace=9, 
		TEXT=10, SEA_WS=11;
	public static final String[] tokenNames = {
		"<INVALID>", "'<html>'", "'<head>'", "'</head>'", "'<script id=\"fragment-code\" type=\"x-shader\">'", 
		"'<script id=\"vertex-code\" type=\"x-shader\">'", "'</script>'", "'</html>'", 
		"'<script type=\"text/javascript\">'", "Whitespace", "TEXT", "SEA_WS"
	};
	public static final int
		RULE_document = 0, RULE_htmlElement = 1, RULE_headElement = 2, RULE_content = 3, 
		RULE_chardata = 4, RULE_vertexCodeScript = 5, RULE_fragmentCodeScript = 6, 
		RULE_javascript = 7;
	public static final String[] ruleNames = {
		"document", "htmlElement", "headElement", "content", "chardata", "vertexCodeScript", 
		"fragmentCodeScript", "javascript"
	};

	@Override
	public String getGrammarFileName() { return "hw2p4.g4"; }

	@Override
	public String[] getTokenNames() { return tokenNames; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public ATN getATN() { return _ATN; }

	public hw2p4Parser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}
	public static class DocumentContext extends ParserRuleContext {
		public HtmlElementContext htmlElement() {
			return getRuleContext(HtmlElementContext.class,0);
		}
		public DocumentContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_document; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof hw2p4Visitor ) return ((hw2p4Visitor<? extends T>)visitor).visitDocument(this);
			else return visitor.visitChildren(this);
		}
	}

	public final DocumentContext document() throws RecognitionException {
		DocumentContext _localctx = new DocumentContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_document);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(16); htmlElement();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class HtmlElementContext extends ParserRuleContext {
		public TerminalNode Whitespace(int i) {
			return getToken(hw2p4Parser.Whitespace, i);
		}
		public List<TerminalNode> Whitespace() { return getTokens(hw2p4Parser.Whitespace); }
		public HeadElementContext headElement() {
			return getRuleContext(HeadElementContext.class,0);
		}
		public HtmlElementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_htmlElement; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof hw2p4Visitor ) return ((hw2p4Visitor<? extends T>)visitor).visitHtmlElement(this);
			else return visitor.visitChildren(this);
		}
	}

	public final HtmlElementContext htmlElement() throws RecognitionException {
		HtmlElementContext _localctx = new HtmlElementContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_htmlElement);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(18); match(1);
			setState(22);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==Whitespace) {
				{
				{
				setState(19); match(Whitespace);
				}
				}
				setState(24);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(25); headElement();
			setState(29);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==Whitespace) {
				{
				{
				setState(26); match(Whitespace);
				}
				}
				setState(31);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(32); match(7);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class HeadElementContext extends ParserRuleContext {
		public TerminalNode Whitespace(int i) {
			return getToken(hw2p4Parser.Whitespace, i);
		}
		public JavascriptContext javascript() {
			return getRuleContext(JavascriptContext.class,0);
		}
		public VertexCodeScriptContext vertexCodeScript() {
			return getRuleContext(VertexCodeScriptContext.class,0);
		}
		public List<TerminalNode> Whitespace() { return getTokens(hw2p4Parser.Whitespace); }
		public FragmentCodeScriptContext fragmentCodeScript() {
			return getRuleContext(FragmentCodeScriptContext.class,0);
		}
		public HeadElementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_headElement; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof hw2p4Visitor ) return ((hw2p4Visitor<? extends T>)visitor).visitHeadElement(this);
			else return visitor.visitChildren(this);
		}
	}

	public final HeadElementContext headElement() throws RecognitionException {
		HeadElementContext _localctx = new HeadElementContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_headElement);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(34); match(2);
			setState(38);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==Whitespace) {
				{
				{
				setState(35); match(Whitespace);
				}
				}
				setState(40);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(41); vertexCodeScript();
			setState(45);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==Whitespace) {
				{
				{
				setState(42); match(Whitespace);
				}
				}
				setState(47);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(48); fragmentCodeScript();
			setState(52);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==Whitespace) {
				{
				{
				setState(49); match(Whitespace);
				}
				}
				setState(54);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(55); javascript();
			setState(59);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==Whitespace) {
				{
				{
				setState(56); match(Whitespace);
				}
				}
				setState(61);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(62); match(3);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ContentContext extends ParserRuleContext {
		public ChardataContext chardata() {
			return getRuleContext(ChardataContext.class,0);
		}
		public ContentContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_content; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof hw2p4Visitor ) return ((hw2p4Visitor<? extends T>)visitor).visitContent(this);
			else return visitor.visitChildren(this);
		}
	}

	public final ContentContext content() throws RecognitionException {
		ContentContext _localctx = new ContentContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_content);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(65);
			_la = _input.LA(1);
			if (_la==TEXT || _la==SEA_WS) {
				{
				setState(64); chardata();
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ChardataContext extends ParserRuleContext {
		public TerminalNode SEA_WS() { return getToken(hw2p4Parser.SEA_WS, 0); }
		public TerminalNode TEXT() { return getToken(hw2p4Parser.TEXT, 0); }
		public ChardataContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_chardata; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof hw2p4Visitor ) return ((hw2p4Visitor<? extends T>)visitor).visitChardata(this);
			else return visitor.visitChildren(this);
		}
	}

	public final ChardataContext chardata() throws RecognitionException {
		ChardataContext _localctx = new ChardataContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_chardata);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(67);
			_la = _input.LA(1);
			if ( !(_la==TEXT || _la==SEA_WS) ) {
			_errHandler.recoverInline(this);
			}
			consume();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class VertexCodeScriptContext extends ParserRuleContext {
		public ContentContext content() {
			return getRuleContext(ContentContext.class,0);
		}
		public TerminalNode Whitespace(int i) {
			return getToken(hw2p4Parser.Whitespace, i);
		}
		public List<TerminalNode> Whitespace() { return getTokens(hw2p4Parser.Whitespace); }
		public VertexCodeScriptContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_vertexCodeScript; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof hw2p4Visitor ) return ((hw2p4Visitor<? extends T>)visitor).visitVertexCodeScript(this);
			else return visitor.visitChildren(this);
		}
	}

	public final VertexCodeScriptContext vertexCodeScript() throws RecognitionException {
		VertexCodeScriptContext _localctx = new VertexCodeScriptContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_vertexCodeScript);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(69); match(5);
			setState(73);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,7,_ctx);
			while ( _alt!=2 && _alt!=-1 ) {
				if ( _alt==1 ) {
					{
					{
					setState(70); match(Whitespace);
					}
					} 
				}
				setState(75);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,7,_ctx);
			}
			setState(76); content();
			setState(80);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==Whitespace) {
				{
				{
				setState(77); match(Whitespace);
				}
				}
				setState(82);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(83); match(6);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class FragmentCodeScriptContext extends ParserRuleContext {
		public ContentContext content() {
			return getRuleContext(ContentContext.class,0);
		}
		public TerminalNode Whitespace(int i) {
			return getToken(hw2p4Parser.Whitespace, i);
		}
		public List<TerminalNode> Whitespace() { return getTokens(hw2p4Parser.Whitespace); }
		public FragmentCodeScriptContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_fragmentCodeScript; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof hw2p4Visitor ) return ((hw2p4Visitor<? extends T>)visitor).visitFragmentCodeScript(this);
			else return visitor.visitChildren(this);
		}
	}

	public final FragmentCodeScriptContext fragmentCodeScript() throws RecognitionException {
		FragmentCodeScriptContext _localctx = new FragmentCodeScriptContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_fragmentCodeScript);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(85); match(4);
			setState(89);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,9,_ctx);
			while ( _alt!=2 && _alt!=-1 ) {
				if ( _alt==1 ) {
					{
					{
					setState(86); match(Whitespace);
					}
					} 
				}
				setState(91);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,9,_ctx);
			}
			setState(92); content();
			setState(96);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==Whitespace) {
				{
				{
				setState(93); match(Whitespace);
				}
				}
				setState(98);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(99); match(6);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class JavascriptContext extends ParserRuleContext {
		public ContentContext content() {
			return getRuleContext(ContentContext.class,0);
		}
		public TerminalNode Whitespace(int i) {
			return getToken(hw2p4Parser.Whitespace, i);
		}
		public List<TerminalNode> Whitespace() { return getTokens(hw2p4Parser.Whitespace); }
		public JavascriptContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_javascript; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof hw2p4Visitor ) return ((hw2p4Visitor<? extends T>)visitor).visitJavascript(this);
			else return visitor.visitChildren(this);
		}
	}

	public final JavascriptContext javascript() throws RecognitionException {
		JavascriptContext _localctx = new JavascriptContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_javascript);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(101); match(8);
			setState(105);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,11,_ctx);
			while ( _alt!=2 && _alt!=-1 ) {
				if ( _alt==1 ) {
					{
					{
					setState(102); match(Whitespace);
					}
					} 
				}
				setState(107);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,11,_ctx);
			}
			setState(108); content();
			setState(112);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==Whitespace) {
				{
				{
				setState(109); match(Whitespace);
				}
				}
				setState(114);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(115); match(6);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static final String _serializedATN =
		"\2\3\rx\4\2\t\2\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t"+
		"\t\3\2\3\2\3\3\3\3\7\3\27\n\3\f\3\16\3\32\13\3\3\3\3\3\7\3\36\n\3\f\3"+
		"\16\3!\13\3\3\3\3\3\3\4\3\4\7\4\'\n\4\f\4\16\4*\13\4\3\4\3\4\7\4.\n\4"+
		"\f\4\16\4\61\13\4\3\4\3\4\7\4\65\n\4\f\4\16\48\13\4\3\4\3\4\7\4<\n\4\f"+
		"\4\16\4?\13\4\3\4\3\4\3\5\5\5D\n\5\3\6\3\6\3\7\3\7\7\7J\n\7\f\7\16\7M"+
		"\13\7\3\7\3\7\7\7Q\n\7\f\7\16\7T\13\7\3\7\3\7\3\b\3\b\7\bZ\n\b\f\b\16"+
		"\b]\13\b\3\b\3\b\7\ba\n\b\f\b\16\bd\13\b\3\b\3\b\3\t\3\t\7\tj\n\t\f\t"+
		"\16\tm\13\t\3\t\3\t\7\tq\n\t\f\t\16\tt\13\t\3\t\3\t\3\t\2\n\2\4\6\b\n"+
		"\f\16\20\2\3\3\f\r|\2\22\3\2\2\2\4\24\3\2\2\2\6$\3\2\2\2\bC\3\2\2\2\n"+
		"E\3\2\2\2\fG\3\2\2\2\16W\3\2\2\2\20g\3\2\2\2\22\23\5\4\3\2\23\3\3\2\2"+
		"\2\24\30\7\3\2\2\25\27\7\13\2\2\26\25\3\2\2\2\27\32\3\2\2\2\30\26\3\2"+
		"\2\2\30\31\3\2\2\2\31\33\3\2\2\2\32\30\3\2\2\2\33\37\5\6\4\2\34\36\7\13"+
		"\2\2\35\34\3\2\2\2\36!\3\2\2\2\37\35\3\2\2\2\37 \3\2\2\2 \"\3\2\2\2!\37"+
		"\3\2\2\2\"#\7\t\2\2#\5\3\2\2\2$(\7\4\2\2%\'\7\13\2\2&%\3\2\2\2\'*\3\2"+
		"\2\2(&\3\2\2\2()\3\2\2\2)+\3\2\2\2*(\3\2\2\2+/\5\f\7\2,.\7\13\2\2-,\3"+
		"\2\2\2.\61\3\2\2\2/-\3\2\2\2/\60\3\2\2\2\60\62\3\2\2\2\61/\3\2\2\2\62"+
		"\66\5\16\b\2\63\65\7\13\2\2\64\63\3\2\2\2\658\3\2\2\2\66\64\3\2\2\2\66"+
		"\67\3\2\2\2\679\3\2\2\28\66\3\2\2\29=\5\20\t\2:<\7\13\2\2;:\3\2\2\2<?"+
		"\3\2\2\2=;\3\2\2\2=>\3\2\2\2>@\3\2\2\2?=\3\2\2\2@A\7\5\2\2A\7\3\2\2\2"+
		"BD\5\n\6\2CB\3\2\2\2CD\3\2\2\2D\t\3\2\2\2EF\t\2\2\2F\13\3\2\2\2GK\7\7"+
		"\2\2HJ\7\13\2\2IH\3\2\2\2JM\3\2\2\2KI\3\2\2\2KL\3\2\2\2LN\3\2\2\2MK\3"+
		"\2\2\2NR\5\b\5\2OQ\7\13\2\2PO\3\2\2\2QT\3\2\2\2RP\3\2\2\2RS\3\2\2\2SU"+
		"\3\2\2\2TR\3\2\2\2UV\7\b\2\2V\r\3\2\2\2W[\7\6\2\2XZ\7\13\2\2YX\3\2\2\2"+
		"Z]\3\2\2\2[Y\3\2\2\2[\\\3\2\2\2\\^\3\2\2\2][\3\2\2\2^b\5\b\5\2_a\7\13"+
		"\2\2`_\3\2\2\2ad\3\2\2\2b`\3\2\2\2bc\3\2\2\2ce\3\2\2\2db\3\2\2\2ef\7\b"+
		"\2\2f\17\3\2\2\2gk\7\n\2\2hj\7\13\2\2ih\3\2\2\2jm\3\2\2\2ki\3\2\2\2kl"+
		"\3\2\2\2ln\3\2\2\2mk\3\2\2\2nr\5\b\5\2oq\7\13\2\2po\3\2\2\2qt\3\2\2\2"+
		"rp\3\2\2\2rs\3\2\2\2su\3\2\2\2tr\3\2\2\2uv\7\b\2\2v\21\3\2\2\2\17\30\37"+
		"(/\66=CKR[bkr";
	public static final ATN _ATN =
		ATNSimulator.deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
	}
}