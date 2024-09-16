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

  // linear
  fill(255,150,0)
  noStroke();
  circle(width/2, y, 40);
  // eased
  // input value
  // input range
  // output range
  // easing type
  // start, end, both
  
  let angle = map2(y, 0, height, 0, TWO_PI, QUADRATIC, BOTH);
  let dia = map2(y, 0, height, 50, 50, SINUSOIDAL, BOTH);


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
  rotate(45)
  square(0, 0, dia);
  pop();

/*
  if (circle1X > circle2X - circle2Width && circle1X < circle2X + circle2Width && circle1Y > circle2Y - circle2Height && circle1Y < circle2Y + circle2Height)

  // Rotate square system 1/8 turn.
  translate(width/2, height/2);
  rotate(45)
  square(0, 0, dia);
*/

  y += speed;
  if (y < 25 || y > height-25) {
    speed *= -1;
  }
}
