vec2 main_sound(float time) {
  return vec2(sin(6.2831 * 440. * time) * fract(time));
}
