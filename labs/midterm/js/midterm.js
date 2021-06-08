//circle array
var circs = [100,100,20,300,200,20]

//”frame” variable
var frame = 0

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  //for every 3rd element in the array
  for(i=0; i<circs.length; i+=3){
    //draw circle at (0,1,2)
    circle(circs[i], circs[i+1], circs[i+2])
    //increase (2) by .1
    circs[i+2] += .1
  }
  
  //if frame is divisible by 30
  if (frame % 30 == 0){
    //push -> circle array {mouseX, mouseY, 20}
    circs.push(mouseX)
    circs.push(mouseY)
    circs.push(20)
  }

  frame++
}
