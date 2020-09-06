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