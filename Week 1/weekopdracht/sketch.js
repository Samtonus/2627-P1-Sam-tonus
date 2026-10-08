let turn = 1;
let gameOver = false

let vr1 = 0
let vr2 = 0
let vr3 = 0
let vr4 = 0
let vr5 = 0
let vr6 = 0
let vr7 = 0
let vr8 = 0
let vr9 = 0


let vak1X = 15
let vak1Y = 10

let vak2X = 15
let vak2Y = 120

let vak3X = 15
let vak3Y = 230

let vak4X = 125
let vak4Y = 120

let vak5X = 125
let vak5Y = 10

let vak6X = 235
let vak6Y = 10

let vak7X = 235
let vak7Y = 120

let vak8X = 235
let vak8Y = 230

let vak9X = 125
let vak9Y = 230

let vakSize = 100
let vakRadius = 20

// Posities voor de toevoeging van de resetknop
let resetBtnX = 100;
let resetBtnY = 305;
let resetBtnW = 150;
let resetBtnH = 35;

function resetBoard() {
  vr1 = 0;
  vr2 = 0;
  vr3 = 0;
  vr4 = 0;
  vr5 = 0;
  vr6 = 0;
  vr7 = 0;
  vr8 = 0;
  vr9 = 0;
  turn = 1;
  gameOver = false;
}












function setup() {
  createCanvas(350, 350);
}

function draw() {
  background('white');
  strokeWeight(4)

  fill('red');
  rect(0, 0, 175, 350, 20);

  fill('blue')
  rect(175, 0, 175, 350, 20);



  if (vr1 == 0) {
    fill("white");
  }
  else if (vr1 == 1) {
    fill("red");
  }
  else if (vr1 == 2) {
    fill("blue")
  }

  rect(vak1X, vak1Y, vakSize, vakSize, vakRadius);


  if (vr2 == 0) {
    fill("white");
  }
  else if (vr2 == 1) {
    fill("red");
  }
  else if (vr2 == 2) {
    fill("blue")
  }
  rect(vak2X, vak2Y, vakSize, vakSize, vakRadius);


  if (vr3 == 0) {
    fill("white");
  }
  else if (vr3 == 1) {
    fill("red");
  }
  else if (vr3 == 2) {
    fill("blue")
  }
  rect(vak3X, vak3Y, vakSize, vakSize, vakRadius);

  if (vr4 == 0) {
    fill("white");
  }
  else if (vr4 == 1) {
    fill("red");
  }
  else if (vr4 == 2) {
    fill("blue")
  }

  rect(vak4X, vak4Y, vakSize, vakSize, vakRadius);


  if (vr5 == 0) {
    fill("white");
  }
  else if (vr5 == 1) {
    fill("red");
  }
  else if (vr5 == 2) {
    fill("blue")
  }

  rect(vak5X, vak5Y, vakSize, vakSize, vakRadius);




  if (vr6 == 0) {
    fill("white");
  }
  else if (vr6 == 1) {
    fill("red");
  }
  else if (vr6 == 2) {
    fill("blue")
  }
  rect(vak6X, vak6Y, vakSize, vakSize, vakRadius);


  if (vr7 == 0) {
    fill("white");
  }
  else if (vr7 == 1) {
    fill("red");
  }
  else if (vr7 == 2) {
    fill("blue")
  }

  rect(vak7X, vak7Y, vakSize, vakSize, vakRadius);





  if (vr8 == 0) {
    fill("white");
  }
  else if (vr8 == 1) {
    fill("red");
  }
  else if (vr8 == 2) {
    fill("blue")
  }

  rect(vak8X, vak8Y, vakSize, vakSize, vakRadius);



  if (vr9 == 0) {
    fill("white");
  }
  else if (vr9 == 1) {
    fill("red");
  }
  else if (vr9 == 2) {
    fill("blue")
  }

  rect(vak9X, vak9Y, vakSize, vakSize, vakRadius);

  // Toegevoegd: Resetknop tekenen
  fill("white");
  strokeWeight(2);
  rect(resetBtnX, resetBtnY, resetBtnW, resetBtnH, 10);
  fill("black");
  textSize(16);
  textAlign(CENTER, CENTER);
  text("RESET", resetBtnX + resetBtnW / 2, resetBtnY + resetBtnH / 2);

  checkWinner();
}

