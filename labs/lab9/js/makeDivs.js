//Global object array
let objects = [
 { color: "#FF0000", height: 100, width: 300 },
 { color: "#FFFF00", height: 200, width: 200 },
 { color: "#ff0000", height: 300, width: 100 },
]
//For each item in “objects” 
for (styleObject of objects){
	//Make a div element
    let thisDiv = document.createElement("div")
	//Add div to body
    document.body.appendChild(thisDiv)
	//Set div color to current object value
    thisDiv.style.backgroundColor = styleObject.color
    //convert values to String and add px to make valid inputs for style
	//Set div height to current object value
    thisDiv.style.height = String(styleObject.height)+ "px"
	//Set div width to current object value
    thisDiv.style.width = String(styleObject.width) +"px"
}
