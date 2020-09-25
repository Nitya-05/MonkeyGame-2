//storing project
var monkey , monkey_running , ground;
var banana ,bananaImage, obstacle, obstacleImage;
var foodGroup, obstacleGroup;
var score;

function preload(){
  
  //loading images
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}

function setup() {
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("running", monkey_running);
  monkey.scale=0.1;
  
  ground=createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x);
  
  bananaGroup=new Group();
  obstacleGroup=new Group();
  
  var survivalTime=0;
}

function draw() {
  background("white");
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate());
  text("Survival Time"+ survivalTime,150,50);
  
  if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
  if (keyDown("space")){
    monkey.velocityY=-10;  
      }
  
   monkey.velocityY = monkey.velocityY + 0.8

  if(obstacleGroup.isTouching(monkey)){
     bananaGroup.setLifetimeEach(-1);
     bananaGroup.setVelocityXEach(0);
     obstacleGroup.setVelocityXEach(0);
     obstacleGroup.setLifetimeEach(-1);
     ground.velocityX=0;
     monkey.velocityY=0;
     }
  
  monkey.collide(ground);
  
  obstacle();
  food();
 drawSprites();
}

function  obstacle(){
  if (frameCount % 300 === 0){
   //creating obstacle
   var obstacles = createSprite(800,320,20,20);
    obstacles.addImage("obstacle", obstacleImage);
   obstacles.velocityX = -6;
    obstacles.scale=0.1;
    obstacles.lifeTime=200;
    obstacleGroup.add(obstacles);

  }
  
}

function food(){
  if (frameCount % 80 === 0) {
    var banana = createSprite(600,215,20,20);
    banana.y = Math.round(random(120,200));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -4;
    
     //assign lifetime to the variable
    banana.lifetime = 200;
    bananaGroup.add(banana);

  }
  
}

