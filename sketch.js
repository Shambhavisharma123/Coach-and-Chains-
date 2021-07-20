const Engine= Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var bg;
var ground;
var bogie1,bogie2,bogie3;
var chain1,chain2,chain3,chain4
var trainSound 
var crashSound
var rock,rock1
var flag = 0;

function preload(){
  bg= loadImage("images/bg.jpg");
  trainSound = loadSound("sound/train.mp3");
  crashSound = loadSound("sound/train_crossing.mp3");
}
function setup() {
  createCanvas(1200,400);
  engine = Engine.create();
  world= engine.world;

  ground = new Ground(600,380,1200,20);

  bogie1 = new Bogie(600,200,50,50);
  bogie2 = new Bogie(500,200,50,50);
  bogie3 = new Bogie(400,200,50,50);
  bogie4 = new Bogie(300,200,50,50);
  bogie5 = new Bogie(200,200,50,50);

  rock = new Rock(900,200,70,70);

  chain1 = new Chain(bogie1.body,bogie2.body);
  chain2 = new Chain(bogie2.body,bogie3.body);
  chain3 = new Chain(bogie3.body,bogie4.body);
  chain4 = new Chain(bogie4.body,bogie5.body);

}

function draw() {
  background(bg);  
  Engine.update(engine);
  
  ground.show();
  bogie1.display();
  bogie2.display();
  bogie3.display();
  bogie4.display();
  bogie5.display();

  rock.display();

  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();

 
  }


  
