//generate player
let player = new Player()
//array for bullets on screen
let playerBullets = []
//array for enemies on screen
let enemies = []

//time tracker
let time = 0
//frame tracker
let frame = 1

function setup(){
    createCanvas(800,400)
}

function draw(){
    background(200)
    //time tracker, 60 frames = 1 "second" 
    if (frame%60 == 0){
        time++
    }

    //spawn enemies every 5 seconds
    if (time%5 == 0 && frame%60 == 0){
        spawnEnemies(5)
    }
    //draw and move enemies
    for(let i = enemies.length-1; i>=0; i--){
        let currentEnemy = enemies[i]
        currentEnemy.draw()
        currentEnemy.move()
    }

    //draw and move player bullets
    for(let i = playerBullets.length -1; i >= 0; i--){
        let currentBullet = playerBullets[i]
        currentBullet.draw()
        currentBullet.move()
        //when bullet leaves screen remove from array
        if (currentBullet.x > canvas.width){
            playerBullets.splice(i, 1)
        }else{
            //for each enemy
            for(let j=enemies.length-1; j>=0; j--){
                let currentEnemy = enemies[j]
                //check if bullet hits enemy
                if (currentEnemy.isHit(currentBullet)){
                    //remove the bullet and the enemy
                    playerBullets.splice(i,1)
                    enemies.splice(j,1)
                }
            }
        }
    }


    //get mouse position
    let mousePos = createVector(mouseX, mouseY)
    //draw player ship at mouse position
    player.draw(mousePos)
    
    frame++
}

function mouseClicked(){
    //get mousePosition
    let mousePos = createVector(mouseX, mouseY)
    //if player is not at their bullet limit
    if (playerBullets.length < player.numOfBullets){
        //add bullet to array to be drawn
        playerBullets.push(new Bullet(mousePos))
    }
}

function spawnEnemies(numOfEnemies){
    //spawn enemies equally across the screen
    //divide screen into sections
    let enemySeperation = canvas.height/(numOfEnemies+1)
    //spawn enemy at each section
    for (let i = 1; i <= numOfEnemies; i++){
        enemies.push(new Enemy(enemySeperation*i))
    }
}