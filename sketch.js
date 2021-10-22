const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

function preload(){
    polygon_image=loadImage("polygon.png")
}

function setup(){
    var canvas = createCanvas(1200,800);
    engine = Engine.create();
    world = engine.world;

    polygon=Bodies.circle(50,200,20);
    World.add(world,polygon);
    slingShot=new SlingShot(this.polygon,{x:100,y:200})

    
    


    ground1 = new Ground(600,height,1200,20);
    ground2 = new Ground(655,550,225,10);
    ground3 = new Ground(940,300,180,10);

    box1=new Box(575,525,20,30)
    box2=new Box(595,525,20,30)
    box3=new Box(615,525,20,30)
    box4=new Box(635,525,20,30)
    box5=new Box(655,525,20,30)
    box6=new Box(675,525,20,30)
    box7=new Box(695,525,20,30)
    box8=new Box(715,525,20,30)
    box9=new Box(735,525,20,30)
    
    box10=new Box(605,495,20,30)
    box11=new Box(625,495,20,30)
    box12=new Box(645,495,20,30)
    box13=new Box(665,495,20,30)
    box14=new Box(685,495,20,30)
    box15=new Box(705,495,20,30)

    box16=new Box(625,465,20,30)
    box17=new Box(645,465,20,30)
    box18=new Box(665,465,20,30)
    box19=new Box(685,465,20,30)

    box20=new Box(655,435,40,30)

    box21=new Box(880,280,20,30)
    box22=new Box(900,280,20,30)
    box23=new Box(920,280,20,30)
    box24=new Box(940,280,20,30)
    box25=new Box(960,280,20,30)
    box26=new Box(980,280,20,30)
    box27=new Box(1000,280,20,30)

    box28=new Box(900,245,20,30)
    box29=new Box(920,245,20,30)
    box30=new Box(940,245,20,30)
    box31=new Box(960,245,20,30)
    box32=new Box(980,245,20,30)

    box33=new Box(920,230,20,30)
    box34=new Box(940,230,20,30)
    box35=new Box(960,230,20,30)
    box36=new Box(940,200,20,30)


    



}

function draw(){
    background(173, 216, 230);
    text("x: "+mouseX+",y: "+mouseY,10,10)
    textSize(50)
    fill("black")
    text("Tower Siege",400,300)
    
    

    Engine.update(engine)
    ground1.display()
    fill ("brown")
    ground2.display()
    ground3.display()
    fill("yellow")
    box1.display()
    box2.display()
    box3.display()
    box4.display()
    box5.display()
    box6.display()
    box7.display()
    box8.display()
    box9.display()
    
    fill("green")
    box10.display()
    box11.display()
    box12.display()
    box13.display()
    box14.display()
    box15.display()

    fill("purple")
    box16.display()
    box17.display()
    box18.display()
    box19.display()

    fill("blue")
    box20.display()

    fill("green")
    box21.display()
    box22.display()
    box23.display()
    box24.display()
    box25.display()
    box26.display()
    box27.display()

    fill("orange")
    box28.display()
    box29.display()
    box30.display()
    box31.display()
    box32.display()

    fill("cyan")
    box33.display()
    box34.display()
    box35.display()
    box36.display()

    imageMode(CENTER)
    image(polygon_image, polygon.position.x,polygon.position.y,40,40)

    


    

}
function mouseDragged(){
    Matter.Body.setPosition(polygon, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingShot.fly();
}
function keyPressed(){
    if(keyCode===32)
    slingShot.attach(polygon);
}