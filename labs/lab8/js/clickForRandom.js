//global array of colors
let colors = ["blue", "purple", "red", "orange"]
//global circle object
let centerCircle = new clickableCircle(200,200)


function setup(){
    createCanvas(400,400)
}

function draw(){
    background(200)

    //draw the circle
    centerCircle.make()

}

//circle object
function clickableCircle(x, y){
    //coords to draw circle
    this.x = x
    this.y = y
    //starting size of circle
    this.radius = 100
    //pick random color for circle
    this.fill = colors[Math.floor(Math.random() * colors.length)]

    //draw function
    this.make = function(){
        //set the fill to the current objects fill variable
        fill(this.fill)
        //draw the circle
        circle(this.x, this.y, this.radius)
    }

    //function for when circle is clicked
    this.circleClicked = function(){

        //if clicked within the bounds of the circle
        if (dist(mouseX, mouseY, this.x, this.y) < this.radius){
            //change the color of the circle
            this.fill = colors[Math.floor(Math.random() * colors.length)]
            //change the radius of the circle
            this.radius = Math.random() *50 + 50
        }
    }
}

//when the mouse is clicked
function mouseClicked(){
    //find out if within bounds of circle
    centerCircle.circleClicked()
}