//When button is clicked
function calcAvg(){
	//Get value from input element
    let inputElement = document.getElementById("userInput")
    let userInput = inputElement.value
	//Split CSV’s into array
    let inputArray = userInput.split(",")
	//Make place to keep “sum”
    let sum = 0
	//For each item in this array
    for (num of inputArray){
		//Convert to number
		//Add this number to the “sum”
        sum += Number(num)
    }
	//Calculate average of input numbers
    let avg = sum / inputArray.length
	//Get the outputDiv
    let outputDiv = document.getElementById("outputDiv")
	//Tell user, in outputDiv, total sum and average
    outputDiv.innerHTML = `The sum of the numbers is: ${sum} \nThe average of the numbers is: ${avg}`
	//Clear input field
    inputElement.value = ""
	

}