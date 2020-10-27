var bullet;
var wall;
var speed;
var weight;
var thickness;

function setup()
{
  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83);

  createCanvas(1600,400)
  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = color(80,80,80);
  bullet = createSprite(100,200,30,10);
  bullet.shapeColor = "white";
  
  
}

function draw()
{
  
  background("black");
  drawSprites();
  bullet.velocityX = speed;

  if(wall.x - bullet.x < (bullet.width + wall.width)/2)
  {
    bullet.velocityX = 0;
    var damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness);
    
   if(damage < 10)
   {
    wall.shapeColor = "green";
   }
   if(damage > 10)
   {
    wall.shapeColor = "red";
   }
    
    
  }
 
}