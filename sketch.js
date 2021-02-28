
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball1,ball2,ball3,ball4;

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;
	
	ball1=new balls (550,300,20,20);
	ball2=new balls (600,300,20,20);
	ball3=new balls (650,300,20,20);
	ball4= new balls(700,300,20,20);
	stand1 = new stand (300,200,20.20);

	Engine.run(engine); 
}

function draw() {
  rectMode(CENTER);
  background(0);
  
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  stand1.display();

  drawSprites();
 
}