//array for drop objects
let drops = []
//global frame variable
let frame = 0


//pool volume
let poolVol = 0
let poolDepth = 0

let canvasHeight = 400
let canvasWidth = 400
function setup(){
    createCanvas(canvasWidth, canvasHeight)
}

function draw(){
    background(200)

    //if frame is divisible by 10
    if (frame%10 ==0){
        //make a drop
        drops.push(new Drop(Math.random()*width, 0))
    }
    //for each drop
    for(let i = drops.length-1; i>=0; i--){
        let drop = drops[i];
        //draw the drop
        drop.make()
        //move the drop
        drop.move()
        
        //remove drip if at bottom of screen
        if (drop.y > height){
            let dropToAdd = drops.splice(i,1)

            
            //add dropVolume to poolVol
            let radius = dropToAdd[0].diameter/2

            poolVol += (PI * pow(radius, 2))
            poolDepth = Math.floor(poolVol/width)

            console.log(poolVol)
        }


    }


    

    noStroke()
    fill("blue")
    rect(0, canvasHeight-poolDepth, canvasWidth, poolDepth)


    frame ++
}





function Drop(x, y) {
    //x coordinate
    this.x = x
    //y coordinate
    this.y = y
    //falling speed
    this.speed = 5

    //size
    this.diameter = 10

    //move function
    this.move = function(){
        this.y += this.speed
    }

    //draw function
    this.make = function(){
        noStroke()
        fill("blue")
        circle(this.x, this.y, this.diameter)
    }
}
