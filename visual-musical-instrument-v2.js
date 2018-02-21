//https://alpha.editor.p5js.org/omarprograms/sketches/SkMO_jAIG

var freqA = 174;
var freqS = 196;
var freqD = 220;
var freqF = 246;
var freqG = 300;
var freqB = 115;


var playingA = false
var playingS = false
var playingD = false
var playingF = false
var playingG = false
var playingB = false


var oscA, oscS, oscD, oscF, oscG;

var playing = false;
var mickey = false;



function ellipseParty() {
  fill(random(0, 255));
  ellipse(random(width), random(height), random(100), random(100));
  ellipse(random(width), random(height), random(500), random(500));
}

function rectParty() {
  fill(random(0, 255));
  rect(random(width), random(height), random(100), random(100));
  rect(random(width), random(height), random(500), random(500));
}

function triangleParty() {
  fill(random(0, 255));
  triangle(random(width * 2), random(height * 2), random(200), random(200), random(200), random(200));
  triangle(random(width / 2), random(height / 2), random(500), random(500), random(500), random(500));

}


function lewittParty() {
  createCanvas(500, 500);
  noFill;
  rect(0, 0, 399, 399);
  noStroke();

  fill(random(0, 255)); //gray
  rect(35, 35, 165, 165); //top L 
  fill(random(0, 255), random(0, 255), random(0, 255)); //yellow
  rect(200, 35, 165, 165); //top R 
  fill(random(0, 255), random(0, 255), random(0, 255)); //pink
  rect(35, 200, 165, 165); //bottom L 
  fill(random(0, 255)); //blue
  rect(200, 200, 165, 165); //bottom R 
}




var img;

function preload() {
  img = loadImage('Mickey.png');
}

function setup() {


  frameRate(10);

  createCanvas(500, 500);
  backgroundColor = color(255, 0, 255);
  textAlign(CENTER);

  oscA = new p5.Oscillator();
  oscA.setType('triangle');
  oscA.freq(freqA);
  oscA.amp(0);
  oscA.start();

  oscS = new p5.Oscillator();
  oscS.setType('triangle');
  oscS.freq(freqS);
  oscS.amp(0);
  oscS.start();

  oscD = new p5.Oscillator();
  oscD.setType('triangle');
  oscD.freq(freqD);
  oscD.amp(0);
  oscD.start();

  oscF = new p5.Oscillator();
  oscF.setType('sine');
  oscF.freq(freqF);
  oscF.amp(0);
  oscF.start();

  oscG = new p5.Oscillator();
  oscG.setType('sine');
  oscG.freq(freqG);
  oscG.amp(0);
  oscG.start();
  
  oscB = new p5.Oscillator();
  oscB.setType('sine');
  oscB.freq(freqB);
  oscB.amp(0);
  oscB.start();
}

function draw() {
  background(255, 255, 0)
  textSize(45)
  text('Click once inside\n the canvas to begin.\nThen press\n A/S/D/F/G/B\n keys to play.\nClick and hold\n the mouse for fun!\n(ᵔᴥᵔ)', width / 2, 75);
  textAlign(CENTER)

  if (playingA) {
    lewittParty();

  }
  if (playingS) {
    background(100, 0, 255);
    rectParty();
  }
  if (playingD) {
    background(100, 50, 100);
    triangleParty();
  }
  if (playingF) {
    background(100, 100, 50);
    ellipseParty();
  }
  if (playingG) {
    background(0, 255, 127);
    text('The Sound \nthe Letter "G" makes', width / 2, 250);
    textSize(1)
  }
  if (playingB) {
    background(139,75,0)
    textSize(75);
    text('B is for bears\nʕ·͡ᴥ·ʔ ʕ·͡ᴥ·ʔ\nʕ·͡ᴥ·ʔ ʕ·͡ᴥ·ʔ\nʕ·͡ᴥ·ʔ ʕ·͡ᴥ·ʔ', width / 2 ,100);
    
  }
  if (mickey) {
    image(img, mouseX, mouseY);
  }
}



function keyPressed() {
  print("got key press for ", key);
  var osc;
  if (key == 'A') {
    osc = oscA;
    playingA = true
  } else if (key == 'S') {
    osc = oscS;
    playingS = true
  } else if (key == 'D') {
    osc = oscD;
    playingD = true

  } else if (key == 'F') {
    osc = oscF;
    playingF = true

  } else if (key == 'G') {
    osc = oscG;
    playingG = true

  } else if (key == 'B') {
    osc = oscB;
    playingB = true

  }
  if (osc) {
    osc.amp(0.5, 0.1);
    playing = true;

  }
}

function keyReleased() {
  print("got key release for ", key);
  var osc;
  if (key == 'A') {
    osc = oscA;
    playingA = false
  } else if (key == 'S') {
    osc = oscS;
    playingS = false
  } else if (key == 'D') {
    osc = oscD;
    playingD = false

  } else if (key == 'F') {
    osc = oscF;
    playingF = false

  } else if (key == 'G') {
    osc = oscG;
    playingG = false

  } else if (key == 'B') {
    osc = oscB;
    playingB = false
  }
  if (osc) {
    osc.amp(0, 0.5);
    playing = false;
  }
}

function mousePressed() {
  mickey = true;

}

function mouseReleased() {
  mickey = false;
}
