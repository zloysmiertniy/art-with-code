function setup() {
  createCanvas(640, 480);
}

function draw() {
  background(0)
  text(mouseX + ", " + mouseY, 50, 50)

  fill(204);
  triangle(127, 0, 76, 0, 183, 0);
  
  fill(102);
  rect(250, 0, 112, 0);
  
  fill(204);
  quad(470, 0, 547, 0, 592, 0, 442, 0);
  
  fill(255);
  ellipse(134, 0, 116, 0);
  
  fill(204);
  triangle(262, 238, 309, 312, 372, 242);
  
  fill(255);
  arc(518, 279, 0, 100, PI / 4, TWO_PI - PI / 4);
}