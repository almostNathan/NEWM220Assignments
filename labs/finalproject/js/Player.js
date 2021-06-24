class Player {
    constructor(){
        this.numOfBullets = 3;
    }

    draw(mousePos){
        //make outline thicker and red colored
        strokeWeight(1)
        stroke("black")
        fill("green");
        //main part of ship is triangle
        triangle(mousePos.x+20, mousePos.y, mousePos.x-20,mousePos.y+10, mousePos.x-20,mousePos.y-10);

        stroke("black");
        strokeWeight(5);
        fill("gray");
        ellipse(mousePos.x-20,mousePos.y+10, 20,10);
        ellipse(mousePos.x-20,mousePos.y-10, 20,10) 
    }

}