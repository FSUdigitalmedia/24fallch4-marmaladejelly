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

  y += speed;
  if (y < 25 || y > height-25) {
    speed *= -1;
  }
}
