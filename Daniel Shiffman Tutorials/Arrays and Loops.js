
var nums = [100, 25, 50, 75];



function setup() {
  createCanvas(500, 400);
}

function draw() {
  background(0);
  
  for (var i=0; i<4;i++){
    stroke('grey');
    strokeWeight(10);
    fill('white');
  
    ellipse(i*100+100, 200, nums[i], nums[i]);
    
  }

  //ellipse(100, 200, nums[0], nums[0]);
  //ellipse(200, 200, nums[1], nums[1]);
  //ellipse(300, 200, nums[2], nums[2]);
  //ellipse(400, 200, nums[3], nums[3]);


for (var i=0; i<4;i++) {
  print(i);

}}
