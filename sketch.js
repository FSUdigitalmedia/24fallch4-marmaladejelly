let speed = 3;
let y;
let x;
let rectX = ２；
let rectY = 50；

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

  push();
  translate(wi1 ```````11dth/2, height/2);
  rotate(angle);
  rectMode(CENTER);
  fill(255);
  rotate(45);
  square(rectX, rectY, 400, 20);
  pop();
    
  y += speed;
  if (y < 25 || y > height - 25) {
    speed *= -1;
  }

  rectTop      = rectY;
  rectLeft     = rectX;
  rectRight    = rectX + 400;
  circleBottom = circle + 20;

  if (circleBottom > rectTop && circle >= rectLeft && circle  <= rectRight ) {
      velocityY= -5
  }

}
