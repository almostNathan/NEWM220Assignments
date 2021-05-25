//space between circles*2
let offset = 15;
//starting diameter variable
let diameter = 10;
//variable for canvas size
let width = 400;
let height = 400;

function setup(){
    createCanvas(width, height);

}

function draw (){
    background(200);
    //need to reset the diameter after draw is called;
    diameter = 10;

    //while the current diameter is less than the size of the canvas
    while(diameter <= width){
        //drawing from inside to outside need to make circles empty
        noFill()
        //draw a circle at the center
        ellipse(width/2, height/2, diameter, diameter)
        //make the draw diamater bigger
        diameter += offset;
    }
}