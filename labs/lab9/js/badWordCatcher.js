let badWords = ["clear", "water", "tires"]

function containsBadWords(){
    //Get user input
    let userInput = document.getElementById("userInput").value
    //Split user input into words (“ “)
    let inputArray = userInput.split(" ")
    console.log(inputArray)
    //For each bad word
    for(badWord of badWords){
        //If word is “included” in userInput
        if (inputArray.includes(badWord)){
            //Find all bad words -> userInput
            findBadWords(inputArray)
            return
        }else{
            //If not tell user no bad words were found
            let outputDiv = document.getElementById("outputDiv")
            outputDiv.innerHTML = "Good Job! No bad words were found."
        }
    }
}

function findBadWords(inputArray){
    //Make total bad word counter
    let numBadWords = 0
	//Make counterArray(numbers) to keep track of bad words
    let badWordCounter = []
    //initialize # of values = number in badword array
	//(each index maps to a word in the “bad word” array)
    for (let i = 0; i < badWords.length; i++){
        badWordCounter[i] = 0
    }
	//For each word in userInput
    for (word of inputArray){
		//Compare word to each word in “bad word” array
        for (let i = 0; i < badWords.length; i++){
            //If match is found
            if (badWords[i] == word){
                //Increment counterArray at same index as bad word in its array
                badWordCounter[i]++
                //Increment total badWordCounter
                numBadWords++
            }
        }
    }
	//Tell user total # of bad words and how many of each were found
    let outputDiv = document.getElementById("outputDiv")
    outputDiv.textContent = `Tsk, tsk, tsk.  You used ${numBadWords} bad words.\n`
    for(let i = 0; i < badWords.length; i++){
        //line breaks
        outputDiv.appendChild(document.createElement("br"))
        outputDiv.append(`${badWords[i]} was found: ${badWordCounter[i]} times.\n`)
    }
		
	



}