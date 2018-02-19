var x = []
var y = []

function setup() {
  createCanvas(400, 400);
  
  for (var i = 0; i < 1000; i = i + 1) {
    x[i] = random(0, width);
    y[i] = random(0, height);
  }
}

function draw() {
  background(255);
  
  fill(0);
  for (var i = 0; i < 1000; i = i+1) {
    ellipse(x[i], y[i], 10);
  }
}
