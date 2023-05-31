function preload(){

}
function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    
}

function draw(){
    image(video,0,0,300,300);

    fill(0,128,0);
    stroke(0,128,0);
    circle(20,20,50);

}

