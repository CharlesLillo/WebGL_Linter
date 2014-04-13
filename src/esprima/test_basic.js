function main(){
	var program, matLoc, intLoc, buff, location, frame;

	var array1iv = new Array(1);
	var array2iv = new Array(1, 2);
	var array3iv = new Array(1, 2, 3);
	var array4iv = new Array(1, 2, 3, 4);
	var array1fv = new Array(1.0);
	var array2fv = new Array(1.0, 2.0);
	var array3fv = new Array(1.0, 2.0, 3.0);
	var array4fv = new Array(1.0, 2.0, 3.0, 4.0);

	var a_Position;
	program = gl.createProgram();
        gl.attachShader(program, vs);
        gl.attachShader(program, fs);
        gl.linkProgram(program);

	matLoc = gl.getUniformLocation(program, "inverseTransposeModelT");
	intLoc = gl.getUniformLocation(program, "shadow");
	vec2Loc = gl.getUniformLocation(program, "fries");
	vec3Loc = gl.getUniformLocation(program, "soda");
	floatLoc = gl.getUniformLocation(program, "scale");
	a_Position = gl.getAttribLocation(program, 'position');
	frame = gl.createFramebuffer();
	gl.bindFramebuffer(program, frame);
	buff = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, buff);
	gl.uniform1i(intLoc, 1);
	gl.uniform2i(vec2Loc, 1, 2);
	gl.uniform3i(vec3Loc, 1, 2, 3);
	gl.uniform4i(matLoc, 1, 2, 3, 4);
	gl.uniform1f(floatLoc, 3.0);
	gl.uniform2f(vec2Loc, 1.0, 2.0);
	gl.uniform3f(vec3Loc, 1.0, 2.0, 3.0);
	gl.uniform4f(matLoc, 1.0, 2.0, 3.0, 4.0);
	gl.uniform1iv(intLoc, array1iv);
	gl.uniform2iv(vec2Loc, array2iv);
	gl.uniform3iv(vec3Loc, array3iv);
	gl.uniform4iv(matLoc, array4iv);
	gl.uniform1fv(floatLoc, array1fv);
	gl.uniform2fv(vec2Loc, array2fv);
	gl.uniform3fv(vec3Loc, array3fv);
	gl.uniform4fv(matLoc, array4fv);
}