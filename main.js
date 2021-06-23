noseX=0;noseY=0;
function preload(){
    clown_nose=loadImage('https://i.postimg.cc/x83t8mRh/icons8-english-mustache-100.png');

    
}
function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
    
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        noseX=results[0].pose.nose.x - 25;
        noseY=results[0].pose.nose.y;
        console.log("noseX= "+ noseX);
        console.log("noseY= "+ noseY);
    }
    
}
function modelLoaded(){
    console.log('POSENET IS INITIALIZED!');
}
function draw(){
    image(video,0,0,300,300);
    image(clown_nose,noseX,noseY,60,60);
    
    
}
function take_snapshot(){
    save('YourMustach.png');
    
}