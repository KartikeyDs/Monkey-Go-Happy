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

