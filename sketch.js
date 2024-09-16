let speed = 3;
let y;
let x;

function setup() {
  createCanvas(windowWidth, windowHeight);

  y = height/2;
  x = width/2;
}

function draw() {
  background(50);

  fill(255,150,0)
  noStroke();
  circle(width/2, y, 40);
  // eased
  // input value
  // input range
  // output range
  // easing type
  // start, end, both
  let easedY = map2(y, 0, height, 0, height, SINUSOIDAL, BOTH)
  let easedX = map2(x, 0, width, 0, width, SINUSOIDAL, BOTH)
  
  fill(0,150,255);
  circle(width-width/4, easedY, 40);
  let angle = map2(y, 0, height, 0, TWO_PI, QUADRATIC, BOTH);
  let dia = map2(y, 0, height, 50, 150, SINUSOIDAL, BOTH);


  /*// Enable orbiting with the mouse.
  // Style the box.
  // Draw the box.
  orbitControl();
  normalMaterial();
  rectMode(CENTER);
  box(30, 50);
  */

  push();
  translate(width/2, height/2);
  rotate(angle);
  rectMode(CENTER);
  fill(255);
  
  pop();


  y += speed;
  if (y < 25 || y > height-25) {
    speed *= -1;
  }
}
