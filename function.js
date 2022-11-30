// FUNCTIONS

// Draw Start Screen
function drawStart() {

  drawMainComponents();
  
    // Start Text
    ctx.font = "40px Consolas";
    ctx.fillStyle = "lightblue";
    ctx.fillText("CLICK TO START", 350, 285)
  
    ctx.font = "25px Consolas";
    ctx.fillText("CLICK AND HOLD LEFT MOUSE BUTTON TO GO UP", 100, 450);
    ctx.fillText("RELEASE TO GO DOWN", 415, 480);
  }
  
  // Draw Game Elements
function runGame() {
  // LOGIC
  moveHeli();

  movewalls();

  // DRAW
  drawGame();
}

function moveHeli() {
 // Accelerate upwards
 if (mouseispressed) {
  heli.speed += -1;
 }

 // Apply Gravity
 heli.speed += heli.accel;

 // Constrain Speed
 if (heli.speed > 5) {
  heli.speed = 5;
 } else if (heli.speed < -5) {
  heli.speed = -5;
 }

 // Move Helicopter by its speed
 heli.y += heli.speed;

}

function movewalls() {

  wall1.x += -3;
  if (wall1.x + wall1.w < 0) {
    wall1.x = wall3.x + 500;
    wall1.y = Math.random() * 300 + 100;
  }

  wall2.x += -3;
  if (wall2.x + wall2.w < 0) {
    wall2.x = wall1.x + 500;
    wall2.y = Math.random() * 300 + 100;
  }

  wall3.x += -3;
  if (wall3.x + wall3.w < 0) {
    wall3.x = wall2.x + 500;
    wall3.y = Math.random() * 300 + 100;
  }
}
function drawGame() {
    drawMainComponents();
    drawWalls();
  }
  
  // Draw Game Over Screen
  function drawGameOver() {
    // draw things
    drawMainComponents();
  
    // Draw Walls 
    drawWalls();
  
    // Circle around Helicopter
    ctx.strokeStyle = "red";
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.arc(240, 270, 60, 0, 2 * Math.PI);
    ctx.stroke();
  
    // Game Over Text
    ctx.font = "40px Consolas";
    ctx.fillStyle = "lightblue";
    ctx.fillText("GAME OVER", 350, 285);
  }

  function drawWalls() {
    ctx.fillStyle = "green";
    ctx.fillRect(wall1.x, wall1.y, wall1.w, wall1.h);
    ctx.fillRect(wall2.x, wall2.y, wall2.w, wall2.h);
    ctx.fillRect(wall3.x, wall3.y, wall3.w, wall3.h);
  }
  function drawMainComponents() {
    // Background
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, cnv.width, cnv.height);
  
    // Green Bars
    ctx.fillStyle = "green";
    ctx.fillRect(0, 0, cnv.width, 50);
    ctx.fillRect(0, cnv.height - 50, cnv.width, 50);
  
    // Green Bar Text
    ctx.font = "30px Consolas";
    ctx.fillStyle = "black";
    ctx.fillText("HELICOPTER GAME", 25, 35);
    ctx.fillText("DISTANCE: 0", 25, cnv.height - 15);
    ctx.fillText("BEST: 0", cnv.width - 250, cnv.height - 15);
  
    // Helicopter
    ctx.drawImage(heliImg, heli.x, heli.y);
  }