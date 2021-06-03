//array of bricks
let bricks = []

function setup(){
    createCanvas(400,400)
}

function draw(){
    background(200)

    //for each brick in array
    for (let i=bricks.length-1; i >=0; i--){
        let brick = bricks[i]
        //draw brick
        brick.make()
        //move brick
        brick.move()
    
    }

    //start deleting bricks after 20 on screen
    if (bricks.length > 20){
        bricks.shift();
    }
    



}

function mouseClicked(){
    //when mouse is clicked add new brick to array
    bricks.push(new Brick(mouseX, mouseY))
}

//brick object
function Brick(x, y){
    //x location
    //y location
    this.x = x
    this.y = y
    //width
    //height
    this.width = 20
    this.height = 10
    //speed (5)
    this.speed = 5

    //draw function
    this.make = function(){
        noStroke()
        fill("red")
        //draw rect centered on mouse
        //offset by half width and half height to center
        rect(this.x-(this.width/2), this.y-(this.height/2), this.width, this.height)
    }

    //move function
    this.move = function(){
        if (this.y + (this.height/2) < height){
            this.y += this.speed
        }
    }
}