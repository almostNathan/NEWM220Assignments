//global variable for Pet object
let myPet;

//globals for html elements (probably should not all be global)
let name = document.getElementById("name")
let happinessLabel = document.getElementById("happiness")
let happinessStat = document.getElementById("happinessStat")
let happinessButton = document.getElementById("happinessButton")
let energyLabel = document.getElementById("energy")
let energyStat = document.getElementById("energyStat")
let energyButton = document.getElementById("energyButton")

//function for when happiness button is clicked
function raiseHappiness(){
    //raise the pets happiness
    myPet.raiseHappiness()
}

//function for when energy button is clicked
function raiseEnergy(){
    //raise the energy of the pet
    myPet.raiseEnergy()
}

//function to build the pet and put the names on screen
function makePet(){
    //element for user input name for the pet
    let petName = document.getElementById("petName")
    //make a pet with the name the user submitted
    myPet = new Pet(petName.value)
    //put the pets stats on the screen
    myPet.buildPet()
    //remove the user input fields
    let userInputDiv = document.getElementById("userInputDiv")
    userInputDiv.innerHTML = ""
}


//pet object
function Pet(name){
    //attributes for the pet object (name is passed in)
    this.happiness = 50
    this.energy = 50
    this.name = name

    //function to draw pet stats to screen
    this.buildPet = function(){
        name.innerHTML = this.name
        happinessLabel.innerHTML = "Happiness"
        happinessStat.innerHTML = this.happiness.toString()
        happinessButton.innerHTML = "Raise Happiness"
        energyLabel.innerHTML = "Energy"
        energyStat.innerHTML = this.energy.toString()
        energyButton.innerHTML = "Raise Energy"
    }


    //function to raise happiness of this pet
    this.raiseHappiness = function(){
        this.happiness += 5
        this.buildPet()
    }
    
    //function to raise happiness of this pet
    this.raiseEnergy = function(){
        this.energy += 5
        this.buildPet()
    }


}