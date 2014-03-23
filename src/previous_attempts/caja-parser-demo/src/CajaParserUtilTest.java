import com.google.caja.parser.js.Block;
import com.google.caja.parser.js.Declaration;
import com.tobytobkin.CajaParserUtil;
import org.junit.Test;

import java.util.List;

/**
 * Created by toby on 3/22/14.
 */
public class CajaParserUtilTest {

    String simpleJsProgram = "var i = 1 + 1;\n" +
            "var j = 2";

    @Test
    public void testJsAstFromString() throws Exception {
        CajaParserUtil cpu = new CajaParserUtil();
        Block topLevelBlock = cpu.jsAstFromString(simpleJsProgram);

        List children = topLevelBlock.children();
        Declaration decl1 = (Declaration) children.get(0);
        Declaration decl2 = (Declaration) children.get(1);

        System.out.println("The two children of this top level block are:");
        System.out.println(decl1);
        System.out.println(decl2);
        System.out.println();
    }

}
