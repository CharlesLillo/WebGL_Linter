function main(){
	var program, matLoc, intLoc;
	var a_Position;
	program = gl.createProgram();
        gl.attachShader(program, vs);
        gl.attachShader(program, fs);
        gl.linkProgram(program);
	matLoc = gl.getUniformLocation(program, "broken_inverseTransposeModelT");
	intLoc = gl.getUniformLocation(program, "shadow");
	a_Position = gl.getAttribLocation(program, 'position');
}