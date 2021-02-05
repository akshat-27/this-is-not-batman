const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;


var engine, world;
var drops = [];


var maxDropos=100

function preload(){
    
}

function setup(){
   var canvas = createCanvas(400, 700)
   engine = Engine.create();
    world = engine.world;

    if(frameCount % 150 == 0){
        for(var i=0; 1<maxDropos; i++){
            drops.push(new drop(random(0, 400), random(0, 400)))
        }
    }
}

function draw(){
    Engine.update(engine);
    rain.display();

    for(var i = 0; i<maxDropos; i++){
        drops[i].showDrop();
        drops[i].updateY();
    }
}   