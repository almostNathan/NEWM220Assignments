
function changeStyle(passedElement) {
    if (passedElement.style.backgroundColor == "red"){
        passedElement.style.backgroundColor = "blue"
        passedElement.style.height = "200px"
        

    }else {
        passedElement.style.backgroundColor = "red"

        passedElement.style.height = "100px"
    }
}