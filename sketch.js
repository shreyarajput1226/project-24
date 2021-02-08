
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var hammer;
var rubber;
var stone;
var plane;

function setup() {
	createCanvas(1200,400);


	engine = Engine.create();
	world = engine.world;

	plane = new Plane(600,385,1200,60);
	hammer = new Hammer(700,500,100,50);
	stone = new Stone(700,320,200,200);
    rubber = new Rubber(900,450,70);


	//Engine.run(engine);
  
}


function draw() {
  
  background("pink");
  Engine.update(engine);
  plane.display();
  hammer.display();
  stone.display();
  rubber.display();
 
}



