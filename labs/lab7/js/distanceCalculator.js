function calcDist(){
    let x1Element = document.getElementById("inputX1")
    let y1Element = document.getElementById("inputY1")
    let x2Element = document.getElementById("inputX2")
    let y2Element = document.getElementById("inputY2")

    let xDiff = Number(x1Element.value) - Number(x2Element.value) 
    let yDiff = Number(y1Element.value) - Number(y2Element.value) 
    let dist = Math.sqrt(xDiff*xDiff + yDiff*yDiff)

    let result = document.getElementById("result")


    result.innerHTML = `The distance between those two points is: ${dist}`
    result.style.fontSize = "34px"
}