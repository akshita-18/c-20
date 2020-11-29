var car, wall;
var speed, weight;

function setup() {
  createCanvas(1600,400); 

speed=random(55,90)
weight=random(400,1500)

car = createSprite(50,200,50,50);
car.velocityX = speed;
car.shapeColor = "blue"

wall = createSprite(1500,200,60,height/2);
wall.shapeColor = "blue";
}

function draw() {
  background(0);  
  drawSprites();
 if(wall.x-car.x<wall.width/2+car.width/2) {
   car.velocityX = 0;
 }
   var def = 0.5*weight*speed*speed/22500;

   if(def>180) {
     car.shapeColor = "red";
   }
   if(def<180 && def>100) {
    car.shapeColor = "purple";
   }
   if(def>100) {
     car.shapeColor = "yellow";
   }
 }

