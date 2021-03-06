
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){
	treeimg=loadImage("tree.png");
	boyimg=loadImage("boy.png");
}

function setup() {
  createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   g1=new Ground(400,760,800,20)
   stoneObj=new Stone(291,467,40);
   mango1=new Mango(432,432,30);
   mango2=new Mango(293,293,30);
   mango3=new Mango(400,400,30);
  slingShot=new SlingShot(stoneObj.body,{x:200,y:100}); 
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  g1.display();
  stoneObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  slingShot.display();
  image (boyimg,45,457,200,200);
  image (treeimg,300,100,400,600);
  


  drawSprites();
 
}
function mouseDragged() {
  Matter.Body.setPosition(stoneObj.body,
    {
      x:mouseX, y:mouseY
   
   }
   ) 
 } function mouseReleased() { 
   stoneObj.fly();
  }
  function keyPressed(){
if(keyCode===32){
Matter.Body.setPosition(stoneObj.body,{x:235,y:420})
launcherObject.attach(stoneObj.body);

}
}




