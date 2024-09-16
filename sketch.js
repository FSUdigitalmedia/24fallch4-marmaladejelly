let speed = 3;
let y;

function setup() {
  createCanvas(windowWidth, windowHeight);

  y = height/2;

}

function draw() {
  background(50);

  fill(255,150,0)
  noStroke();
  circle(width/2, y, 40);

  // eased
  // input value
  // inout range
  // output range
  // easing type
  // start, end, both
  let easedY = map2(y, 0, height, 0, height, SINUSOIDAL, BOTH)
  fill(0,150,255);
  circle(width-width/4, easedY, 40);

  y += speed;
  if (y < 25 || y > height-25) {
    speed *= -1;
  }
}
