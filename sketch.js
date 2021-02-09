
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

ground1= new Ground(700,680,1500,20);
box1= new Box(500,660,150,20);
box2= new Box(425,630,20,100);
box3= new Box(575,630,20,100);
ball1= new Paper(50,650,30);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  ground1.display();
  box1.display();
  ball1.display();
  
  drawSprites();
 
}
function keyPressed() 
{ if (keyCode === UP_ARROW) 
	{ Matter.Body.applyForce(ball1.body, ball1.body.position, {x: 130, y:135}); } }



