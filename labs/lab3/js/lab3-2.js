//dimentions of squares
let height = 40;
let width = 40;

function setup(){
    createCanvas(400, 400);
    //stroke and fill for all squares
    stroke(1)
    fill("red")
}

function draw (){
    background(200);

    //loop 4 times
    for (let i = 0; i < 4; i++){
        //loop # of times = to current loopPosition
        for (let j = 0; j<=i; j++){
            rect(width*j, height*i, width, height)
        }
    }
}