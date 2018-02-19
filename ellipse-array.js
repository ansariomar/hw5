var circles = [];

function setup() {
  createCanvas(400, 400);
  colorMode(HSB)
  frameRate(3) // used to prevent epileptic seizure

  for (var index = 0; index < 50; index = index + 1) {
    circles[index] = {

      x: random(0,400),
      y: random(0,400),
      x1: (0,0),
      y1: (0,0),
      d: random(0, 400),
      c: color(random(0, 255), random(0, 255), random(0, 255)),
      
    }
  }
}


function draw() {
  background(255);
  noStroke();

  for (var index = 0; index < 50; index = index + 1) {


    var circle = circles[index];


    // draw ellipse
    fill(circle.c);
    ellipse(circle.x, circle.y, circle.d);
    ellipse(circle.x1, circle.y1, circle.d);
    



    // 90% of the time black
    if (random() < 0.9) {
      // random diameter between 2 and 50
      circle.d = random(2, 50);
      circle.c = 'black'

    }
		// 10% of the tim red
    if (random() < 0.1) {
      // random diameter between 100 and 200
      circle.d = random(100, 200);
      circle.c = 'red'

    }
    // 5% of the time blue
    if (random() < .05) {
      // random diameter between 300 and 350
      circle.d = random(300, 350);
      circle.c = 'blue'
    }
    
    // 20% of the time white
    if (random() < .2) {
      // random diameter between 10 and 100
      circle.d = random (50,100);
      circle.c = color(random(0,255),random(0,255));
    }
    // 20% of the time white
    if (random() < .2) {
      // random diameter between 10 and 100
      circle.d = random (50,100);
      circle.c = color(random(0,255),random(0,255));
    }
  }
}
