//basic speed variable to keep everything the same
let speed = 5
// height and witdth of canvas
let width = 800
let height = 600

//global varaible to count frames
counter = 0

//variables for location of blue ball
//start in center of screen
var blueX = width/2
var blueY = height/2
//movement speed of the blue ball
var blueSpeed = speed

//varaibles for location of yellow ball
//start in center of screen
var yellowX = width/2
var yellowY = width/2
//movement speed of yellow ball
//need vertical and horizontal speed
var yellowSpeedX = speed
var yellowSpeedY = speed

// variable for diameter of green ball
var greenSize = 1


function setup() {
  createCanvas(width, height);
}

function draw() {
    background(220);

    //call the functions of each ball
  
    myCounter()
 
    puckSlide()
  
    blueBall()
 
    yellowBall()
  
    greenBall()
}

//function for 1. COUNTER
function myCounter(){
  //prints global variable "counter" to log
  console.log(counter++)
}

//function for 2. PUCK SLIDE
function puckSlide(){
  
  //check location of mouse, 
  //if mouseX is less than middle of screen make BLUE
  if (mouseX<width/2){
    //make ball light blue
    fill(200,200,255)
  
  //if mouseX is greater than middle, make RED
  }else{
    //make ball red
    fill("red")
  }
  stroke(0)
  //draw the ball on the screen
  ellipse(mouseX,mouseY,20,20)
  
}

//function for 3. WORLD WARP
function blueBall(){
  //make ball blue
  stroke(0)
  fill("blue")
  //draw the ball
  ellipse(blueX,blueY,20,20)
  //check location of ball
  //if ball is off the left of the screen
  if(blueX > width){
    //set ball's Xloc to 0 (left of screen)
    blueX = 0
  }
  //if ball not off left of screen
  else{
    //move the ball (change ball's Xloc)
    blueX += blueSpeed
  }
    
  
  
}

//function for 4. BALL BOUNCE
function yellowBall(){
  //set up and draw ball
  stroke(0)
  fill("yellow")
  ellipse(yellowX, yellowY, 20,20)
  //---check balls horizontal position
  //if ball is off the LEFT or RIGHT of the screen
  if(yellowX < 0 || yellowX > width){
  //reverse the balls Xspeed
    yellowSpeedX *= -1
    //move the ball in X direction
    yellowX += yellowSpeedX
  }else{
    //if ball is not off the screen,
    //still move the ball in X direction
    yellowX += yellowSpeedX
  }
  
  
  //---check the balls vertical position
  //if off the top or bottom of screen
  if(yellowY < 0 || yellowY > height){
    //reverse the balls Yspeed 
    yellowSpeedY *= -1
    //move the ball in Y direction
    yellowY += yellowSpeedY
  }else{
    //if ball is not off the screen,
    //still move the ball in Y direction
    yellowY += yellowSpeedY
  }
  
  
}

//function for 5. EVER LARGER, UNTIL NOT
function greenBall(){
  //set up and draw ball
  stroke(0)
  fill("green")
  ellipse(width/2, height/2, greenSize, greenSize)
  //check size of green ball, if less than 200
  if (greenSize < 200){ 
    //increase size of green ball
    greenSize++
  }else{
    //if greater than 200
    //reset green ball size to 1
    greenSize = 1
  }
}
