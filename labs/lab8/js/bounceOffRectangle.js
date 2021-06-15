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
    myRect.make()
}

function bounceCircle(x, y){
    this.x = x
    this.y = y
    
    this.make = function(){
        circle(this.x, this.y, 50)
    }
}

function bounceRect(x, y){
    this.x = x
    this.y = y

    this.make = function(){
        rect(this.x, this.y, 50, 100)
    }
}