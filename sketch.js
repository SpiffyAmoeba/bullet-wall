var bullet,wall,speed, weight,thickness; 


function setup() {
  createCanvas(1600, 400);

	speed=random(30,52)
	weight=random(223,321)
thickness=random(22,83);
	bullet=createSprite(50, 200, 90,10);   

	bullet.velocityX = speed;

	bullet.shapeColor=color("white");


  
  	wall=createSprite(1200,200, thickness, height/2)
  	wall.shapeColor=color("white")
}


function draw() {
  background(0);

  if(wall.x-bullet.x < (bullet.width+wall.width)/2)
  {
  	bullet.velocityX=0;
  	var deformation=0.5 + (weight + speed)/thickness;
	if(deformation>10)
	{
		wall.shapeColor=color("red");
	}

	
	if(deformation<10)
	{
		wall.shapeColor=color("green");
	}
  }  
  
  drawSprites();
}