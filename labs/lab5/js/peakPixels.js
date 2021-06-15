//global size variable
let size = 100

//get the div element
let clickableDiv = document.getElementById("clickableDiv")

//set starting size
clickableDiv.style.height = `${size}px`;
clickableDiv.style.width = `${size}px`; 

//make background green
clickableDiv.style.backgroundColor = "green";

//when div is clicked
function makeBigger(){

    //increase the "size" H/W
    size *= 1.1

    //set new "size" H/W
    clickableDiv.style.height = `${size}px`;
    clickableDiv.style.width = `${size}px`; 

}