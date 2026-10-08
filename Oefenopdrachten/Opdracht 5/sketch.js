


function setup() {
  createCanvas(800, 400);
}

function draw() {
  background(220);

  
  tekenHuis (400, 200, 100);
  tekenHuis (100, 200, 100);
}
function tekenHuis(x, y, grootte) {
  
  
  fill('red');
  triangle (x - 4 ,y, 
    x+grootte + 4 ,y, 
    x+grootte*0.5  ,y - 100  );
    
  fill ('blue');
  rect  (x,y,grootte);
  fill ('black'); 
  rect (x + grootte*0.2, y + grootte*0.5, grootte*0.2, grootte*0.5); 
  fill ('lightblue');
  rect (x + grootte*0.4, y + grootte*0.2, grootte*0.5, grootte*0.2);
}
