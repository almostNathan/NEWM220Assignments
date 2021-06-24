class Player {
    constructor(){
        this.numOfBullets = 3;
        this.heightFromMouse = 10
        this.widthFromMouse = 20
        this.center
    }

    draw(mousePos){

        this.center = mousePos
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

    hasBeenHitBy(enemy){
        
        let enemyCorners = enemy.getCorners()

        for (corner of enemyCorners){
            if (corner.x > this.center.x-this.widthFromMouse && corner.x < this.center.x + this.widthFromMouse && corner.y > this.center.y - this.heightFromMouse && corner.y < this.center.y + this.heightFromMouse){

            }
        }
    }
}