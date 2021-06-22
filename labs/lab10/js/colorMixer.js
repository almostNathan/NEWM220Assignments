let colorDisplay = document.getElementById("colorDisplay")
let rgbDist = document.getElementById("rgbDist")

let colorRed = 0
let colorGreen = 0
let colorBlue = 0

function changeColor(event){
    let color = event.target.getAttribute("data-color")
    let amount = event.target.getAttribute("data-value")

    switch (color){
        case "red":
            colorRed += Number(amount);
            colorRed = checkMax(colorRed)
            break;
        case "green":
            colorGreen += Number(amount);
            colorGreen = checkMax(colorGreen)
            break;
        case "blue":
            colorBlue += Number(amount);
            colorBlue = checkMax(colorBlue)
            break;
    }

    colorDisplay.style.backgroundColor = `rgb(${colorRed}, ${colorGreen}, ${colorBlue})`
    rgbDist.innerHTML= `current color: rgb(${colorRed}, ${colorGreen}, ${colorBlue})`
    
}


function checkMax(color){
    if (color > 255){
        return 0
    }
    else{
        return color
    }
}