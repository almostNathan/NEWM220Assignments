function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  //simplyfy mouse postion for quick use
  let x = mouseX;
  let y = mouseY;
  //function that draws the ship
  drawShip(x, y);

}


function drawShip(x,y){
    //make outline thicker and red colored
    stroke("red");
    fill("red");
    //main part of ship is triangle
    triangle(x+20, y, x-20,y+10, x-20,y-10);

    stroke("black");
    strokeWeight(5);
    fill("gray");
    ellipse(x-20,y+10, 20,10);
    ellipse(x-20,y-10, 20,10);
}
