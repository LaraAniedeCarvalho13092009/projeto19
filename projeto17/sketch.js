var policial;
var ladrão;
var obstacle;
var rua;
var moeda;
var ruaImg
var obstacleImg;
var ladrãoImg;

var END =0;
var PLAY =1;
var gameState = PLAY;

var distance=0;
var gameOver, restart;

function preload(){
  ladrãoImg = loadImage("ladrão.png");
  moeda = loadImage("Moeda.png");
  policial = loadImage("Policial.png");
  obstacleImg = loadImage("Arbusto.png");
  ruaImg = loadImage("Rua.jpg");
  gameOverImg = loadImage("gameOver.png");
}

function setup(){
  
createCanvas(1200,400);
// Moving background
rua=createSprite(100,150);
rua.addImage(ruaImg);
rua.velocityX = -5;

//creating boy running
ladrão = createSprite(70,150);
ladrão.scale=0.3;
ladrão.addImage(ladrãoImg);
  
//set collider for mainCyclist

//mainCyclist.setCollission("rectangle",0,0,40,40);
ladrão.setCollider("rectangle",0,0,40,40);
//mainCyclist.setCollission("rectangle",0,0,40,40,50);
//mainCyclist.setCollider("rectangle",0,0,40,40,50);

  
gameOver = createSprite(650,150);
gameOver.addImage(gameOverImg);
gameOver.scale = 0.8;
gameOver.visible = false;  
  

  obstacles = new Group();
  
}

function draw() {
  background(0);
  
  drawSprites();
  textSize(20);
  fill(255);
  text("Distance: "+ distance,900,30);
  
  if(gameState===PLAY){
    
  distance = distance + Math.round(getFrameRate()/50);
  rua.velocityX = -(6 + 2*distance/150);
  
  ladrão.y = World.mouseY;
  
  
  edges= createEdgeSprites();
  ladrão.collide(edges);
  
  //code to reset the background
  if(rua.x < 0 ){
    rua.x = width/2;
  }
  
    //code to play cycle bell sound
  if(keyDown("space")) {
    cycleBell.play();
  }
  
  //creating continous opponent players
  var select_obstacle = Math.round(random(2,5),);
  
  if (World.frameCount % 50 == 0) {
    if (select_obstacle == 2) {
      pinkCyclists();
    } 
  }
  
  if(obstacles.isTouching(ladrão)){
  gameState = END;
  ladrão.velocityY = 0;
  
    }
    
    
    
}else if (gameState === END) {
    gameOver.visible = true;
  
    textSize(20);
    fill(255);
    text("Press Up Arrow to Restart the game!", 500,200);
  
    rua.velocityX = 0;
    ladrão.velocityY = 0;
    
  
    obstacles.setVelocityXEach(0);
    obstacles.setLifetimeEach(-1);
  
    
    // if(keyDown("UP_ARROW")) {
    //   reset;
    // }

    // if(key("UP_ARROW")) {
    //   reset();
    // }

    // if(keyDown()) {
    //   reset();
    // }

      if(keyDown("UP_ARROW")) {
        reset();
      }
}
}

function pinkCyclists(){
        obstacle =createSprite(1100,Math.round(random(50, 250)));
        obstacle.scale =0.2;
        obstacle.velocityX = -(6 + 2*distance/150);
        obstacle.addImage("Arbusto.png",obstacleImg);
        obstacle.setLifetime=170;
        obstacles.add(obstacle);
}



//function reset{
//  gameState = END;
//  gameOver.visible = false;
//  mainCyclist.addAnimation("SahilRunning",mainRacerImg1);
  
//  pinkCG.destroyEach();
//  yellowCG.destroyEach();
//  redCG.destroyEach();
  
//  distance = 0;
// }

//function reset{
//  gameState = PLAY;
//  gameOver.visible = true;
//  mainCyclist.addAnimation("SahilRunning",mainRacerImg1);
  
//  pinkCG.destroy();
//  yellowCG.destroy();
//  redCG.destroy();
  
//  distance = 0;
// }

function reset(){
  gameState = PLAY;
  gameOver.visible = false;
  ladrão.addImage("ladrão.png",ladrãoImg);
  
  obstacle.destroyEach();
  
  distance = 0;
  }

//function reset(){
 // gameState = END;
 // gameOver.visible = true;
 // mainCyclist.addAnimation("SahilRunning",mainRacerImg1);
  
//  pinkCG.destroyEach();
 // yellowCG.destroyEach();
  //redCG.destroyEach();
  
 // distance = 50;
 // }


