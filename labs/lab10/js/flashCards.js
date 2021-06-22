function showAnswer(event){
    //get answer attribute value
    let answer = event.target.getAttribute("data-answer")
    //change div to display the answer and change color
    event.target.innerHTML = answer
    event.target.style.backgroundColor = "lightgray"
}