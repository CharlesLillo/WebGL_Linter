import com.google.caja.lexer.*;
import com.google.caja.parser.ParseTreeNode;
import com.google.caja.parser.js.Block;
import com.google.caja.parser.js.Parser;
import com.google.caja.reporting.EchoingMessageQueue;
import com.google.caja.reporting.MessageContext;
import com.google.caja.reporting.MessageQueue;
import com.google.caja.util.Join;

import java.io.OutputStreamWriter;
import java.io.PrintWriter;
import java.io.StringReader;
import java.net.URI;


/**
 * Created by toby on 3/22/14.
 */
public class CajaParserUtil {

    InputSource is;
    MessageContext mc;
    MessageQueue mq;

    /**
     * Returns the top level node to an AST representing the JavaScript program
     * passed as String jsProgram.
     * @param jsProgram a JavaScript program, represented as a String
     * @return the AST node representing the top-level block of the JavaScript program
     * @throws ParseException
     */
    public Block jsAstFromString(String jsProgram) throws ParseException {
        Block topLevelBlock = null;
        JsLexer lex = new JsLexer(fromString(jsProgram));
        JsTokenQueue tq = new JsTokenQueue(lex, is);
        ParseTreeNode node = new Parser(tq, mq).parse();
        tq.expectEmpty();

        return topLevelBlock;
    }

    protected void setUp() throws Exception {
        this.is = new InputSource(URI.create("http://example.org/"));
        this.mc = new MessageContext();
        mc.addInputSource(is);
        this.mq = createTestMessageQueue(this.mc);
    }

    public static MessageQueue createTestMessageQueue(MessageContext mc) {
        // Tests can be run with
        //     ant -Djunit.verbose=true runtests
        // to dump stacktraces with messages in the log.
        boolean verbose = "true".equals(System.getProperty("junit.verbose"));
        return new EchoingMessageQueue(
                new PrintWriter(new OutputStreamWriter(System.err)), mc, verbose);
    }

    protected CharProducer fromString(String... content) {
        return fromString(Join.join("\n", content), is);
    }

    protected CharProducer fromString(String content, InputSource is) {
        this.mc.addInputSource(is);
        return CharProducer.Factory.create(new StringReader(content), is);
    }

    protected CharProducer fromString(String content, FilePosition pos) {
        this.mc.addInputSource(is);
        return CharProducer.Factory.create(new StringReader(content), pos);
    }
}
