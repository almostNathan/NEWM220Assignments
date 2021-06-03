function Drip() {
    this.x = Math.random() * width;
    this.y = 0;
    this.diameter = 5;
    this.speed = 5

    this.move = function() {
        this.y += this.speed;
    }

    this.make = function() {
        stroke(3)
        fill("blue")
        ellipse(this.x, this.y, this.diameter, this.diameter);
    }
}