// Generated from hw2p4.g4 by ANTLR 4.2
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
		T__34=1, T__33=2, T__32=3, T__31=4, T__30=5, T__29=6, T__28=7, T__27=8, 
		T__26=9, T__25=10, T__24=11, T__23=12, T__22=13, T__21=14, T__20=15, T__19=16, 
		T__18=17, T__17=18, T__16=19, T__15=20, T__14=21, T__13=22, T__12=23, 
		T__11=24, T__10=25, T__9=26, T__8=27, T__7=28, T__6=29, T__5=30, T__4=31, 
		T__3=32, T__2=33, T__1=34, T__0=35, Whitespace=36, TEXT=37, SEA_WS=38;
	public static final String[] tokenNames = {
		"<INVALID>", "'short'", "'mat3'", "'</head>'", "'vec3'", "'attribute'", 
		"'int'", "'sizei'", "'var'", "'ushort'", "'<head>'", "'mat4'", "'clampf'", 
		"'<script id=\"fragment-code\" type=\"x-shader\">'", "'<script id=\"vertex-code\" type=\"x-shader\">'", 
		"'ubyte'", "'intptr'", "'</html>'", "'float'", "'char'", "'uint'", "'<html>'", 
		"'mat2'", "'byte'", "'bitfield'", "'vec2'", "'fixed'", "'bool'", "'vec4'", 
		"'</script>'", "'<script type=\"text/javascript\">'", "'uniform'", "'sampler2D'", 
		"'varying'", "'sizeiptr'", "'enum'", "Whitespace", "TEXT", "SEA_WS"
	};
	public static final int
		RULE_document = 0, RULE_htmlElement = 1, RULE_headElement = 2, RULE_content = 3, 
		RULE_chardata = 4, RULE_vertexCodeScript = 5, RULE_fragmentCodeScript = 6, 
		RULE_javascript = 7, RULE_var = 8, RULE_boolsym = 9, RULE_bytesym = 10, 
		RULE_ubytesym = 11, RULE_intsym = 12, RULE_uintsym = 13, RULE_charsym = 14, 
		RULE_shortsym = 15, RULE_ushortsym = 16, RULE_fixedsym = 17, RULE_sizeisym = 18, 
		RULE_enumsym = 19, RULE_intptrsym = 20, RULE_sizeiptrsym = 21, RULE_floatsym = 22, 
		RULE_clampfsym = 23, RULE_bitfieldsym = 24, RULE_attribute = 25, RULE_uniform = 26, 
		RULE_varying = 27, RULE_vec4 = 28, RULE_vec3 = 29, RULE_vec2 = 30, RULE_mat4 = 31, 
		RULE_mat3 = 32, RULE_mat2 = 33, RULE_sampler2D = 34;
	public static final String[] ruleNames = {
		"document", "htmlElement", "headElement", "content", "chardata", "vertexCodeScript", 
		"fragmentCodeScript", "javascript", "var", "boolsym", "bytesym", "ubytesym", 
		"intsym", "uintsym", "charsym", "shortsym", "ushortsym", "fixedsym", "sizeisym", 
		"enumsym", "intptrsym", "sizeiptrsym", "floatsym", "clampfsym", "bitfieldsym", 
		"attribute", "uniform", "varying", "vec4", "vec3", "vec2", "mat4", "mat3", 
		"mat2", "sampler2D"
	};

	@Override
	public String getGrammarFileName() { return "hw2p4.g4"; }

	@Override
	public String[] getTokenNames() { return tokenNames; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

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
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof hw2p4Listener ) ((hw2p4Listener)listener).enterDocument(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof hw2p4Listener ) ((hw2p4Listener)listener).exitDocument(this);
		}
	}

	public final DocumentContext document() throws RecognitionException {
		DocumentContext _localctx = new DocumentContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_document);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(70); htmlElement();
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
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof hw2p4Listener ) ((hw2p4Listener)listener).enterHtmlElement(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof hw2p4Listener ) ((hw2p4Listener)listener).exitHtmlElement(this);
		}
	}

	public final HtmlElementContext htmlElement() throws RecognitionException {
		HtmlElementContext _localctx = new HtmlElementContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_htmlElement);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(72); match(21);
			setState(76);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==Whitespace) {
				{
				{
				setState(73); match(Whitespace);
				}
				}
				setState(78);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(79); headElement();
			setState(83);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==Whitespace) {
				{
				{
				setState(80); match(Whitespace);
				}
				}
				setState(85);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(86); match(17);
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
		public FragmentCodeScriptContext fragmentCodeScript() {
			return getRuleContext(FragmentCodeScriptContext.class,0);
		}
		public TerminalNode Whitespace(int i) {
			return getToken(hw2p4Parser.Whitespace, i);
		}
		public List<TerminalNode> Whitespace() { return getTokens(hw2p4Parser.Whitespace); }
		public JavascriptContext javascript() {
			return getRuleContext(JavascriptContext.class,0);
		}
		public VertexCodeScriptContext vertexCodeScript() {
			return getRuleContext(VertexCodeScriptContext.class,0);
		}
		public HeadElementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_headElement; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof hw2p4Listener ) ((hw2p4Listener)listener).enterHeadElement(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof hw2p4Listener ) ((hw2p4Listener)listener).exitHeadElement(this);
		}
	}

	public final HeadElementContext headElement() throws RecognitionException {
		HeadElementContext _localctx = new HeadElementContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_headElement);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(88); match(10);
			setState(92);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==Whitespace) {
				{
				{
				setState(89); match(Whitespace);
				}
				}
				setState(94);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(95); vertexCodeScript();
			setState(99);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==Whitespace) {
				{
				{
				setState(96); match(Whitespace);
				}
				}
				setState(101);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(102); fragmentCodeScript();
			setState(106);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==Whitespace) {
				{
				{
				setState(103); match(Whitespace);
				}
				}
				setState(108);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(109); javascript();
			setState(113);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==Whitespace) {
				{
				{
				setState(110); match(Whitespace);
				}
				}
				setState(115);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(116); match(3);
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
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof hw2p4Listener ) ((hw2p4Listener)listener).enterContent(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof hw2p4Listener ) ((hw2p4Listener)listener).exitContent(this);
		}
	}

	public final ContentContext content() throws RecognitionException {
		ContentContext _localctx = new ContentContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_content);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(119);
			_la = _input.LA(1);
			if (_la==TEXT || _la==SEA_WS) {
				{
				setState(118); chardata();
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
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof hw2p4Listener ) ((hw2p4Listener)listener).enterChardata(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof hw2p4Listener ) ((hw2p4Listener)listener).exitChardata(this);
		}
	}

	public final ChardataContext chardata() throws RecognitionException {
		ChardataContext _localctx = new ChardataContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_chardata);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(121);
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
		public TerminalNode Whitespace(int i) {
			return getToken(hw2p4Parser.Whitespace, i);
		}
		public List<TerminalNode> Whitespace() { return getTokens(hw2p4Parser.Whitespace); }
		public ContentContext content() {
			return getRuleContext(ContentContext.class,0);
		}
		public VertexCodeScriptContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_vertexCodeScript; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof hw2p4Listener ) ((hw2p4Listener)listener).enterVertexCodeScript(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof hw2p4Listener ) ((hw2p4Listener)listener).exitVertexCodeScript(this);
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
			setState(123); match(14);
			setState(127);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,7,_ctx);
			while ( _alt!=2 && _alt!=-1 ) {
				if ( _alt==1 ) {
					{
					{
					setState(124); match(Whitespace);
					}
					} 
				}
				setState(129);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,7,_ctx);
			}
			setState(130); content();
			setState(134);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==Whitespace) {
				{
				{
				setState(131); match(Whitespace);
				}
				}
				setState(136);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(137); match(29);
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
		public TerminalNode Whitespace(int i) {
			return getToken(hw2p4Parser.Whitespace, i);
		}
		public List<TerminalNode> Whitespace() { return getTokens(hw2p4Parser.Whitespace); }
		public ContentContext content() {
			return getRuleContext(ContentContext.class,0);
		}
		public FragmentCodeScriptContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_fragmentCodeScript; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof hw2p4Listener ) ((hw2p4Listener)listener).enterFragmentCodeScript(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof hw2p4Listener ) ((hw2p4Listener)listener).exitFragmentCodeScript(this);
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
			setState(139); match(13);
			setState(143);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,9,_ctx);
			while ( _alt!=2 && _alt!=-1 ) {
				if ( _alt==1 ) {
					{
					{
					setState(140); match(Whitespace);
					}
					} 
				}
				setState(145);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,9,_ctx);
			}
			setState(146); content();
			setState(150);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==Whitespace) {
				{
				{
				setState(147); match(Whitespace);
				}
				}
				setState(152);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(153); match(29);
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
		public TerminalNode Whitespace(int i) {
			return getToken(hw2p4Parser.Whitespace, i);
		}
		public List<TerminalNode> Whitespace() { return getTokens(hw2p4Parser.Whitespace); }
		public ContentContext content() {
			return getRuleContext(ContentContext.class,0);
		}
		public JavascriptContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_javascript; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof hw2p4Listener ) ((hw2p4Listener)listener).enterJavascript(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof hw2p4Listener ) ((hw2p4Listener)listener).exitJavascript(this);
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
			setState(155); match(30);
			setState(159);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,11,_ctx);
			while ( _alt!=2 && _alt!=-1 ) {
				if ( _alt==1 ) {
					{
					{
					setState(156); match(Whitespace);
					}
					} 
				}
				setState(161);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,11,_ctx);
			}
			setState(162); content();
			setState(166);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==Whitespace) {
				{
				{
				setState(163); match(Whitespace);
				}
				}
				setState(168);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(169); match(29);
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

	public static class VarContext extends ParserRuleContext {
		public TerminalNode Whitespace(int i) {
			return getToken(hw2p4Parser.Whitespace, i);
		}
		public List<TerminalNode> Whitespace() { return getTokens(hw2p4Parser.Whitespace); }
		public VarContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_var; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof hw2p4Listener ) ((hw2p4Listener)listener).enterVar(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof hw2p4Listener ) ((hw2p4Listener)listener).exitVar(this);
		}
	}

	public final VarContext var() throws RecognitionException {
		VarContext _localctx = new VarContext(_ctx, getState());
		enterRule(_localctx, 16, RULE_var);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(171); match(8);
			setState(175);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==Whitespace) {
				{
				{
				setState(172); match(Whitespace);
				}
				}
				setState(177);
				_errHandler.sync(this);
				_la = _input.LA(1);
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

	public static class BoolsymContext extends ParserRuleContext {
		public TerminalNode Whitespace(int i) {
			return getToken(hw2p4Parser.Whitespace, i);
		}
		public List<TerminalNode> Whitespace() { return getTokens(hw2p4Parser.Whitespace); }
		public BoolsymContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_boolsym; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof hw2p4Listener ) ((hw2p4Listener)listener).enterBoolsym(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof hw2p4Listener ) ((hw2p4Listener)listener).exitBoolsym(this);
		}
	}

	public final BoolsymContext boolsym() throws RecognitionException {
		BoolsymContext _localctx = new BoolsymContext(_ctx, getState());
		enterRule(_localctx, 18, RULE_boolsym);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(178); match(27);
			setState(182);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==Whitespace) {
				{
				{
				setState(179); match(Whitespace);
				}
				}
				setState(184);
				_errHandler.sync(this);
				_la = _input.LA(1);
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

	public static class BytesymContext extends ParserRuleContext {
		public TerminalNode Whitespace(int i) {
			return getToken(hw2p4Parser.Whitespace, i);
		}
		public List<TerminalNode> Whitespace() { return getTokens(hw2p4Parser.Whitespace); }
		public BytesymContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_bytesym; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof hw2p4Listener ) ((hw2p4Listener)listener).enterBytesym(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof hw2p4Listener ) ((hw2p4Listener)listener).exitBytesym(this);
		}
	}

	public final BytesymContext bytesym() throws RecognitionException {
		BytesymContext _localctx = new BytesymContext(_ctx, getState());
		enterRule(_localctx, 20, RULE_bytesym);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(185); match(23);
			setState(189);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==Whitespace) {
				{
				{
				setState(186); match(Whitespace);
				}
				}
				setState(191);
				_errHandler.sync(this);
				_la = _input.LA(1);
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

	public static class UbytesymContext extends ParserRuleContext {
		public TerminalNode Whitespace(int i) {
			return getToken(hw2p4Parser.Whitespace, i);
		}
		public List<TerminalNode> Whitespace() { return getTokens(hw2p4Parser.Whitespace); }
		public UbytesymContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_ubytesym; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof hw2p4Listener ) ((hw2p4Listener)listener).enterUbytesym(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof hw2p4Listener ) ((hw2p4Listener)listener).exitUbytesym(this);
		}
	}

	public final UbytesymContext ubytesym() throws RecognitionException {
		UbytesymContext _localctx = new UbytesymContext(_ctx, getState());
		enterRule(_localctx, 22, RULE_ubytesym);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(192); match(15);
			setState(196);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==Whitespace) {
				{
				{
				setState(193); match(Whitespace);
				}
				}
				setState(198);
				_errHandler.sync(this);
				_la = _input.LA(1);
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

	public static class IntsymContext extends ParserRuleContext {
		public TerminalNode Whitespace(int i) {
			return getToken(hw2p4Parser.Whitespace, i);
		}
		public List<TerminalNode> Whitespace() { return getTokens(hw2p4Parser.Whitespace); }
		public IntsymContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_intsym; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof hw2p4Listener ) ((hw2p4Listener)listener).enterIntsym(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof hw2p4Listener ) ((hw2p4Listener)listener).exitIntsym(this);
		}
	}

	public final IntsymContext intsym() throws RecognitionException {
		IntsymContext _localctx = new IntsymContext(_ctx, getState());
		enterRule(_localctx, 24, RULE_intsym);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(199); match(6);
			setState(203);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==Whitespace) {
				{
				{
				setState(200); match(Whitespace);
				}
				}
				setState(205);
				_errHandler.sync(this);
				_la = _input.LA(1);
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

	public static class UintsymContext extends ParserRuleContext {
		public TerminalNode Whitespace(int i) {
			return getToken(hw2p4Parser.Whitespace, i);
		}
		public List<TerminalNode> Whitespace() { return getTokens(hw2p4Parser.Whitespace); }
		public UintsymContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_uintsym; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof hw2p4Listener ) ((hw2p4Listener)listener).enterUintsym(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof hw2p4Listener ) ((hw2p4Listener)listener).exitUintsym(this);
		}
	}

	public final UintsymContext uintsym() throws RecognitionException {
		UintsymContext _localctx = new UintsymContext(_ctx, getState());
		enterRule(_localctx, 26, RULE_uintsym);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(206); match(20);
			setState(210);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==Whitespace) {
				{
				{
				setState(207); match(Whitespace);
				}
				}
				setState(212);
				_errHandler.sync(this);
				_la = _input.LA(1);
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

	public static class CharsymContext extends ParserRuleContext {
		public TerminalNode Whitespace(int i) {
			return getToken(hw2p4Parser.Whitespace, i);
		}
		public List<TerminalNode> Whitespace() { return getTokens(hw2p4Parser.Whitespace); }
		public CharsymContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_charsym; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof hw2p4Listener ) ((hw2p4Listener)listener).enterCharsym(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof hw2p4Listener ) ((hw2p4Listener)listener).exitCharsym(this);
		}
	}

	public final CharsymContext charsym() throws RecognitionException {
		CharsymContext _localctx = new CharsymContext(_ctx, getState());
		enterRule(_localctx, 28, RULE_charsym);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(213); match(19);
			setState(217);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==Whitespace) {
				{
				{
				setState(214); match(Whitespace);
				}
				}
				setState(219);
				_errHandler.sync(this);
				_la = _input.LA(1);
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

	public static class ShortsymContext extends ParserRuleContext {
		public TerminalNode Whitespace(int i) {
			return getToken(hw2p4Parser.Whitespace, i);
		}
		public List<TerminalNode> Whitespace() { return getTokens(hw2p4Parser.Whitespace); }
		public ShortsymContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_shortsym; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof hw2p4Listener ) ((hw2p4Listener)listener).enterShortsym(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof hw2p4Listener ) ((hw2p4Listener)listener).exitShortsym(this);
		}
	}

	public final ShortsymContext shortsym() throws RecognitionException {
		ShortsymContext _localctx = new ShortsymContext(_ctx, getState());
		enterRule(_localctx, 30, RULE_shortsym);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(220); match(1);
			setState(224);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==Whitespace) {
				{
				{
				setState(221); match(Whitespace);
				}
				}
				setState(226);
				_errHandler.sync(this);
				_la = _input.LA(1);
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

	public static class UshortsymContext extends ParserRuleContext {
		public TerminalNode Whitespace(int i) {
			return getToken(hw2p4Parser.Whitespace, i);
		}
		public List<TerminalNode> Whitespace() { return getTokens(hw2p4Parser.Whitespace); }
		public UshortsymContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_ushortsym; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof hw2p4Listener ) ((hw2p4Listener)listener).enterUshortsym(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof hw2p4Listener ) ((hw2p4Listener)listener).exitUshortsym(this);
		}
	}

	public final UshortsymContext ushortsym() throws RecognitionException {
		UshortsymContext _localctx = new UshortsymContext(_ctx, getState());
		enterRule(_localctx, 32, RULE_ushortsym);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(227); match(9);
			setState(231);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==Whitespace) {
				{
				{
				setState(228); match(Whitespace);
				}
				}
				setState(233);
				_errHandler.sync(this);
				_la = _input.LA(1);
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

	public static class FixedsymContext extends ParserRuleContext {
		public TerminalNode Whitespace(int i) {
			return getToken(hw2p4Parser.Whitespace, i);
		}
		public List<TerminalNode> Whitespace() { return getTokens(hw2p4Parser.Whitespace); }
		public FixedsymContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_fixedsym; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof hw2p4Listener ) ((hw2p4Listener)listener).enterFixedsym(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof hw2p4Listener ) ((hw2p4Listener)listener).exitFixedsym(this);
		}
	}

	public final FixedsymContext fixedsym() throws RecognitionException {
		FixedsymContext _localctx = new FixedsymContext(_ctx, getState());
		enterRule(_localctx, 34, RULE_fixedsym);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(234); match(26);
			setState(238);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==Whitespace) {
				{
				{
				setState(235); match(Whitespace);
				}
				}
				setState(240);
				_errHandler.sync(this);
				_la = _input.LA(1);
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

	public static class SizeisymContext extends ParserRuleContext {
		public TerminalNode Whitespace(int i) {
			return getToken(hw2p4Parser.Whitespace, i);
		}
		public List<TerminalNode> Whitespace() { return getTokens(hw2p4Parser.Whitespace); }
		public SizeisymContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_sizeisym; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof hw2p4Listener ) ((hw2p4Listener)listener).enterSizeisym(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof hw2p4Listener ) ((hw2p4Listener)listener).exitSizeisym(this);
		}
	}

	public final SizeisymContext sizeisym() throws RecognitionException {
		SizeisymContext _localctx = new SizeisymContext(_ctx, getState());
		enterRule(_localctx, 36, RULE_sizeisym);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(241); match(7);
			setState(245);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==Whitespace) {
				{
				{
				setState(242); match(Whitespace);
				}
				}
				setState(247);
				_errHandler.sync(this);
				_la = _input.LA(1);
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

	public static class EnumsymContext extends ParserRuleContext {
		public TerminalNode Whitespace(int i) {
			return getToken(hw2p4Parser.Whitespace, i);
		}
		public List<TerminalNode> Whitespace() { return getTokens(hw2p4Parser.Whitespace); }
		public EnumsymContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_enumsym; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof hw2p4Listener ) ((hw2p4Listener)listener).enterEnumsym(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof hw2p4Listener ) ((hw2p4Listener)listener).exitEnumsym(this);
		}
	}

	public final EnumsymContext enumsym() throws RecognitionException {
		EnumsymContext _localctx = new EnumsymContext(_ctx, getState());
		enterRule(_localctx, 38, RULE_enumsym);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(248); match(35);
			setState(252);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==Whitespace) {
				{
				{
				setState(249); match(Whitespace);
				}
				}
				setState(254);
				_errHandler.sync(this);
				_la = _input.LA(1);
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

	public static class IntptrsymContext extends ParserRuleContext {
		public TerminalNode Whitespace(int i) {
			return getToken(hw2p4Parser.Whitespace, i);
		}
		public List<TerminalNode> Whitespace() { return getTokens(hw2p4Parser.Whitespace); }
		public IntptrsymContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_intptrsym; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof hw2p4Listener ) ((hw2p4Listener)listener).enterIntptrsym(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof hw2p4Listener ) ((hw2p4Listener)listener).exitIntptrsym(this);
		}
	}

	public final IntptrsymContext intptrsym() throws RecognitionException {
		IntptrsymContext _localctx = new IntptrsymContext(_ctx, getState());
		enterRule(_localctx, 40, RULE_intptrsym);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(255); match(16);
			setState(259);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==Whitespace) {
				{
				{
				setState(256); match(Whitespace);
				}
				}
				setState(261);
				_errHandler.sync(this);
				_la = _input.LA(1);
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

	public static class SizeiptrsymContext extends ParserRuleContext {
		public TerminalNode Whitespace(int i) {
			return getToken(hw2p4Parser.Whitespace, i);
		}
		public List<TerminalNode> Whitespace() { return getTokens(hw2p4Parser.Whitespace); }
		public SizeiptrsymContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_sizeiptrsym; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof hw2p4Listener ) ((hw2p4Listener)listener).enterSizeiptrsym(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof hw2p4Listener ) ((hw2p4Listener)listener).exitSizeiptrsym(this);
		}
	}

	public final SizeiptrsymContext sizeiptrsym() throws RecognitionException {
		SizeiptrsymContext _localctx = new SizeiptrsymContext(_ctx, getState());
		enterRule(_localctx, 42, RULE_sizeiptrsym);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(262); match(34);
			setState(266);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==Whitespace) {
				{
				{
				setState(263); match(Whitespace);
				}
				}
				setState(268);
				_errHandler.sync(this);
				_la = _input.LA(1);
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

	public static class FloatsymContext extends ParserRuleContext {
		public TerminalNode Whitespace(int i) {
			return getToken(hw2p4Parser.Whitespace, i);
		}
		public List<TerminalNode> Whitespace() { return getTokens(hw2p4Parser.Whitespace); }
		public FloatsymContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_floatsym; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof hw2p4Listener ) ((hw2p4Listener)listener).enterFloatsym(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof hw2p4Listener ) ((hw2p4Listener)listener).exitFloatsym(this);
		}
	}

	public final FloatsymContext floatsym() throws RecognitionException {
		FloatsymContext _localctx = new FloatsymContext(_ctx, getState());
		enterRule(_localctx, 44, RULE_floatsym);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(269); match(18);
			setState(273);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==Whitespace) {
				{
				{
				setState(270); match(Whitespace);
				}
				}
				setState(275);
				_errHandler.sync(this);
				_la = _input.LA(1);
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

	public static class ClampfsymContext extends ParserRuleContext {
		public TerminalNode Whitespace(int i) {
			return getToken(hw2p4Parser.Whitespace, i);
		}
		public List<TerminalNode> Whitespace() { return getTokens(hw2p4Parser.Whitespace); }
		public ClampfsymContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_clampfsym; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof hw2p4Listener ) ((hw2p4Listener)listener).enterClampfsym(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof hw2p4Listener ) ((hw2p4Listener)listener).exitClampfsym(this);
		}
	}

	public final ClampfsymContext clampfsym() throws RecognitionException {
		ClampfsymContext _localctx = new ClampfsymContext(_ctx, getState());
		enterRule(_localctx, 46, RULE_clampfsym);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(276); match(12);
			setState(280);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==Whitespace) {
				{
				{
				setState(277); match(Whitespace);
				}
				}
				setState(282);
				_errHandler.sync(this);
				_la = _input.LA(1);
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

	public static class BitfieldsymContext extends ParserRuleContext {
		public TerminalNode Whitespace(int i) {
			return getToken(hw2p4Parser.Whitespace, i);
		}
		public List<TerminalNode> Whitespace() { return getTokens(hw2p4Parser.Whitespace); }
		public BitfieldsymContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_bitfieldsym; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof hw2p4Listener ) ((hw2p4Listener)listener).enterBitfieldsym(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof hw2p4Listener ) ((hw2p4Listener)listener).exitBitfieldsym(this);
		}
	}

	public final BitfieldsymContext bitfieldsym() throws RecognitionException {
		BitfieldsymContext _localctx = new BitfieldsymContext(_ctx, getState());
		enterRule(_localctx, 48, RULE_bitfieldsym);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(283); match(24);
			setState(287);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==Whitespace) {
				{
				{
				setState(284); match(Whitespace);
				}
				}
				setState(289);
				_errHandler.sync(this);
				_la = _input.LA(1);
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

	public static class AttributeContext extends ParserRuleContext {
		public TerminalNode Whitespace(int i) {
			return getToken(hw2p4Parser.Whitespace, i);
		}
		public List<TerminalNode> Whitespace() { return getTokens(hw2p4Parser.Whitespace); }
		public AttributeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_attribute; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof hw2p4Listener ) ((hw2p4Listener)listener).enterAttribute(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof hw2p4Listener ) ((hw2p4Listener)listener).exitAttribute(this);
		}
	}

	public final AttributeContext attribute() throws RecognitionException {
		AttributeContext _localctx = new AttributeContext(_ctx, getState());
		enterRule(_localctx, 50, RULE_attribute);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(290); match(5);
			setState(294);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==Whitespace) {
				{
				{
				setState(291); match(Whitespace);
				}
				}
				setState(296);
				_errHandler.sync(this);
				_la = _input.LA(1);
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

	public static class UniformContext extends ParserRuleContext {
		public TerminalNode Whitespace(int i) {
			return getToken(hw2p4Parser.Whitespace, i);
		}
		public List<TerminalNode> Whitespace() { return getTokens(hw2p4Parser.Whitespace); }
		public UniformContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_uniform; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof hw2p4Listener ) ((hw2p4Listener)listener).enterUniform(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof hw2p4Listener ) ((hw2p4Listener)listener).exitUniform(this);
		}
	}

	public final UniformContext uniform() throws RecognitionException {
		UniformContext _localctx = new UniformContext(_ctx, getState());
		enterRule(_localctx, 52, RULE_uniform);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(297); match(31);
			setState(301);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==Whitespace) {
				{
				{
				setState(298); match(Whitespace);
				}
				}
				setState(303);
				_errHandler.sync(this);
				_la = _input.LA(1);
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

	public static class VaryingContext extends ParserRuleContext {
		public TerminalNode Whitespace(int i) {
			return getToken(hw2p4Parser.Whitespace, i);
		}
		public List<TerminalNode> Whitespace() { return getTokens(hw2p4Parser.Whitespace); }
		public VaryingContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_varying; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof hw2p4Listener ) ((hw2p4Listener)listener).enterVarying(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof hw2p4Listener ) ((hw2p4Listener)listener).exitVarying(this);
		}
	}

	public final VaryingContext varying() throws RecognitionException {
		VaryingContext _localctx = new VaryingContext(_ctx, getState());
		enterRule(_localctx, 54, RULE_varying);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(304); match(33);
			setState(308);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==Whitespace) {
				{
				{
				setState(305); match(Whitespace);
				}
				}
				setState(310);
				_errHandler.sync(this);
				_la = _input.LA(1);
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

	public static class Vec4Context extends ParserRuleContext {
		public TerminalNode Whitespace(int i) {
			return getToken(hw2p4Parser.Whitespace, i);
		}
		public List<TerminalNode> Whitespace() { return getTokens(hw2p4Parser.Whitespace); }
		public Vec4Context(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_vec4; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof hw2p4Listener ) ((hw2p4Listener)listener).enterVec4(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof hw2p4Listener ) ((hw2p4Listener)listener).exitVec4(this);
		}
	}

	public final Vec4Context vec4() throws RecognitionException {
		Vec4Context _localctx = new Vec4Context(_ctx, getState());
		enterRule(_localctx, 56, RULE_vec4);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(311); match(28);
			setState(315);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==Whitespace) {
				{
				{
				setState(312); match(Whitespace);
				}
				}
				setState(317);
				_errHandler.sync(this);
				_la = _input.LA(1);
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

	public static class Vec3Context extends ParserRuleContext {
		public TerminalNode Whitespace(int i) {
			return getToken(hw2p4Parser.Whitespace, i);
		}
		public List<TerminalNode> Whitespace() { return getTokens(hw2p4Parser.Whitespace); }
		public Vec3Context(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_vec3; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof hw2p4Listener ) ((hw2p4Listener)listener).enterVec3(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof hw2p4Listener ) ((hw2p4Listener)listener).exitVec3(this);
		}
	}

	public final Vec3Context vec3() throws RecognitionException {
		Vec3Context _localctx = new Vec3Context(_ctx, getState());
		enterRule(_localctx, 58, RULE_vec3);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(318); match(4);
			setState(322);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==Whitespace) {
				{
				{
				setState(319); match(Whitespace);
				}
				}
				setState(324);
				_errHandler.sync(this);
				_la = _input.LA(1);
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

	public static class Vec2Context extends ParserRuleContext {
		public TerminalNode Whitespace(int i) {
			return getToken(hw2p4Parser.Whitespace, i);
		}
		public List<TerminalNode> Whitespace() { return getTokens(hw2p4Parser.Whitespace); }
		public Vec2Context(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_vec2; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof hw2p4Listener ) ((hw2p4Listener)listener).enterVec2(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof hw2p4Listener ) ((hw2p4Listener)listener).exitVec2(this);
		}
	}

	public final Vec2Context vec2() throws RecognitionException {
		Vec2Context _localctx = new Vec2Context(_ctx, getState());
		enterRule(_localctx, 60, RULE_vec2);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(325); match(25);
			setState(329);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==Whitespace) {
				{
				{
				setState(326); match(Whitespace);
				}
				}
				setState(331);
				_errHandler.sync(this);
				_la = _input.LA(1);
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

	public static class Mat4Context extends ParserRuleContext {
		public TerminalNode Whitespace(int i) {
			return getToken(hw2p4Parser.Whitespace, i);
		}
		public List<TerminalNode> Whitespace() { return getTokens(hw2p4Parser.Whitespace); }
		public Mat4Context(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_mat4; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof hw2p4Listener ) ((hw2p4Listener)listener).enterMat4(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof hw2p4Listener ) ((hw2p4Listener)listener).exitMat4(this);
		}
	}

	public final Mat4Context mat4() throws RecognitionException {
		Mat4Context _localctx = new Mat4Context(_ctx, getState());
		enterRule(_localctx, 62, RULE_mat4);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(332); match(11);
			setState(336);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==Whitespace) {
				{
				{
				setState(333); match(Whitespace);
				}
				}
				setState(338);
				_errHandler.sync(this);
				_la = _input.LA(1);
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

	public static class Mat3Context extends ParserRuleContext {
		public TerminalNode Whitespace(int i) {
			return getToken(hw2p4Parser.Whitespace, i);
		}
		public List<TerminalNode> Whitespace() { return getTokens(hw2p4Parser.Whitespace); }
		public Mat3Context(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_mat3; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof hw2p4Listener ) ((hw2p4Listener)listener).enterMat3(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof hw2p4Listener ) ((hw2p4Listener)listener).exitMat3(this);
		}
	}

	public final Mat3Context mat3() throws RecognitionException {
		Mat3Context _localctx = new Mat3Context(_ctx, getState());
		enterRule(_localctx, 64, RULE_mat3);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(339); match(2);
			setState(343);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==Whitespace) {
				{
				{
				setState(340); match(Whitespace);
				}
				}
				setState(345);
				_errHandler.sync(this);
				_la = _input.LA(1);
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

	public static class Mat2Context extends ParserRuleContext {
		public TerminalNode Whitespace(int i) {
			return getToken(hw2p4Parser.Whitespace, i);
		}
		public List<TerminalNode> Whitespace() { return getTokens(hw2p4Parser.Whitespace); }
		public Mat2Context(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_mat2; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof hw2p4Listener ) ((hw2p4Listener)listener).enterMat2(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof hw2p4Listener ) ((hw2p4Listener)listener).exitMat2(this);
		}
	}

	public final Mat2Context mat2() throws RecognitionException {
		Mat2Context _localctx = new Mat2Context(_ctx, getState());
		enterRule(_localctx, 66, RULE_mat2);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(346); match(22);
			setState(350);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==Whitespace) {
				{
				{
				setState(347); match(Whitespace);
				}
				}
				setState(352);
				_errHandler.sync(this);
				_la = _input.LA(1);
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

	public static class Sampler2DContext extends ParserRuleContext {
		public TerminalNode Whitespace(int i) {
			return getToken(hw2p4Parser.Whitespace, i);
		}
		public List<TerminalNode> Whitespace() { return getTokens(hw2p4Parser.Whitespace); }
		public Sampler2DContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_sampler2D; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof hw2p4Listener ) ((hw2p4Listener)listener).enterSampler2D(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof hw2p4Listener ) ((hw2p4Listener)listener).exitSampler2D(this);
		}
	}

	public final Sampler2DContext sampler2D() throws RecognitionException {
		Sampler2DContext _localctx = new Sampler2DContext(_ctx, getState());
		enterRule(_localctx, 68, RULE_sampler2D);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(353); match(32);
			setState(357);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==Whitespace) {
				{
				{
				setState(354); match(Whitespace);
				}
				}
				setState(359);
				_errHandler.sync(this);
				_la = _input.LA(1);
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

	public static final String _serializedATN =
		"\3\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd\3(\u016b\4\2\t\2\4"+
		"\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13\t"+
		"\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4\22\t\22"+
		"\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\4\27\t\27\4\30\t\30\4\31\t\31"+
		"\4\32\t\32\4\33\t\33\4\34\t\34\4\35\t\35\4\36\t\36\4\37\t\37\4 \t \4!"+
		"\t!\4\"\t\"\4#\t#\4$\t$\3\2\3\2\3\3\3\3\7\3M\n\3\f\3\16\3P\13\3\3\3\3"+
		"\3\7\3T\n\3\f\3\16\3W\13\3\3\3\3\3\3\4\3\4\7\4]\n\4\f\4\16\4`\13\4\3\4"+
		"\3\4\7\4d\n\4\f\4\16\4g\13\4\3\4\3\4\7\4k\n\4\f\4\16\4n\13\4\3\4\3\4\7"+
		"\4r\n\4\f\4\16\4u\13\4\3\4\3\4\3\5\5\5z\n\5\3\6\3\6\3\7\3\7\7\7\u0080"+
		"\n\7\f\7\16\7\u0083\13\7\3\7\3\7\7\7\u0087\n\7\f\7\16\7\u008a\13\7\3\7"+
		"\3\7\3\b\3\b\7\b\u0090\n\b\f\b\16\b\u0093\13\b\3\b\3\b\7\b\u0097\n\b\f"+
		"\b\16\b\u009a\13\b\3\b\3\b\3\t\3\t\7\t\u00a0\n\t\f\t\16\t\u00a3\13\t\3"+
		"\t\3\t\7\t\u00a7\n\t\f\t\16\t\u00aa\13\t\3\t\3\t\3\n\3\n\7\n\u00b0\n\n"+
		"\f\n\16\n\u00b3\13\n\3\13\3\13\7\13\u00b7\n\13\f\13\16\13\u00ba\13\13"+
		"\3\f\3\f\7\f\u00be\n\f\f\f\16\f\u00c1\13\f\3\r\3\r\7\r\u00c5\n\r\f\r\16"+
		"\r\u00c8\13\r\3\16\3\16\7\16\u00cc\n\16\f\16\16\16\u00cf\13\16\3\17\3"+
		"\17\7\17\u00d3\n\17\f\17\16\17\u00d6\13\17\3\20\3\20\7\20\u00da\n\20\f"+
		"\20\16\20\u00dd\13\20\3\21\3\21\7\21\u00e1\n\21\f\21\16\21\u00e4\13\21"+
		"\3\22\3\22\7\22\u00e8\n\22\f\22\16\22\u00eb\13\22\3\23\3\23\7\23\u00ef"+
		"\n\23\f\23\16\23\u00f2\13\23\3\24\3\24\7\24\u00f6\n\24\f\24\16\24\u00f9"+
		"\13\24\3\25\3\25\7\25\u00fd\n\25\f\25\16\25\u0100\13\25\3\26\3\26\7\26"+
		"\u0104\n\26\f\26\16\26\u0107\13\26\3\27\3\27\7\27\u010b\n\27\f\27\16\27"+
		"\u010e\13\27\3\30\3\30\7\30\u0112\n\30\f\30\16\30\u0115\13\30\3\31\3\31"+
		"\7\31\u0119\n\31\f\31\16\31\u011c\13\31\3\32\3\32\7\32\u0120\n\32\f\32"+
		"\16\32\u0123\13\32\3\33\3\33\7\33\u0127\n\33\f\33\16\33\u012a\13\33\3"+
		"\34\3\34\7\34\u012e\n\34\f\34\16\34\u0131\13\34\3\35\3\35\7\35\u0135\n"+
		"\35\f\35\16\35\u0138\13\35\3\36\3\36\7\36\u013c\n\36\f\36\16\36\u013f"+
		"\13\36\3\37\3\37\7\37\u0143\n\37\f\37\16\37\u0146\13\37\3 \3 \7 \u014a"+
		"\n \f \16 \u014d\13 \3!\3!\7!\u0151\n!\f!\16!\u0154\13!\3\"\3\"\7\"\u0158"+
		"\n\"\f\"\16\"\u015b\13\"\3#\3#\7#\u015f\n#\f#\16#\u0162\13#\3$\3$\7$\u0166"+
		"\n$\f$\16$\u0169\13$\3$\2\2%\2\4\6\b\n\f\16\20\22\24\26\30\32\34\36 \""+
		"$&(*,.\60\62\64\668:<>@BDF\2\3\3\2\'(\u016f\2H\3\2\2\2\4J\3\2\2\2\6Z\3"+
		"\2\2\2\by\3\2\2\2\n{\3\2\2\2\f}\3\2\2\2\16\u008d\3\2\2\2\20\u009d\3\2"+
		"\2\2\22\u00ad\3\2\2\2\24\u00b4\3\2\2\2\26\u00bb\3\2\2\2\30\u00c2\3\2\2"+
		"\2\32\u00c9\3\2\2\2\34\u00d0\3\2\2\2\36\u00d7\3\2\2\2 \u00de\3\2\2\2\""+
		"\u00e5\3\2\2\2$\u00ec\3\2\2\2&\u00f3\3\2\2\2(\u00fa\3\2\2\2*\u0101\3\2"+
		"\2\2,\u0108\3\2\2\2.\u010f\3\2\2\2\60\u0116\3\2\2\2\62\u011d\3\2\2\2\64"+
		"\u0124\3\2\2\2\66\u012b\3\2\2\28\u0132\3\2\2\2:\u0139\3\2\2\2<\u0140\3"+
		"\2\2\2>\u0147\3\2\2\2@\u014e\3\2\2\2B\u0155\3\2\2\2D\u015c\3\2\2\2F\u0163"+
		"\3\2\2\2HI\5\4\3\2I\3\3\2\2\2JN\7\27\2\2KM\7&\2\2LK\3\2\2\2MP\3\2\2\2"+
		"NL\3\2\2\2NO\3\2\2\2OQ\3\2\2\2PN\3\2\2\2QU\5\6\4\2RT\7&\2\2SR\3\2\2\2"+
		"TW\3\2\2\2US\3\2\2\2UV\3\2\2\2VX\3\2\2\2WU\3\2\2\2XY\7\23\2\2Y\5\3\2\2"+
		"\2Z^\7\f\2\2[]\7&\2\2\\[\3\2\2\2]`\3\2\2\2^\\\3\2\2\2^_\3\2\2\2_a\3\2"+
		"\2\2`^\3\2\2\2ae\5\f\7\2bd\7&\2\2cb\3\2\2\2dg\3\2\2\2ec\3\2\2\2ef\3\2"+
		"\2\2fh\3\2\2\2ge\3\2\2\2hl\5\16\b\2ik\7&\2\2ji\3\2\2\2kn\3\2\2\2lj\3\2"+
		"\2\2lm\3\2\2\2mo\3\2\2\2nl\3\2\2\2os\5\20\t\2pr\7&\2\2qp\3\2\2\2ru\3\2"+
		"\2\2sq\3\2\2\2st\3\2\2\2tv\3\2\2\2us\3\2\2\2vw\7\5\2\2w\7\3\2\2\2xz\5"+
		"\n\6\2yx\3\2\2\2yz\3\2\2\2z\t\3\2\2\2{|\t\2\2\2|\13\3\2\2\2}\u0081\7\20"+
		"\2\2~\u0080\7&\2\2\177~\3\2\2\2\u0080\u0083\3\2\2\2\u0081\177\3\2\2\2"+
		"\u0081\u0082\3\2\2\2\u0082\u0084\3\2\2\2\u0083\u0081\3\2\2\2\u0084\u0088"+
		"\5\b\5\2\u0085\u0087\7&\2\2\u0086\u0085\3\2\2\2\u0087\u008a\3\2\2\2\u0088"+
		"\u0086\3\2\2\2\u0088\u0089\3\2\2\2\u0089\u008b\3\2\2\2\u008a\u0088\3\2"+
		"\2\2\u008b\u008c\7\37\2\2\u008c\r\3\2\2\2\u008d\u0091\7\17\2\2\u008e\u0090"+
		"\7&\2\2\u008f\u008e\3\2\2\2\u0090\u0093\3\2\2\2\u0091\u008f\3\2\2\2\u0091"+
		"\u0092\3\2\2\2\u0092\u0094\3\2\2\2\u0093\u0091\3\2\2\2\u0094\u0098\5\b"+
		"\5\2\u0095\u0097\7&\2\2\u0096\u0095\3\2\2\2\u0097\u009a\3\2\2\2\u0098"+
		"\u0096\3\2\2\2\u0098\u0099\3\2\2\2\u0099\u009b\3\2\2\2\u009a\u0098\3\2"+
		"\2\2\u009b\u009c\7\37\2\2\u009c\17\3\2\2\2\u009d\u00a1\7 \2\2\u009e\u00a0"+
		"\7&\2\2\u009f\u009e\3\2\2\2\u00a0\u00a3\3\2\2\2\u00a1\u009f\3\2\2\2\u00a1"+
		"\u00a2\3\2\2\2\u00a2\u00a4\3\2\2\2\u00a3\u00a1\3\2\2\2\u00a4\u00a8\5\b"+
		"\5\2\u00a5\u00a7\7&\2\2\u00a6\u00a5\3\2\2\2\u00a7\u00aa\3\2\2\2\u00a8"+
		"\u00a6\3\2\2\2\u00a8\u00a9\3\2\2\2\u00a9\u00ab\3\2\2\2\u00aa\u00a8\3\2"+
		"\2\2\u00ab\u00ac\7\37\2\2\u00ac\21\3\2\2\2\u00ad\u00b1\7\n\2\2\u00ae\u00b0"+
		"\7&\2\2\u00af\u00ae\3\2\2\2\u00b0\u00b3\3\2\2\2\u00b1\u00af\3\2\2\2\u00b1"+
		"\u00b2\3\2\2\2\u00b2\23\3\2\2\2\u00b3\u00b1\3\2\2\2\u00b4\u00b8\7\35\2"+
		"\2\u00b5\u00b7\7&\2\2\u00b6\u00b5\3\2\2\2\u00b7\u00ba\3\2\2\2\u00b8\u00b6"+
		"\3\2\2\2\u00b8\u00b9\3\2\2\2\u00b9\25\3\2\2\2\u00ba\u00b8\3\2\2\2\u00bb"+
		"\u00bf\7\31\2\2\u00bc\u00be\7&\2\2\u00bd\u00bc\3\2\2\2\u00be\u00c1\3\2"+
		"\2\2\u00bf\u00bd\3\2\2\2\u00bf\u00c0\3\2\2\2\u00c0\27\3\2\2\2\u00c1\u00bf"+
		"\3\2\2\2\u00c2\u00c6\7\21\2\2\u00c3\u00c5\7&\2\2\u00c4\u00c3\3\2\2\2\u00c5"+
		"\u00c8\3\2\2\2\u00c6\u00c4\3\2\2\2\u00c6\u00c7\3\2\2\2\u00c7\31\3\2\2"+
		"\2\u00c8\u00c6\3\2\2\2\u00c9\u00cd\7\b\2\2\u00ca\u00cc\7&\2\2\u00cb\u00ca"+
		"\3\2\2\2\u00cc\u00cf\3\2\2\2\u00cd\u00cb\3\2\2\2\u00cd\u00ce\3\2\2\2\u00ce"+
		"\33\3\2\2\2\u00cf\u00cd\3\2\2\2\u00d0\u00d4\7\26\2\2\u00d1\u00d3\7&\2"+
		"\2\u00d2\u00d1\3\2\2\2\u00d3\u00d6\3\2\2\2\u00d4\u00d2\3\2\2\2\u00d4\u00d5"+
		"\3\2\2\2\u00d5\35\3\2\2\2\u00d6\u00d4\3\2\2\2\u00d7\u00db\7\25\2\2\u00d8"+
		"\u00da\7&\2\2\u00d9\u00d8\3\2\2\2\u00da\u00dd\3\2\2\2\u00db\u00d9\3\2"+
		"\2\2\u00db\u00dc\3\2\2\2\u00dc\37\3\2\2\2\u00dd\u00db\3\2\2\2\u00de\u00e2"+
		"\7\3\2\2\u00df\u00e1\7&\2\2\u00e0\u00df\3\2\2\2\u00e1\u00e4\3\2\2\2\u00e2"+
		"\u00e0\3\2\2\2\u00e2\u00e3\3\2\2\2\u00e3!\3\2\2\2\u00e4\u00e2\3\2\2\2"+
		"\u00e5\u00e9\7\13\2\2\u00e6\u00e8\7&\2\2\u00e7\u00e6\3\2\2\2\u00e8\u00eb"+
		"\3\2\2\2\u00e9\u00e7\3\2\2\2\u00e9\u00ea\3\2\2\2\u00ea#\3\2\2\2\u00eb"+
		"\u00e9\3\2\2\2\u00ec\u00f0\7\34\2\2\u00ed\u00ef\7&\2\2\u00ee\u00ed\3\2"+
		"\2\2\u00ef\u00f2\3\2\2\2\u00f0\u00ee\3\2\2\2\u00f0\u00f1\3\2\2\2\u00f1"+
		"%\3\2\2\2\u00f2\u00f0\3\2\2\2\u00f3\u00f7\7\t\2\2\u00f4\u00f6\7&\2\2\u00f5"+
		"\u00f4\3\2\2\2\u00f6\u00f9\3\2\2\2\u00f7\u00f5\3\2\2\2\u00f7\u00f8\3\2"+
		"\2\2\u00f8\'\3\2\2\2\u00f9\u00f7\3\2\2\2\u00fa\u00fe\7%\2\2\u00fb\u00fd"+
		"\7&\2\2\u00fc\u00fb\3\2\2\2\u00fd\u0100\3\2\2\2\u00fe\u00fc\3\2\2\2\u00fe"+
		"\u00ff\3\2\2\2\u00ff)\3\2\2\2\u0100\u00fe\3\2\2\2\u0101\u0105\7\22\2\2"+
		"\u0102\u0104\7&\2\2\u0103\u0102\3\2\2\2\u0104\u0107\3\2\2\2\u0105\u0103"+
		"\3\2\2\2\u0105\u0106\3\2\2\2\u0106+\3\2\2\2\u0107\u0105\3\2\2\2\u0108"+
		"\u010c\7$\2\2\u0109\u010b\7&\2\2\u010a\u0109\3\2\2\2\u010b\u010e\3\2\2"+
		"\2\u010c\u010a\3\2\2\2\u010c\u010d\3\2\2\2\u010d-\3\2\2\2\u010e\u010c"+
		"\3\2\2\2\u010f\u0113\7\24\2\2\u0110\u0112\7&\2\2\u0111\u0110\3\2\2\2\u0112"+
		"\u0115\3\2\2\2\u0113\u0111\3\2\2\2\u0113\u0114\3\2\2\2\u0114/\3\2\2\2"+
		"\u0115\u0113\3\2\2\2\u0116\u011a\7\16\2\2\u0117\u0119\7&\2\2\u0118\u0117"+
		"\3\2\2\2\u0119\u011c\3\2\2\2\u011a\u0118\3\2\2\2\u011a\u011b\3\2\2\2\u011b"+
		"\61\3\2\2\2\u011c\u011a\3\2\2\2\u011d\u0121\7\32\2\2\u011e\u0120\7&\2"+
		"\2\u011f\u011e\3\2\2\2\u0120\u0123\3\2\2\2\u0121\u011f\3\2\2\2\u0121\u0122"+
		"\3\2\2\2\u0122\63\3\2\2\2\u0123\u0121\3\2\2\2\u0124\u0128\7\7\2\2\u0125"+
		"\u0127\7&\2\2\u0126\u0125\3\2\2\2\u0127\u012a\3\2\2\2\u0128\u0126\3\2"+
		"\2\2\u0128\u0129\3\2\2\2\u0129\65\3\2\2\2\u012a\u0128\3\2\2\2\u012b\u012f"+
		"\7!\2\2\u012c\u012e\7&\2\2\u012d\u012c\3\2\2\2\u012e\u0131\3\2\2\2\u012f"+
		"\u012d\3\2\2\2\u012f\u0130\3\2\2\2\u0130\67\3\2\2\2\u0131\u012f\3\2\2"+
		"\2\u0132\u0136\7#\2\2\u0133\u0135\7&\2\2\u0134\u0133\3\2\2\2\u0135\u0138"+
		"\3\2\2\2\u0136\u0134\3\2\2\2\u0136\u0137\3\2\2\2\u01379\3\2\2\2\u0138"+
		"\u0136\3\2\2\2\u0139\u013d\7\36\2\2\u013a\u013c\7&\2\2\u013b\u013a\3\2"+
		"\2\2\u013c\u013f\3\2\2\2\u013d\u013b\3\2\2\2\u013d\u013e\3\2\2\2\u013e"+
		";\3\2\2\2\u013f\u013d\3\2\2\2\u0140\u0144\7\6\2\2\u0141\u0143\7&\2\2\u0142"+
		"\u0141\3\2\2\2\u0143\u0146\3\2\2\2\u0144\u0142\3\2\2\2\u0144\u0145\3\2"+
		"\2\2\u0145=\3\2\2\2\u0146\u0144\3\2\2\2\u0147\u014b\7\33\2\2\u0148\u014a"+
		"\7&\2\2\u0149\u0148\3\2\2\2\u014a\u014d\3\2\2\2\u014b\u0149\3\2\2\2\u014b"+
		"\u014c\3\2\2\2\u014c?\3\2\2\2\u014d\u014b\3\2\2\2\u014e\u0152\7\r\2\2"+
		"\u014f\u0151\7&\2\2\u0150\u014f\3\2\2\2\u0151\u0154\3\2\2\2\u0152\u0150"+
		"\3\2\2\2\u0152\u0153\3\2\2\2\u0153A\3\2\2\2\u0154\u0152\3\2\2\2\u0155"+
		"\u0159\7\4\2\2\u0156\u0158\7&\2\2\u0157\u0156\3\2\2\2\u0158\u015b\3\2"+
		"\2\2\u0159\u0157\3\2\2\2\u0159\u015a\3\2\2\2\u015aC\3\2\2\2\u015b\u0159"+
		"\3\2\2\2\u015c\u0160\7\30\2\2\u015d\u015f\7&\2\2\u015e\u015d\3\2\2\2\u015f"+
		"\u0162\3\2\2\2\u0160\u015e\3\2\2\2\u0160\u0161\3\2\2\2\u0161E\3\2\2\2"+
		"\u0162\u0160\3\2\2\2\u0163\u0167\7\"\2\2\u0164\u0166\7&\2\2\u0165\u0164"+
		"\3\2\2\2\u0166\u0169\3\2\2\2\u0167\u0165\3\2\2\2\u0167\u0168\3\2\2\2\u0168"+
		"G\3\2\2\2\u0169\u0167\3\2\2\2*NU^elsy\u0081\u0088\u0091\u0098\u00a1\u00a8"+
		"\u00b1\u00b8\u00bf\u00c6\u00cd\u00d4\u00db\u00e2\u00e9\u00f0\u00f7\u00fe"+
		"\u0105\u010c\u0113\u011a\u0121\u0128\u012f\u0136\u013d\u0144\u014b\u0152"+
		"\u0159\u0160\u0167";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}