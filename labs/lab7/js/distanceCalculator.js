function calcDist(){
    //get all the input elements
    let x1Element = document.getElementById("inputX1")
    let y1Element = document.getElementById("inputY1")
    let x2Element = document.getElementById("inputX2")
    let y2Element = document.getElementById("inputY2")

    //take the differences of the X and Y values entered
    let xDiff = Number(x1Element.value) - Number(x2Element.value) 
    let yDiff = Number(y1Element.value) - Number(y2Element.value) 

    //calculate distance (pythag theorem)
    let dist = Math.sqrt(xDiff*xDiff + yDiff*yDiff)

    //post the result to the screen
    let result = document.getElementById("result")
    result.innerHTML = `The distance between those two points is: ${dist}`
    result.style.fontSize = "34px"
}