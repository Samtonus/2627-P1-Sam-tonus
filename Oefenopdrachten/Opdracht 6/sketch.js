let mX;
let mY;
let vormen = [];
let kleur;
let kleur2;
function setup() {
  createCanvas(400, 400);
  kleur = 
  kleur2 = color(random(255), random(400), random(400));
 


}
function draw() {
  background(220);
  mX = mouseX + random(-10, 10);
  mY = mouseY + random(-10, 10);
  vormen.push([mX, mY, 10, 0, 0.05, "driehoek", "eerste", 30, color(random(255), random(255), random(255))]); // x,y,grootte,rotatie,rotatiesnelheid,vorm,fase,tijd,kleur
  vormen.push([mX, mY, 10, 0, 0.05, "polygon", "eerste", 30, color(random(255), random(255), random(255))]); // x,y,grootte,rotatie,rotatiesnelheid,vorm,fase,tijd,kleur
  
  for (let i = 0; i < vormen.length; i++) {
    let x = vormen[i][0];
    let y = vormen[i][1];
    let grootte = vormen[i][2];
    let rotatie = vormen[i][3];
    let rotatiesnelheid = vormen[i][4];
    let vorm = vormen[i][5];
    let fase = vormen[i][6];
    let tijd = vormen[i][7];
    let kleur = vormen[i][8];

    rotatie += rotatiesnelheid;
    if (fase == "eerste") {
      grootte += 1
      if (grootte > 20) {
        grootte = 20;
        fase = "hoogste"
      }
    }
    if (fase == "hoogste") {
     tijd--
     if (tijd <= 0) {
      tijd = 0;
      fase = "laatste";
     }
    }
    if (fase == "laatste") {
      grootte--
      if (grootte <= 0) {
        grootte = 0
        fase = "verwijderen"
      }
    }
    vormen[i][2] = grootte;
    vormen[i][3] = rotatie;
    vormen[i][6] = fase;
    vormen[i][7] = tijd;
    vormen[i][8] = kleur;

    if (fase === "verwijderen") {
      vormen.splice(i, 1);
      i--;
      continue;
    }

    push();
    translate(x, y);
    rotate(rotatie);
    drawShape(vorm, grootte);
    pop();
  }
}

function drawShape(vorm, grootte) {
  fill(kleur);
  if (vorm == "driehoek") {
    triangle(0,-grootte,-grootte,grootte,grootte,grootte);
  }

  if (vorm == "polygon") {
    beginShape();
    for (let i = 0; i < 6; i++) {
      let angle = TWO_PI/6*i;
      let x = cos(angle) * grootte;
      let y = sin(angle) * grootte;  
      vertex(x, y);
    }
    endShape(CLOSE);
  }
}