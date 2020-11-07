const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball,ball2;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
    ball=new Box(15,200,100,100);
    ball2=new Box(100,100,300,300);
    
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    ball.display();
    ball2.display();
}