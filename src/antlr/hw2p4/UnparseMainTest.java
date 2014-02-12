import static org.junit.Assert.*;

import java.io.IOException;

import org.junit.Test;


public class UnparseMainTest {
	
	final String testInput1 = "./test-inputs/testInput1.html";
	final String testOutput1 = "./test-inputs/testInput1.html.out";

	@Test
	public void testMain() {
		String[] args = {testInput1, testOutput1};
		UnparseMain.main(args);
		//hand inspect testOutput1
	}

}
