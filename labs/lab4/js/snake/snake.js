//array of sections
let snake = []

function setup(){
    createCanvas(400,400)
}

function draw(){
    background(200)



    //for each section in snake
    for(let i = snake.length-1; i>=0; i--){
        //draw section
        snake[i].make()
    }



}

//only adds sections when mouse is moved
function mouseMoved(){
    //add section to array each frame
    snake.push(new Section(mouseX, mouseY))
    //if length of snake > 10 remove last element
    if(snake.length > 10){
        snake.shift()
    }
}

function Section(x, y){
    //x coordinate
    //y coordinate
    this.x = x
    this.y = y

    //makes random shade for each section
    this.shade = Math.random() * 255

    //draw function
    this.make = function() {
        fill(this.shade)
        circle(this.x, this.y, 10)
    }
}