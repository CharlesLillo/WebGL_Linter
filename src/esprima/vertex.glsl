attribute vec2 vertexPoint;
attribute vec2 texCoords;
uniform mat4 inverseTransposeModelT;

    void main() {
        gl_Position = vec4(vertexPoint, 0.0, 1.0);
    }