function checkWinner()
{
    // Toegevoegd: Controle op alle mogelijke winnende combinaties
    let winner = 0;

    if (vr1 != 0 && vr1 == vr2 && vr2 == vr3) winner = vr1;
    if (vr5 != 0 && vr5 == vr4 && vr4 == vr9) winner = vr5;
    if (vr6 != 0 && vr6 == vr7 && vr7 == vr8) winner = vr6;
    if (vr1 != 0 && vr1 == vr5 && vr5 == vr6) winner = vr1;
    if (vr2 != 0 && vr2 == vr4 && vr4 == vr7) winner = vr2;
    if (vr3 != 0 && vr3 == vr9 && vr9 == vr8) winner = vr3;
    if (vr1 != 0 && vr1 == vr4 && vr4 == vr8) winner = vr1;
    if (vr3 != 0 && vr3 == vr4 && vr4 == vr6) winner = vr3;

    if (winner != 0 && !gameOver) {
      console.log("winner! player:" + winner);
      gameOver = true;
      // Toegevoegd: Automatische reset na 1.5 seconde bij winst
      setTimeout(resetBoard, 1500);
    }
}

function changeTurn() {
  turn = turn + 1
  if (turn > 2) {
    turn = 1
  }
}

function mousePressed() {
  // Toegevoegd: Klik-detectie voor de Resetknop
  if (mouseX > resetBtnX && mouseX < resetBtnX + resetBtnW &&
      mouseY > resetBtnY && mouseY < resetBtnY + resetBtnH) {
    resetBoard();
    return;
  }

  if (gameOver) return; // Voorkomt klikken als het spel afgelopen is

  if (mouseX > vak1X && mouseX < vak1X + vakSize) {
    if (mouseY > vak1Y && mouseY < vak1Y + vakSize) {
      if(vr1 == 0)
      {
        vr1 = turn
        changeTurn();
      }
    }
  }

  if (mouseX > vak2X && mouseX < vak2X + vakSize) {
    if (mouseY > vak2Y && mouseY < vak2Y + vakSize) {
      if(vr2 == 0)
      {
        vr2 = turn
        changeTurn();
      }
    }
  }
  
  if (mouseX > vak3X && mouseX < vak3X + vakSize) {
    if (mouseY > vak3Y && mouseY < vak3Y + vakSize) {
      if(vr3 == 0)
        {
          vr3 = turn
          changeTurn();
        }
      }
    }

if (mouseX > vak4X && mouseX < vak4X + vakSize) {
    if (mouseY > vak4Y && mouseY < vak4Y + vakSize) {
      if(vr4 == 0)
        {
          vr4 = turn
          changeTurn();
        }
      }
    }

if (mouseX > vak5X && mouseX < vak5X + vakSize) {
    if (mouseY > vak5Y && mouseY < vak5Y + vakSize) {
      if(vr5 == 0)
        {
          vr5 = turn
          changeTurn();
        }
      }
    }

    if (mouseX > vak6X && mouseX < vak6X + vakSize) {
    if (mouseY > vak6Y && mouseY < vak6Y + vakSize) {
      if(vr6 == 0)
        {
          vr6 = turn
          changeTurn();
        }
      }
    }

    if (mouseX > vak7X && mouseX < vak7X + vakSize) {
    if (mouseY > vak7Y && mouseY < vak7Y + vakSize) {
      if(vr7 == 0)
        {
          vr7 = turn
          changeTurn();
        }
      }
    }


    if (mouseX > vak8X && mouseX < vak8X + vakSize) {
    if (mouseY > vak8Y && mouseY < vak8Y + vakSize) {
      if(vr8 == 0)
        {
          vr8 = turn
          changeTurn();
        }
      }
    }


    if (mouseX > vak9X && mouseX < vak9X + vakSize) {
    if (mouseY > vak9Y && mouseY < vak9Y + vakSize) {
      if(vr9 == 0)
        {
          vr9 = turn
          changeTurn();
        }
      }
    }











    
  }


