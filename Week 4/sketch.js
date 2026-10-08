// Arrays voor het opslaan van de eigenschappen van de vormen
let positieX = [];
let positieY = [];
let snelheidX = [];
let snelheidY = [];
let vormGrootte = [];
let vormKleur = [];
let vormType = [];        // 0 = Cirkel, 1 = Vierkant, 2 = Driehoek, 3 = Zeshoek
let rotatieHoek = [];
let rotatieSnelheid = [];

let aantalVormen = 0;     

function setup() {
 
  createCanvas(800, 600);
  angleMode(DEGREES);
  
}

function draw() {
 
  background(110);

  // Uitlezen van de arrays met een for-loop om alle vormen te tekenen en te laten bewegen
  for (let i = 0; i < aantalVormen; i++) {
    
    // 1. Positie updaten voor beweging 
    positieX[i] += snelheidX[i];
    positieY[i] += snelheidY[i];
    rotatieHoek[i] += rotatieSnelheid[i];

    // laat de vormen terugkaatsen als ze de rand van het scherm raken
    if (positieX[i] < 0 || positieX[i] > width) {
      snelheidX[i] *= -1;
    }
    if (positieY[i] < 0 || positieY[i] > height) {
      snelheidY[i] *= -1;
    }

    // 2. Vorm tekenen met opgeslagen eigenschappen
    push();
    translate(positieX[i], positieY[i]);
    rotate(rotatieHoek[i]);

    // rand van de vormen
    fill(vormKleur[i]);
    stroke(0);
    strokeWeight(4);

   
    if (vormType[i] === 0) {
      // Cirkel
      ellipse(0, 0, vormGrootte[i]);
    } else if (vormType[i] === 1) {
      // Vierkant
      rectMode(CENTER);
      rect(0, 0, vormGrootte[i], vormGrootte[i]);
    } else if (vormType[i] === 2) {
      // Driehoek
      let r = vormGrootte[i] / 2;
      triangle(
        0, -r,
        -r, r,
        r, r
      );
    } else if (vormType[i] === 3) {
      // Zeshoek (Polygon)
      tekenZeshoek(0, 0, vormGrootte[i] / 2);
    }

    pop();
  }
}

// als je op backspace drukt reset het canvas en krijg je nieuwe willekeurige vormen
function keyPressed() {
  if (keyCode === BACKSPACE) {
    genereerNieuweKunst();
    return false; 
  }
}

// Functie die alle arrays leegmaakt en opnieuw vult met willekeurige waarden
function genereerNieuweKunst() {
  // Reset de arrays
  positieX = [];
  positieY = [];
  snelheidX = [];
  snelheidY = [];
  vormGrootte = [];
  vormKleur = [];
  vormType = [];
  rotatieHoek = [];
  rotatieSnelheid = [];

  // Varieer het aantal vormen willekeurig tussen 15 en 35
  aantalVormen = floor(random(15, 36));

  for (let i = 0; i < aantalVormen; i++) {
    positieX.push(random(50, width - 50));
    positieY.push(random(50, height - 50));
    
    snelheidX.push(random(-1.5, 1.5));
    snelheidY.push(random(-1.5, 1.5));
    
    vormGrootte.push(random(30, 180));
    
    vormKleur.push(color(random(255), random(255), random(255)));
    
    vormType.push(floor(random(4)));
    
    
    rotatieHoek.push(random(0, 360));
    rotatieSnelheid.push(random(-1, 1));
  }
}

// Hulpfunctie voor het tekenen van een regelmatige zeshoek
function tekenZeshoek(x, y, straal) {
  beginShape();
  for (let i = 0; i < 360; i += 60) {
    let vx = x + cos(i) * straal;
    let vy = y + sin(i) * straal;
    vertex(vx, vy);
  }
  endShape(CLOSE);
}
