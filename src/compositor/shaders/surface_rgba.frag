#version 440

layout(location = 0) in vec2 v_texcoord;
layout(location = 0) out vec4 fragColor;

layout(std140, binding = 0) uniform buf {
    mat4 qt_Matrix;
    float qt_Opacity;
};

layout(binding = 1) uniform sampler2D tex0;

void main()
{
    fragColor = qt_Opacity * texture(tex0, v_texcoord);
}
