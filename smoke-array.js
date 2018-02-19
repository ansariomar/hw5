var smoke = [];

function setup() {
  createCanvas(400, 400);
  for (var index = 0; index < 50; index = index + 1) {
    smoke[index] = {

      x: random(185, 230),
      y: 290,
      r: 0,
      //xSpeed: random(1,3),
      ySpeed: random(1, 3)

    }

  }
}

function draw() {
  background(0);
  noStroke();

  //draw a smokestack
  fill(255);
  rect(195, height, 30, -100);

  for (var index = 0; index < 50; index = index + 1) {
    var smoking = smoke[index];


    push();
    fill(smoking.y);
    translate(smoking.x, smoking.y);
    rotate(smoking.r);
    rect(-10, -10, 20, 20);
    pop();

    // up 3 pixels
    //smoking.x -= smoking.xSpeed;
    smoking.y -= smoking.ySpeed;

    // rotate 0.05 radians ~= 2.8 degrees per frame
    smoking.r += 0.1

    // if reach past the top a bunch
    if (smoking.y < 10) {
      smoking.y = height / 1.5;

    }
  }
}
