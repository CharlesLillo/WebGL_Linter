function main(){
        gl.bufferData(
    gl.ARRAY_BUFFER, 
    new Float32Array([
        -1.0, -1.0, 
         1.0, -1.0, 
        -1.0,  1.0, 
        -1.0,  1.0, 
         1.0, -1.0, 
         1.0,  1.0]), 
    gl.STATIC_DRAW);
}