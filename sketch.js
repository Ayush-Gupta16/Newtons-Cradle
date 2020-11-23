
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
bobObject1=new Bob(200,200,50);
bobObject1.shapeColor=("pink")

bobObject2=new Bob(250,200,50);
bobObject2.shapeColor=("pink")

bobObject1=new Bob(300,200,50);
bobObject1.shapeColor=("pink")

bobObject1=new Bob(350,200,50);
bobObject1.shapeColor=("pink")

bobObject1=new Bob(400,200,50);
bobObject1.shapeColor=("pink")

roofObject=new Roof(400,100,800,100);
roofObject.shapeColor=("brown")

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



