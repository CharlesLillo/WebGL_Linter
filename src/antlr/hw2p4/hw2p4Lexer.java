// Generated from C:\Users\tobyt_000\Development\program analysis\assignment 2\WebGL_Linter\src\antlr\hw2p4\hw2p4.g4 by ANTLR 4.1
import org.antlr.v4.runtime.Lexer;
import org.antlr.v4.runtime.CharStream;
import org.antlr.v4.runtime.Token;
import org.antlr.v4.runtime.TokenStream;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.misc.*;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class hw2p4Lexer extends Lexer {
	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		T__7=1, T__6=2, T__5=3, T__4=4, T__3=5, T__2=6, T__1=7, T__0=8, Whitespace=9, 
		TEXT=10, SEA_WS=11;
	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	public static final String[] tokenNames = {
		"<INVALID>",
		"'<html>'", "'<head>'", "'</head>'", "'<script id=\"fragment-code\" type=\"x-shader\">'", 
		"'<script id=\"vertex-code\" type=\"x-shader\">'", "'</script>'", "'</html>'", 
		"'<script type=\"text/javascript\">'", "Whitespace", "TEXT", "SEA_WS"
	};
	public static final String[] ruleNames = {
		"T__7", "T__6", "T__5", "T__4", "T__3", "T__2", "T__1", "T__0", "Whitespace", 
		"TEXT", "SEA_WS"
	};


	public hw2p4Lexer(CharStream input) {
		super(input);
		_interp = new LexerATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@Override
	public String getGrammarFileName() { return "hw2p4.g4"; }

	@Override
	public String[] getTokenNames() { return tokenNames; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String[] getModeNames() { return modeNames; }

	@Override
	public ATN getATN() { return _ATN; }

	@Override
	public void action(RuleContext _localctx, int ruleIndex, int actionIndex) {
		switch (ruleIndex) {
		case 8: Whitespace_action((RuleContext)_localctx, actionIndex); break;
		}
	}
	private void Whitespace_action(RuleContext _localctx, int actionIndex) {
		switch (actionIndex) {
		case 0: skip();  break;
		}
	}

	public static final String _serializedATN =
		"\3\uacf5\uee8c\u4f5d\u8b0d\u4a45\u78bd\u1b2f\u3378\2\r\u00cc\b\1\4\2\t"+
		"\2\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13"+
		"\t\13\4\f\t\f\3\2\3\2\3\2\3\2\3\2\3\2\3\2\3\3\3\3\3\3\3\3\3\3\3\3\3\3"+
		"\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\5\3\5\3\5\3\5\3\5\3\5\3\5\3\5\3\5\3"+
		"\5\3\5\3\5\3\5\3\5\3\5\3\5\3\5\3\5\3\5\3\5\3\5\3\5\3\5\3\5\3\5\3\5\3\5"+
		"\3\5\3\5\3\5\3\5\3\5\3\5\3\5\3\5\3\5\3\5\3\5\3\5\3\5\3\5\3\5\3\5\3\5\3"+
		"\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6"+
		"\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3"+
		"\6\3\6\3\6\3\6\3\6\3\6\3\6\3\7\3\7\3\7\3\7\3\7\3\7\3\7\3\7\3\7\3\7\3\b"+
		"\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3"+
		"\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t"+
		"\3\t\3\t\3\t\3\t\3\n\6\n\u00b9\n\n\r\n\16\n\u00ba\3\n\3\n\3\13\6\13\u00c0"+
		"\n\13\r\13\16\13\u00c1\3\f\3\f\5\f\u00c6\n\f\3\f\6\f\u00c9\n\f\r\f\16"+
		"\f\u00ca\2\r\3\3\1\5\4\1\7\5\1\t\6\1\13\7\1\r\b\1\17\t\1\21\n\1\23\13"+
		"\2\25\f\1\27\r\1\3\2\5\5\2\13\f\17\17\"\"\5\2))\61\61>>\4\2\13\13\"\""+
		"\u00d0\2\3\3\2\2\2\2\5\3\2\2\2\2\7\3\2\2\2\2\t\3\2\2\2\2\13\3\2\2\2\2"+
		"\r\3\2\2\2\2\17\3\2\2\2\2\21\3\2\2\2\2\23\3\2\2\2\2\25\3\2\2\2\2\27\3"+
		"\2\2\2\3\31\3\2\2\2\5 \3\2\2\2\7\'\3\2\2\2\t/\3\2\2\2\13[\3\2\2\2\r\u0085"+
		"\3\2\2\2\17\u008f\3\2\2\2\21\u0097\3\2\2\2\23\u00b8\3\2\2\2\25\u00bf\3"+
		"\2\2\2\27\u00c8\3\2\2\2\31\32\7>\2\2\32\33\7j\2\2\33\34\7v\2\2\34\35\7"+
		"o\2\2\35\36\7n\2\2\36\37\7@\2\2\37\4\3\2\2\2 !\7>\2\2!\"\7j\2\2\"#\7g"+
		"\2\2#$\7c\2\2$%\7f\2\2%&\7@\2\2&\6\3\2\2\2\'(\7>\2\2()\7\61\2\2)*\7j\2"+
		"\2*+\7g\2\2+,\7c\2\2,-\7f\2\2-.\7@\2\2.\b\3\2\2\2/\60\7>\2\2\60\61\7u"+
		"\2\2\61\62\7e\2\2\62\63\7t\2\2\63\64\7k\2\2\64\65\7r\2\2\65\66\7v\2\2"+
		"\66\67\7\"\2\2\678\7k\2\289\7f\2\29:\7?\2\2:;\7$\2\2;<\7h\2\2<=\7t\2\2"+
		"=>\7c\2\2>?\7i\2\2?@\7o\2\2@A\7g\2\2AB\7p\2\2BC\7v\2\2CD\7/\2\2DE\7e\2"+
		"\2EF\7q\2\2FG\7f\2\2GH\7g\2\2HI\7$\2\2IJ\7\"\2\2JK\7v\2\2KL\7{\2\2LM\7"+
		"r\2\2MN\7g\2\2NO\7?\2\2OP\7$\2\2PQ\7z\2\2QR\7/\2\2RS\7u\2\2ST\7j\2\2T"+
		"U\7c\2\2UV\7f\2\2VW\7g\2\2WX\7t\2\2XY\7$\2\2YZ\7@\2\2Z\n\3\2\2\2[\\\7"+
		">\2\2\\]\7u\2\2]^\7e\2\2^_\7t\2\2_`\7k\2\2`a\7r\2\2ab\7v\2\2bc\7\"\2\2"+
		"cd\7k\2\2de\7f\2\2ef\7?\2\2fg\7$\2\2gh\7x\2\2hi\7g\2\2ij\7t\2\2jk\7v\2"+
		"\2kl\7g\2\2lm\7z\2\2mn\7/\2\2no\7e\2\2op\7q\2\2pq\7f\2\2qr\7g\2\2rs\7"+
		"$\2\2st\7\"\2\2tu\7v\2\2uv\7{\2\2vw\7r\2\2wx\7g\2\2xy\7?\2\2yz\7$\2\2"+
		"z{\7z\2\2{|\7/\2\2|}\7u\2\2}~\7j\2\2~\177\7c\2\2\177\u0080\7f\2\2\u0080"+
		"\u0081\7g\2\2\u0081\u0082\7t\2\2\u0082\u0083\7$\2\2\u0083\u0084\7@\2\2"+
		"\u0084\f\3\2\2\2\u0085\u0086\7>\2\2\u0086\u0087\7\61\2\2\u0087\u0088\7"+
		"u\2\2\u0088\u0089\7e\2\2\u0089\u008a\7t\2\2\u008a\u008b\7k\2\2\u008b\u008c"+
		"\7r\2\2\u008c\u008d\7v\2\2\u008d\u008e\7@\2\2\u008e\16\3\2\2\2\u008f\u0090"+
		"\7>\2\2\u0090\u0091\7\61\2\2\u0091\u0092\7j\2\2\u0092\u0093\7v\2\2\u0093"+
		"\u0094\7o\2\2\u0094\u0095\7n\2\2\u0095\u0096\7@\2\2\u0096\20\3\2\2\2\u0097"+
		"\u0098\7>\2\2\u0098\u0099\7u\2\2\u0099\u009a\7e\2\2\u009a\u009b\7t\2\2"+
		"\u009b\u009c\7k\2\2\u009c\u009d\7r\2\2\u009d\u009e\7v\2\2\u009e\u009f"+
		"\7\"\2\2\u009f\u00a0\7v\2\2\u00a0\u00a1\7{\2\2\u00a1\u00a2\7r\2\2\u00a2"+
		"\u00a3\7g\2\2\u00a3\u00a4\7?\2\2\u00a4\u00a5\7$\2\2\u00a5\u00a6\7v\2\2"+
		"\u00a6\u00a7\7g\2\2\u00a7\u00a8\7z\2\2\u00a8\u00a9\7v\2\2\u00a9\u00aa"+
		"\7\61\2\2\u00aa\u00ab\7l\2\2\u00ab\u00ac\7c\2\2\u00ac\u00ad\7x\2\2\u00ad"+
		"\u00ae\7c\2\2\u00ae\u00af\7u\2\2\u00af\u00b0\7e\2\2\u00b0\u00b1\7t\2\2"+
		"\u00b1\u00b2\7k\2\2\u00b2\u00b3\7r\2\2\u00b3\u00b4\7v\2\2\u00b4\u00b5"+
		"\7$\2\2\u00b5\u00b6\7@\2\2\u00b6\22\3\2\2\2\u00b7\u00b9\t\2\2\2\u00b8"+
		"\u00b7\3\2\2\2\u00b9\u00ba\3\2\2\2\u00ba\u00b8\3\2\2\2\u00ba\u00bb\3\2"+
		"\2\2\u00bb\u00bc\3\2\2\2\u00bc\u00bd\b\n\2\2\u00bd\24\3\2\2\2\u00be\u00c0"+
		"\n\3\2\2\u00bf\u00be\3\2\2\2\u00c0\u00c1\3\2\2\2\u00c1\u00bf\3\2\2\2\u00c1"+
		"\u00c2\3\2\2\2\u00c2\26\3\2\2\2\u00c3\u00c9\t\4\2\2\u00c4\u00c6\7\17\2"+
		"\2\u00c5\u00c4\3\2\2\2\u00c5\u00c6\3\2\2\2\u00c6\u00c7\3\2\2\2\u00c7\u00c9"+
		"\7\f\2\2\u00c8\u00c3\3\2\2\2\u00c8\u00c5\3\2\2\2\u00c9\u00ca\3\2\2\2\u00ca"+
		"\u00c8\3\2\2\2\u00ca\u00cb\3\2\2\2\u00cb\30\3\2\2\2\b\2\u00ba\u00c1\u00c5"+
		"\u00c8\u00ca";
	public static final ATN _ATN =
		ATNSimulator.deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}