let lineXone = 0;
let lineYone = 0;

function setup() {
  createCanvas(600, 600);
}

function rain() {
  line(lineXone, lineYone, lineXone + 45 , lineYone - 35);
  lineXone = random(0,width);
  lineYone = random(0,height);
}

function boxAndCircle() {
  rect(150,150,300,300)
  if (mouseIsPressed === true) {
    fill("#000000");
    stroke("#3D5131");
    strokeWeight(5);
  } else {
    fill("#FFFFFF");
    stroke("#D4F8CB");
    strokeWeight(5);
  }
  circle(mouseX, mouseY, 100)
  textSize(75)
  text("🌸", mouseX-52, mouseY+24);
}

function draw() {
  background("#4CAF50");
  boxAndCircle();
  rain();
  
}
