let carX = 1;
let carSpeed = 0;
let wheel = 1;

let wolkX = 0

let wolkXs = 1
let wolkSpeed = 0



let sunAngle = 0;
let totalDaytime = 1000;
let currentTime = 0;
let rotationPointX = 400;
let rotationPointY = 500;
let sunX = 100;
let sunY = 200;
let sunSize = 120;
let sunRadius = 400;

let licht = 0
let stoplichtKleur = 0

function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(220);
  fill('lightblue')
  rect(0, 0, 800, 600);

  drawSun();
  if (stoplichtKleur) {
    licht = 1

  }

  noStroke()
  fill(GRAY)
  rect(0, 460, 800, 140);
  fill('green')
  rect(0, 440, 800, 20)

  fill('white');
  rect(10, 510, 50, 10)
  rect(80, 510, 50, 10)
  rect(150, 510, 50, 10)
  rect(220, 510, 50, 10)
  rect(290, 510, 50, 10)
  rect(360, 510, 50, 10)
  rect(430, 510, 50, 10)
  rect(500, 510, 50, 10)
  rect(570, 510, 50, 10)
  rect(640, 510, 50, 10)
  rect(710, 510, 50, 10)
  rect(780, 510, 50, 10)



  fill('#e3dddd');
  triangle(150, 440, 550, 440, 340, 230);
  fill('darkgrey');
  triangle(370, 440, 50, 440, 220, 130);
  fill('lightgrey')
  triangle(370, 440, 110, 440, 220, 130);
  fill('darkgrey')
  triangle(590, 440, 310, 440, 420, 200);
  fill('white')
  circle(230, 185, 30, 30)
  circle(217, 185, 30,)
  triangle(245, 180, 203, 180, 220, 130)


  //tree
  fill('#ae5202');
  rect(400, 380, 10, 60);
  rect(600, 390, 10, 50);
  rect(550, 390, 10, 50);
  rect(300, 360, 10, 80);
  rect(170, 390, 10, 50);

  rect(460, 370, 10, 70);
  rect(690, 370, 10, 70);
  rect(740, 390, 10, 50);

  fill('green');
  ellipse(465, 380, 50, 70)
  ellipse(405, 360, 50, 70)
  ellipse(305, 380, 50, 80)
  ellipse(175, 380, 40, 60)
  ellipse(605, 380, 40, 60)
  ellipse(555, 390, 40, 60)
  ellipse(695, 360, 50, 80)
  ellipse(745, 370, 50, 60)

  //mcdonalds
  stroke('black')
  strokeWeight(2)

  fill('#c98e5a');
  rect(30, 420, 60, 20)
  fill('#4a4745');
  rect(30, 395, 60, 20)

  fill('#c4272f');
  rect(90, 370, 40, 70)
  fill('#989293');
  rect(25, 415, 90, 5)
  rect(85, 370, 50, 5)
  rect(60, 355, 5, 40)
  fill('yellow');

  textFont('comic sans');
  textStyle('bold')
  textSize(42);
  text('m', 45, 372);
  fill('white');
  rect(30, 435, 60, 5)

  fill('#25c6d2');
  rect(35, 423, 50, 9)
  rect(95, 423, 30, 17)
  line(110, 440, 110, 423);
  rect(95, 390, 30, 17)



  carX = carX + carSpeed


  noStroke(0)
  rect(carX, 450, 40,)
  rect(carX + 10, 470, 50, 20)
  rect(carX, 450, 30, 20)

  fill('white');
  rect(carX + 20, 455, 20, 15);


  if (carX > 800) {
    carX = -100

  }
  fill('black');
  circle(carX + wheel + 50, 490, 10,);
  circle(carX + wheel + 10, 490, 10,);


  if (wheel > 800) {
    wheel = -100



  }








  //stopl licht
  fill('grey');
  rect(700, 430, 10, 30,);
  rect(690, 340, 30, 100,);
  if (licht === 0) {

  }

  
  fill('white');
  ellipse(wolkX, 150, 100, 50,);
  ellipse(wolkX, 140, 50, 40,);







  fill('black');
  
  
  // if (stoplichtKleur == 3) {
    //   stoplichtKleur = 0
    //   console.log('is ie ingedrukt enter');
    // }
    
    circle(705, 360, 25, 25,);
    if (stoplichtKleur == 1) {
      console.log('enterIngedrukt moet werken')
      fill('red');
      // hier was ik
      circle(705, 360, 25, 25,);
      carSpeed = 0
      
    }
    
    fill('black');
    circle(705, 420, 25, 25,);
  if (stoplichtKleur == 2) {
    fill('green')
    circle(705, 420, 25, 25,);
    carSpeed = 7


  }
  
  
  fill('black');
  circle(705, 390, 25, 25,);
  if (stoplichtKleur == 0) {
    fill('orange');
    circle(705, 390, 25, 25,);
    carSpeed = 3
  }


  


  //wolken

if (wolkX > 900)
  wolkX = -150

wolkX += 1




if (wolkXs > 900)
  wolkXs = -150

wolkXs  += 1


}


function keyPressed() {


  if (keyCode === ENTER) { // Enter key

    stoplichtKleur += 1

    if(stoplichtKleur > 2)
    {
      stoplichtKleur = 0
    }

  }
}

function drawSun() {
  //sun
  currentTime = currentTime + (deltaTime / 1000)

  if (currentTime > totalDaytime) {
    currentTime = 0
  }
  text(currentTime, 10, 40)

  circle(rotationPointX, rotationPointY, 10)

  sunAngle = 360 / totalDaytime * currentTime

  sunX = rotationPointX + cos(sunAngle) * sunRadius;
  sunY = rotationPointY + sin(sunAngle) * sunRadius;


  fill('#FCE570');
  circle(sunX, sunY, sunSize)


}



