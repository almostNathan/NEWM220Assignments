//variable for circle size
let spacing = 50
function setup() {
  createCanvas(400, 400);
  //set base fill and stroke for circles
  fill("black")
  stroke(1)
 
}

function draw() {
  background(220);
   
  //loop from 1 -> 25
  for (let i = 1; i<=25; i++){
    //if number divisible by 3 and 5 change fill blue
    if ((i)%3 == 0 && (i)%5 == 0){
      fill("blue")
    //if number divisible by 3 change fill purple
    }else if((i) %3==0){
      fill("purple")
    //if number divisible by 5 change fill green
    }else if ((i)%5 == 0){
      fill("green")
    }
    //if none, fill black
    else{fill("black")}
    
  
  //setting up creating columns for more easily interpreted visuals
  //for the current row get floor division of 5 columns
  let row = Math.floor((i-1)/5)
  //divide into 5 columns
  let col = (i-1)%5 
    
  //draw circle position based on row and column.  
  circle(col*spacing +spacing, spacing + (spacing*row), spacing/2)
  }
}