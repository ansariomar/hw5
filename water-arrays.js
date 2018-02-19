var x = [];
var y = [];


function setup() {
  createCanvas(400, 400);
  colorMode(HSB)

  for (var i = 0; i < 100; i = i + 1) {
    x[i] = 210;
    y[i] = 230;
  }
}

function draw() {
  background(0);
  noStroke();

  // draw pipe
  rect(0, 200, 230, 30);
  rect(190, 220, 40, 30);



  // draw drip


  for (var i = 0; i < 100; i = i + 20) {
    ellipse(x[i], y[i], 25);
    y[i] = y[i] + random(1,10);

    if (y[i] > height) {
      y[i] = 230;
     
    }
  }
}
