let responseElement = document.getElementById("response")
let userGuessElement = document.getElementById("userGuess")

let targetNumber = Math.floor(Math.random()*10 + 1)

function compareGuess(){
    let userGuess = userGuessElement.value

    if (userGuess == targetNumber){
        responseElement.innerHTML = "You guessed correct.\nI will think of a new number."
        targetNumber = Math.floor(Math.random()*10 + 1)
    }else if(userGuess > targetNumber){
        responseElement.innerHTML = "You guessed too high."
    }else if(userGuess < targetNumber){
        responseElement.innerHTML = "You guessed too low."
    }

    userGuessElement.value = ""
}

