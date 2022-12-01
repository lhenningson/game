// Helicopter Game Start

// Set up canvas and graphics context
let cnv = document.getElementById("my-canvas");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 600;

// Global Variables
let heliImg = document.createElement("img");

heliImg.src = "img/heliBlueTransparent.png";

let explosion = document.createElement("audio");
explosion.scr = "sound/explosion.wav";

let propeller = document.createElement("audio");
propeller.scr = "sound/propeller.wav";

let mouseispressed = false;

let state;
let heli;
let wall1, wall2, wall3;
reset();




// Draw Function
window.addEventListener("load", draw);

function draw() {
  if (state === "start") {
     drawStart();
} else if (state === "gameon") {
     runGame();
} else if (state === "gameover") {
     drawGameOver();
}

  // Request Animation Frame
  requestAnimationFrame(draw);
}

// EVENT STUFF
document.addEventListener("mousedown", mousedownHandler);
document.addEventListener("mouseup", mouseupHandler);

function mousedownHandler() {
mouseispressed = true;

// start game
  if (state === "start") {
    state = "gameon";
  }
}

function mouseupHandler() {
  mouseispressed = false;

}