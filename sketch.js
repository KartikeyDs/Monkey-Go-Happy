var PLAY=1,END=0;

var gameState = PLAY;

var banana,banana_img,stone,stone_img;

var monkey,monkey_img,ground,jungle,jungle_img,monkey2,monkey2_img;

var survivaltime = 0, b = 0;

function preload() {
  
monkey_img = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  
jungle_img = loadImage("jungle.jpg");
  
banana_img = loadImage("banana.png");
  
stone_img  =loadImage("stone.png") ;
  
monkey2_img = loadImage("monkey2.PNG")
  
}

function setup() {
  createCanvas(600, 400);
  
  jungle = createSprite(200,200);
  jungle.addImage("img2",jungle_img);
  jungle.velocityX = -(5+(survivaltime/15));
  jungle.x = jungle.width/2;
  
  monkey = createSprite(50,360);
  monkey.addAnimation("img1",monkey_img);
  monkey.scale = 0.1;
  
  ground = createSprite(200, 380,600,10);
  ground.visible = false;
  
  monkey2 = createSprite(300,200)
  monkey2.addImage("img5",monkey2_img)
  monkey2.visible = false;
  
  bananas = createGroup();
  
  obstacles = createGroup();

}

function draw() {
  background(220);
  
  monkey.collide(ground);
  
  if (gameState === PLAY) {
   obs();
  
  Food();
    
   if(keyDown("space") && monkey.y >= 330){
   monkey.velocityY = -11 ;
}
    
  if(jungle.x<100) {
  jungle.x = jungle.width/2
}
    
  monkey.velocityY = monkey.velocityY + 0.5;
  
  if(monkey.isTouching(bananas)) {
  b = b+1;
  bananas.destroyEach();
}
  
    
  survivaltime = Math.ceil(World.frameCount/World.frameRate);
  
  }
  
  
 if (survivaltime % 20 === 0) {
    monkey.scale = monkey.scale + 0.001;
  } 

  
  if (monkey.isTouching(obstacles) ){
  monkey.scale =  monkey.scale - 0.01;
  
  } 
  
  if (monkey.scale<0.00) {
    
  gameState = END;
    
  }

  
  drawSprites();
  
  if (gameState===END ) {
  jungle.velocityX = 0;
  bananas.destroyEach();
  obstacles.destroyEach();
  monkey.destroy();
  stroke("black");
  textSize(50);
  fill("black");
  text("Game Over",165,200);
  }
  
  stroke("black");
  textSize(20);
  fill("black");
  text("Bananas : " + b , 40, 20);
  text("Survival Time : " + survivaltime, 400, 20);
}

function obs() {
 
  if (frameCount % 200 === 0) {
  
  stone = createSprite(600, 360);
  stone.addImage("img4",stone_img)
  stone.scale =  0.2;  
  
  stone.setCollider("circle",0,0,175);

  stone.velocityX = -5
  stone.lifetime = -200;

  obstacles.add(stone);

}
}

function Food() {
  
  if (frameCount % 150 === 0) {
  
  banana = createSprite(600, 200);
  banana.addImage("img3",banana_img);
  banana.scale = 0.05;
  
 

  banana.y = Math.round(random(180,250));

  banana.velocityX = -5;

  banana.lifetime = 200;

  bananas.add(banana);

}}

