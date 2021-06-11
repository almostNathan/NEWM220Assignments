//get user input elements
let userGuessElement = document.getElementById("userGuess")

//get response area element
let responseElement = document.getElementById("response")

//generate random number
let targetNumber = Math.floor(Math.random()*10 + 1)

//when button clicked
function compareGuess(){
    //get users guess
    let userGuess = userGuessElement.value

    //if they are right
    if (userGuess == targetNumber){
        //tell them they are right and make new number
        responseElement.innerHTML = "You guessed correct.\nI will think of a new number."
        targetNumber = Math.floor(Math.random()*10 + 1)
    //if they are too high tell them
    }else if(userGuess > targetNumber){
        responseElement.innerHTML = "You guessed too high."
    //if they are too low tell them
    }else if(userGuess < targetNumber){
        responseElement.innerHTML = "You guessed too low."
    }

    //regardless clear the input area
    userGuessElement.value = ""
}

