//do 100 times
for (i = 0; i<100; i++){
    //make div element
    let divSquare = document.createElement("div")

    //setting random hue values to use later
    let redValue = Math.random()*255
    let greenValue = Math.random()*255
    let blueValue = Math.random()*255


    //make h/w 20
    divSquare.style.height = "20px"
    divSquare.style.width = "20px"
    //set float left
    divSquare.style.float = "left"
    //set color TODO make random
    divSquare.style.backgroundColor = `rgb(${redValue},${greenValue}, ${blueValue})`

    //append div to body
    document.body.appendChild(divSquare)
}