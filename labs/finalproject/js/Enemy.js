class Enemy{
    constructor(yPos){
        this.height = 10
        this.width = 15
        this.x = canvas.width
        this.y = yPos - this.height/2
        this.speed = -5

        //values for vertical movement
        this.spawningY = this.y
        this.angle = 0.0
        this.sineSpeed = .05
        this.verticalDrift = 10
    }

    draw(){
        strokeWeight(1)
        fill("red")
        rect(this.x, this.y, this.width, this.height)
    }

    move(){
        this.x += this.speed
        //create vertical movement curves
        //draws enemy on a wave based on its starting position

        //this.y = this.spawningY + (sin(this.angle) * this.verticalDrift)
        //this.angle += this.sinSpeed

        //if enemy reaches left side of screen, reset its position
        if (this.x < 0){
            this.x = canvas.width
        }
    }

    isHit(bullet){
        let enemyIsHit = false
        let corners = bullet.getCorners()
        //check each corner of bullet if in the bounds of this enemy
        //for each corner(vector) in the array
        for(let i = 0; i < corners.length; i++){
            //if the corner is within the bounds of this enemy
            if (this.withinBounds(corners[i])){
                //the enemy is hit
                enemyIsHit = true
            }
        }
        //report whether or not the enemy has been hit
        return enemyIsHit
    }

    withinBounds(point){
        let isInside = false
        if(point.x >= this.x && point.x <= this.x+this.width && point.y >= this.y && point.y <= this.y+this.height){
            isInside = true
        }
        return isInside
    }
}