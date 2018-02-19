var circles = []

function setup() {
  createCanvas(400, 400);

  for (var index = 0; index < 100; index = index + 1) {
    circles[index] = {
      x: random(5, 395),
      y: 220,
      ySpeed: random(1, 5),
      c: color(random(255), random(255), random(255)),

      draw: function() {
        fill(this.c)
        ellipse(this.x, this.y, 10)

      }
    }
  }
}

function draw() {

  background(0);
  for (var index = 0; index < 100; index = index + 1) {
    var circle = circles[index];
    circle.draw();
    circle.y = circle.y + circle.ySpeed;
    if (circle.y > height) {
      circle.y = 100
    }
  }
  fill(225)
  ellipse(200, 100, 400, 100)
}
