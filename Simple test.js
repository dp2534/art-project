function setup() {
    createCanvas(600, 600);
  }

var xi = 300
var yi = 300
var xf = 600
var yf = 0
var speed = 50
var m = 1
var dist_increment = 0

//sample
//let cords = [x,xi,y,yi]
function draw() {
    background(0,0,0);

    /*
    stroke(0,50,255,75)
    strokeWeight(10)
    fill(0,0,0,0)
    circle(xi,yi,50)
    circle(xi,yi,100)
    */

    for(i=xi; i <= xf; i = i+1) {
        
        if (dist_increment == 50) {
            stroke(0,50,255,75)
            strokeWeight(10)
            fill(0,0,0,0)
            circle(xi,yi,(i-xi)*2)
            dist_increment = 0
        }

        //why is this continuous
    //    dist_increment += 1

    }

}

/* //console test
dist_increment = 0
for(i=xi; i <= xf; i = i+1) {
    
    console.log(i, xi, dist_increment) //for testing
    if (dist_increment == 50) {
        console.log('circle')
        dist_increment = 0
    }

    dist_increment += 1
}
*/

//console.log(cords)