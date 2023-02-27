NoseX = 0;
NoseY = 0;
dif = 0;
rw = 0;
lw = 0;
function setup() {
    MS = loadImage('https://i.postimg.cc/vTtty6dN/OIP-4.jpg')
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 550);
    canvas.position(560,150);
    
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded() {
    console.log("poseNet Is Initialized");
}
function gotPoses(results) {
    if(results.length > 0) {
        console.log(results);
        NoseX = results[0].pose.nose.x;
        NoseY = results[0].pose.nose.y;
        lw = results[0].pose.leftWrist.x;
        rw = results[0].pose.rightWrist.x;
        dif = floor(lw - rw);
}
}
function draw() {
    background('#969A97');
    fill('#F90093');
    stroke('#F90093');
    image(MS,NoseX,NoseY,lw,rw);
    //document.getElementById("square_size").innerHTML = "width and height of a square will be =" + dif +"px";
}