var database;
var gameState, pC;
var game, player, form;
var track;
var cars, car1, car2, car3, car4;
var allPlayers;

function preload() {
  track = loadImage("track.jpg");
  car1_img = loadImage("../images/car1.png");
  car2_img = loadImage("../images/car2.png");
  car3_img = loadImage("../images/car3.png");
  car4_img = loadImage("../images/car4.png");
  ground = loadImage("../images/ground.png");
}
function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(500,500);

  game = new Game();
  game.getState();
  game.start();
}

function draw(){
  background("white"); 
  if (pC===4) {
    game.updateState(1);
  } 
  if (gameState===1) {
    game.play();
  }
}