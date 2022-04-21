var bg,bgImg;
var hunter,hunterImg;
var hunter2Img

function preload(){
  
  bgImg = loadImage("assets/background.jpg")
  hunterImg = loadImage("assets/character1.png")
  hunter2Img = loadImage("assets/character2.png")
  
}

function setup() {

  
  createCanvas(windowWidth,windowHeight);

  //adding the background image
bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
bg.addImage(bgImg)
bg.scale = 1.4;
bg.velocityX = -3;
  

//creating the player sprite
hunter = createSprite(displayWidth-1150, displayHeight-300, 50, 50);
hunter.addImage(hunterImg)
hunter.scale = 1.3
hunter.debug = true
hunter.setCollider("rectangle",0,0,95,170)


}

function draw() {
  background(0); 




  //moving the player up and down and making the game mobile compatible using touches
/*if(keyDown("UP_ARROW")||touches.length>0){
  player.y = player.y-30
}
if(keyDown("DOWN_ARROW")||touches.length>0){
 player.y = player.y+30
}*/


//release bullets and change the image of shooter to shooting position when space is pressed
/*if(keyWentDown("space")){
 
  player.addImage(shooter_shooting)
 
}&

//player goes back to original standing image once we stop pressing the space bar
else if(keyWentUp("space")){
  player.addImage(shooterImg)
}*/

drawSprites();

}
