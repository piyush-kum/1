var bg, sleep,brush, gym, eat, drink, move,gym3;

var bg2, sleep2,brush2, gym2, eat2, drink2, move2;


function preload(){

  bg = loadImage("images/iss.png")
  sleep= loadImage("images/sleep.png")
  brush = loadImage("images/brush.png")
  gym = loadAnimation("images/gym1.png","images/gym2.png")
  gym3 = loadAnimation("images/gym11.png","images/gym12.png")
  eat = loadAnimation("images/eat1.png","images/eat2.png")
  drink = loadAnimation("images/drink1.png","images/drink2.png")
  move= loadAnimation("images/move.png","images/move1.png")
}


function setup() {
  createCanvas(600, 600);

  bg2 = createSprites(200,200,20,20)
  bg2.addImage(bg)


}










function draw() {







  background(220);




  
drawSprites()
}