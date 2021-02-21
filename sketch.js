const World = Matter.World 
const Engine = Matter.Engine
const Bodies = Matter.Bodies

var engine, world ; 
var ground; 

function setup() {
    createCanvas(1200,400);

    engine = Engine.create()

    world = engine.world

    box1 = new Box(700,320,70,70)
    box2 = new Box(920,320,70,70)
    box3 = new Box(700,240,70,70)
    box4 = new Box(920,240,70,70)
    box5 = new Box(810,160,70,70)

    pig1 = new Pig(810,350,50,50)
    pig2 = new Pig(810,220,50,50)

    bird = new Bird(200,50,50,50)

    ground = new Ground(600,height,1200,20)

    log1 = new Log(810,260,300,20,PI/2)
    log2 = new Log(810,180,300,20,PI/2)
    log3 = new Log(760,120,150,20,PI/7)
    log4 = new Log(870,120,150,20,-PI/7)
}

function draw(){
    background("black")

    Engine.update(engine)

    box1.display()
    box2.display()
    box3.display()
    box4.display()
    box5.display()

    pig1.display()
    pig2.display()

    bird.display()

    log1.display()
    log2.display()
    log3.display()
    log4.display()

    ground.display()

}