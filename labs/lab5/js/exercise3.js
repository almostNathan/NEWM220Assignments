let changeDiv = document.createElement("div")

changeDiv.style.height = "100px"
changeDiv.style.width = "100px"
changeDiv.style.backgroundColor = "blue"
changeDiv.onmouseout = function(){
    changeDiv.backgroundColor = "blue"
}
changeDiv.onmouseover = function(){
    changeDiv.backgroundColor = "black"
}
document.body.appendChild(changeDiv)

function makeBlack(){
    changeDiv.backgroundColor = "black"
}

function makeBlue(){
    changeDiv.backgroundColor = "blue"
}