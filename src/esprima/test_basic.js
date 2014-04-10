function main(){
	var program, matLoc, intLoc, buff;
	var a_Position;
	program = gl.createProgram();
        gl.attachShader(program, vs);
        gl.attachShader(program, fs);
        gl.linkProgram(program);
	matLoc = gl.getUniformLocation(program, "broken_inverseTransposeModelT");
	intLoc = gl.getUniformLocation(program, "shadow");
	a_Position = gl.getAttribLocation(program, 'position');
	buff = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, buff);
}