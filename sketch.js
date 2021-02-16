let alpha1;
let alpha2;
let alpha3;
let epsilon1;
let epsilon2;
let epsilon3;

let a_label;
let b_label;
let c_label;
let s_label;
let r_label;
let t_label;

function preload() {
  ubuntuFont = loadFont("assets/ubuntu.ttf");
}

function setup() {
  createCanvas(600, 600, WEBGL);
  
  alpha1 = createSlider(50, 100, 50, 1);
  alpha2 = createSlider(50, 100, 50, 1);
  alpha3 = createSlider(50, 100, 50, 1);
  
  alpha1.position(30, height + 20);
  alpha2.position(30, height + 50);
  alpha3.position(30, height + 80);
  
  epsilon1 = createSlider(0.5, 4.0, 1.0, 0.1);
  epsilon2 = createSlider(0.5, 4.0, 1.0, 0.1);
  epsilon3 = createSlider(0.5, 4.0, 1.0, 0.1);
  
  epsilon1.position(30, height + 120);
  epsilon2.position(30, height + 150);
  epsilon3.position(30, height + 180);
  
  a_label = createP("A");
  b_label = createP("B");
  c_label = createP("C");
  
  s_label = createP("s");
  r_label = createP("r");
  t_label = createP("t");
  
  textFont(ubuntuFont);
}

function sgn(num) {
  if (num > 0) {
    return 1;
  } else if (num == 0) {
    return 0;
  } else {
    return -1;
  }
}

function f(omega, m) {
  sine = sin(omega);
  return sgn(sine) * pow(abs(sine), m);
}

function g(omega, m) {
  cossine = cos(omega);
  return sgn(cossine) * pow(abs(cossine), m);
}

function draw() {
  background(47);
  orbitControl();
  
  a = alpha1.value();
  b = alpha2.value();
  c = alpha3.value();
  r = epsilon1.value();
  s = epsilon2.value();
  t = epsilon3.value();
  
  stroke(255);
  strokeWeight(0.7);
  beginShape(POINTS);
  let v;
  let u;
  for (v = -PI/2; v <= PI/2; v += 0.05) {
    for (u = -PI; u <= PI; u += 0.05) {
      x = a * g(v, 2/r) * g(u, 2/r);
      y = b * g(v, 2/s) * f(u, 2/s);
      z = c * f(v, 2/t);
      
      vertex(x, y, z);
    }
  }
  endShape(CLOSE);
}
