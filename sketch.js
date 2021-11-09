var iss, spacecraft;
var bg, issimg, scimg;
var hasDocked = false;
var codeSound

function preload(){
  bg= loadImage("web page cover.png");
  codeSound = loadSound("codeSound1.mp3") 
}

function setup() {
  createCanvas(1163.5, 540);
}

function draw() {
  background(bg);
  

    
  if(keyDown("c")){
    codeSound.play();
  }
    
  if(keyDown("LEFT_ARROW")){
    spacecraft.addImage(scimg3);
    spacecraft.x = spacecraft.x - 1;
  }
    
  if(keyDown("RIGHT_ARROW")){
    spacecraft.addImage(scimg2);
    spacecraft.x = spacecraft.x + 1;
  }
    
  if(keyDown("DOWN_ARROW")){
      spacecraft.addImage(scimg1);
      spacecraft.y = spacecraft.y +2;
  }
  drawSprites();
}

