
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
var ground;
var left;
var right;
function preload()
{
	
}

function setup() {
	createCanvas(1000, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    var ball_options={
    	restitution:0.3,
		friction:0,
		density:1.2
	}
	ball=Bodies.circle(100,290,20,ball_options);
	World.add(world,ball);
    
	ground=new Ground(500,590,1000,20);
    left=new Ground(700,520,15,120);
    right=new Ground(900,520,15,120);
	Engine.run(engine);
  
}


function draw() {
  
  background(0);
 ground.display();
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,20,20)
  drawSprites();
  left.display()
 right.display();
}
function keyPressed() {
	if (keyCode===UP_ARROW){
      Body.applyForce(ball,ball.position,{x:60,y:-80})

	}
   
}


