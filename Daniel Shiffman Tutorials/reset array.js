var words = ["rainbow", "heart", "purple", "friendship", "love"];

var index = 0;

var nums = [100, 25, 46, 72];

var num = 23;

function setup() {
	createCanvas(400,400);
}

function draw() {
	background (0);
	
	fill(255);
	textSize(32);
	text(words[index], 12, 200)
	}

function mousePressed() {
	index = index + 1;
  
  if (index == words.length) {
    index = 0;
  }
}
