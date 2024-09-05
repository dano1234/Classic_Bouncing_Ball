var xLoc;
var yLoc;
var directionX;
var directionY;

function setup() {
  createCanvas(400, 400);
  xLoc = 0;
  yLoc = 100;
  directionX = 5;
  directionY = 5;
}

function draw() {
  background(255);

  xLoc = xLoc + directionX;
  if (xLoc < 0 || xLoc > width) {
    directionX = -directionX
  }
  yLoc = yLoc + directionY;
  if (yLoc < 0 || yLoc > height) {
    directionY = -directionY
  }
  fill(255, 0, 255);
  ellipse(xLoc, yLoc, 20, 20);


}