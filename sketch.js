var runner,runnerImage;
var obstacles,obstacleImage,obstacleGroup;

function preload(){
runnerImage=loadImage("mariojump2.png");
obstacleImage=loadImage("obstacle.png");
}

function setup() {
  createCanvas(800,400);

  runner = createSprite(50,180,20,50);
  runner.addImage("mario",runnerImage);
  runner.scale=0.1;
  ground = createSprite(500,390,1000,20);
  obstacleGroup=new Group();
}

function draw() {
  background(0);  

  if(keyDown("space") && runner.y >= 159) {
    runner.velocityY = -12;
  }

  runner.velocityY = runner.velocityY + 0.8

  if (ground.x < 0){
    ground.x = ground.width/2;
  }

  runner.collide(ground);
  spawnObstacles();
  drawSprites();
}

function spawnObstacles() {
  //write code here to spawn the clouds
  if (frameCount % 60 === 0) {
    var obstacles = createSprite(600,120,40,10);
    obstacles.addImage("image",obstacleImage);
    obstacles = Math.round(random(80,120));
    obstacles.velocityX = -3;
    obstacles.lifetime = 200;
    obstacles.depth = runner.depth;
    runner.depth = runner.depth + 1;
    obstacleGroup.add(obstacles);
  }
  
}