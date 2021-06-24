class Bullet{
    constructor(mousePos){
        this.width = 5
        this.height = 2.5
        this.x = mousePos.x - this.width/2
        this.y = mousePos.y - this.height/2
        this.speed = 5
    }

    draw(){
        noStroke()
        fill("black")
        rect(this.x, this.y, this.width, this.height)
    }

    move(){
        this.x += this.speed
    }

    getCorners(){
        let cornerArray = []
        cornerArray.push(createVector(this.x+this.width/2,this.y+this.height/2))
        cornerArray.push(createVector(this.x+this.width/2,this.y-this.height/2))
        cornerArray.push(createVector(this.x-this.width/2,this.y+this.height/2))
        cornerArray.push(createVector(this.x-this.width/2,this.y-this.height/2))
        return cornerArray
    }
}