
var ground, boxleft, boxright
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);
	
	
	myengine = Engine.create();
	myworld = myengine.world;
	
	dustbin = new Dustbin(1200,650)
	//Create a Ground
	ground = new Ground(width/2,670,width,20);
	paperball = new Paper(200,450,40);
	

	
	Engine.run(myengine);
  
}


function draw() {

  background(0);
  Engine.update(myengine);
    
	keyPressed();
  
	ground.display();
	paperball.display();
   dustbin.display();
 
}

function keyPressed() {
 if (keyCode === UP_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
	
	Matter.Body.applyForce(paperball.body,paperball.body.position,{x:85,y:-5});
   
  	
	}


}



