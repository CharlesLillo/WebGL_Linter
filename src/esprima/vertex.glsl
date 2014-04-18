attribute vec2 position;
attribute vec2 texCoords;
uniform int shadow;
uniform float scale;
uniform vec2 findings;
uniform mat4 inverseTransposeModelT;
void main()
{
    gl_Position = vec4(vertexPoint, 0.0, 1.0);
}