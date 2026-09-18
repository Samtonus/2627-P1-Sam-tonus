
let timer = 0;

let blokje = 0
let cIngedrukt = 0

let licht = 0
let enterIngedrukt = 0



function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  if (enterIngedrukt) {
    licht = 1
  
    

  }


function keypressed () {

  
}





  fill ('grey');
  noStroke ()
rect (200,300,30,80,)
rect (180,120,70,180,)

fill ('black');
circle (215,270,50,20,);

if (enterIngedrukt == 1) {
  fill ('green');
  circle (215,270,50,20,);
}


fill ('black');
circle (215,210,50,20,);
 
if (enterIngedrukt == 2) {
  fill ('orange')
  stroke (3)
  circle (215,210,50,20,);
}

fill ('black');
circle (215,150,50,20,);

if (enterIngedrukt == 0) {
fill ('red')
stroke (3)
circle (215,150,50,20,);
}




if (cIngedrukt === 1) {
  
  rect (10,10,60,60 );
}

console.log ('enterIngedrukt: '+ enterIngedrukt)
}

function keyPressed() {
  if (key === 'c') {
    // Code to run.
    console.log ('als c is inngedrukt');
    cIngedrukt = 1
    
  }

  if (keyCode === ENTER) { // Enter key
    // Code to run.
    console.log ('enter is ingedrukt');
    enterIngedrukt += 1
    
  }
  if (enterIngedrukt == 3 ) {
    enterIngedrukt = 0
    
  }
}


function keyReleased() {
  if (key === 'c') {
    // Code to run.
    console.log ('als c is inngedrukt');
    cIngedrukt = 0
  }

  if (keyCode === 13) { // Enter key
    // Code to run.
  }




}


  


