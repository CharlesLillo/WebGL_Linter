attribute vec2 position;
attribute vec2 texCoords;
uniform mat4 inverseTransposeModelT;
uniform int shadow;

    void main() {
        gl_Position = vec4(vertexPoint, 0.0, 1.0);
    }