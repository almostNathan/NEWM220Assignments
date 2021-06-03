let width = 400
let height = 400
let drips = []
let frame = 0
function setup(){
    createCanvas(width, height);
}

function draw() {
    background(200);

    if (frame %10 == 0){

        drips.push(new Drip())
    }


    
        for (let i = (drips.length)-1; i >= 0; i--){


        drips[i].make()
        drips[i].move()

        if(drips[i].y > height){
            drips.splice(i,1)
        }
    }

    frame++;

}