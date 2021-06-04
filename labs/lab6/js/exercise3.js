//set up "Player" and "Enemy" as global variables
let player
let enemy
//get element for each HP
let playerHP = document.getElementById("playerHP")
let enemyHP = document.getElementById("enemyHP")
//get where we update combat log
let combatLog = document.getElementById("combatLog")

restart()

//function called by clicking the attack button
function attack(){
    player.attack(enemy)
}

//function for when the enemy is dead
function victory(){
    combatLog.innerHTML += `<p>YOU HAVE SLAIN THE BEAST</p>`
    combatLog.innerHTML += `<button onclick="restart()">Fight Again</button>`
}

//function called by the restrt button
//also serves to set up initial game
function restart(){
    //initialize the player and enemy Objects
    player = new Player()
    enemy = new Enemy()

    //empty the combat log
    combatLog.innerHTML = ""
    //display character HP
    player.setHP()
    enemy.setHP()

    //display attack and defense 
    player.setStats()
    enemy.setStats()

}

//player object
function Player(){
    //properties for player
    //attacks 4-8 (randomized in the attack function)
    this.lowerAttack = 4
    this.upperAttack = 8
    this.attackRange = this.upperAttack - this.lowerAttack
    //hp 20-30
    this.hp = Math.floor(Math.random()*10) + 20
    //defense 1-4
    this.defense = Math.floor(Math.random() * 3)+1

    //display HP
    this.setHP = function(){
        playerHP.innerHTML = this.hp
    }

    //function for attacking
    this.attack = function(defender){
        //as long as the defender is not dead
        if (defender.hp <= 0){
            return
        }
        //randomize the damage between characters attack range
        let damage = Math.floor(Math.random() * this.attackRange) + this.lowerAttack + 1
        //check against defenders defense
        damage -= defender.defense
        //if the attack will do damage
        if (damage > 0){
            //reduce defenders hp and display it
            defender.hp -= damage
            defender.setHP()
            //give an update as to what happened if damage is done...
            combatLog.innerHTML += `<p>You attack for ${damage} damage!!</p>`
        }else {
            //if damage is not done
            combatLog.innerHTML += `<p>You Miss!</p>`
        }

        //after damage, check if defender is dead
        if (defender.hp > 0){
            //if not dead, call the defeder to attack back
            defender.attack(this)
        }else {
            //if defender IS dead, end the game
            victory()
        }
    }

    //function to draw this characters attack and defense
    this.setStats = function(){
        //get elements needing to be changed
        let attack = document.getElementById("playerAttack")
        let defense = document.getElementById("playerDefense")

        //set the text for the attack and defense stats
        attack.innerHTML = `${this.lowerAttack} - ${this.upperAttack}`
        defense.innerHTML = this.defense
    }
}

function Enemy(){
    //attacks 2-4 damage
    this.lowerAttack = 2
    this.upperAttack = 4
    this.attackRange = this.upperAttack - this.lowerAttack
    //hp 15-20
    this.hp = Math.floor(Math.random()*5) + 15
    //between 0-2
    this.defense = Math.floor(Math.random() * 2)
    this.setHP = function(){
        enemyHP.innerHTML = this.hp
    }

    //function for attacking as the enemy... same as player, execpt attacking back
    this.attack = function(defender){
        if (defender.hp <= 0){
            return
        }
        let damage = Math.floor(Math.random() * this.attackRange) + this.lowerAttack +1
        damage -= defender.defense
        if (damage > 0){
            defender.hp -= damage
            defender.setHP()
            combatLog.innerHTML += `<p>The enemy hits back for ${damage} damage!!</p>`
            return
        }else{
            combatLog.innerHTML += `<p>You dodge the enemy's attack!</p>`
            return
        }
    }


    this.setStats = function(){
        let attack = document.getElementById("enemyAttack")
        let defense = document.getElementById("enemyDefense")

        attack.innerHTML = `${this.lowerAttack} - ${this.upperAttack}`
        defense.innerHTML = this.defense
    }
}
