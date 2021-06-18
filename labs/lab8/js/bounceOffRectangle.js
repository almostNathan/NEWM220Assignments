let myCircle = new bounceCircle(200, 200)
let myRect = new bounceRect(175, 349)

let thisdiv = document.createElement("div")
thisdiv.innerHTML = "hello"
document.body.appendChild(thisdiv)
console.log("hello")

function setup(){
    createCanvas(400,400)
}

function draw(){
    background(200)

    myCircle.make()
    myCircle.move()
    myRect.make()
}

function bounceCircle(x, y){
    this.x = x
    this.y = y
    this.radius = 30

    this.speedX = 5
    this.speedY = 3
    
    this.make = function(){
        circle(this.x, this.y, this.radius)
    }

    this.move = function(){
        this.x += this.speedX
        this.y += this.speedY
        this.collision()
    }
    this.collision = function(){
        //getting points for edge of circle
        let right = this.x + this.radius
        let left = this.x - this.radius
        let top = this.y - this.radius
        let bottom = this.y + this.radius

        //collision for canvas
        if (right > 400 || left < 0){
            this.speedX *= -1
        }
        if (bottom > 400 || top < 0){
            this.speedY *= -1
        }        


        //collision for rectangle
        //dist from center of circle to bounds of rect
        if (dist(this.x, this.y, myRect.x, myRect.y) < this.radius){
            this.speedX *= -1
        }

    }
}

function bounceRect(x, y){
    this.width = 100
    this.height = 50
    this.x = x
    this.y = y

    this.make = function(){
        rect(this.x, this.y, 100, 50)
    }
}