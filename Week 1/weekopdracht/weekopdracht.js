function setup() {
  createCanvas(1200, 800);
  console.log("ik kom voor je kinderen");
  console.log("ik kom voor je kinderen");
  console.log("ik kom voor je kinderen");
  console.log("ik kom voor je kinderen");
  console.log("ik kom voor je kinderen");
}

function draw() {
  background(210);
  fill ('red');
  text ('Sam Tonus', 40 , 50 );
  textSize (32);

  // gebruik stroke om rande toe te 
  strokeWeight (2);
  stroke ('black');
  rect (60, 200, 30, 30);
  noStroke()
  fill ('black');
  rect (60, 100, 90, 20);
  fill ('red');
  rect (60, 120, 90, 20);
  fill ('yellow');
  rect (60, 140, 90, 20);

  // schaakbord
  fill ('black');
  rect (60, 200, 10 ,10 )
  fill ('white');
  rect (70, 200, 10 ,10 )
  fill ('black');
  rect (80, 200, 10 ,10 )
  fill ('white');
  rect (60, 210, 10 ,10 )
  fill ('black');
  rect (70, 210, 10 ,10 )
  fill ('white');
  rect (80, 210, 10 ,10 )
  fill ('black');
  rect (60, 220, 10 ,10 )
  fill ('white');
  rect (70, 220, 10 ,10 )
  fill ('black');
  rect (80, 220, 10 ,10 )
  fill ('white');

    //huis
    stroke ('black');
  strokeWeight (2);
  fill ('red');
  fill (210, 0, 0, 0);
  rect (60, 280, 30, 30);
  triangle (60, 280, 90, 280, 75, 260);

  // stoplicht
  noStroke();
  fill ('gray');
  rect (252, 20, 30, 70);
   rect (257, 90, 20, 30);
   fill ('red');
   circle (267, 35, 18);
   fill ('orange');
   circle (267, 57, 18);
   fill ('limegreen');
   circle (267, 79, 18);

   // dice
   stroke ('black');
   fill ('white');
   square (200, 190, 60, 10);
   fill ('black');
   circle (213, 203, 16);
   circle (245, 235, 16);
    circle (245, 203, 16);
   circle (229, 219, 16);
   circle (213, 235, 16);
   
  
   //mario 
   fill ('white');
   rect (365, 150, 150, 200);
   noStroke();
   rect (400, 200, 5, 5);
  rect (400, 205, 5, 5);
  rect (400, 210, 5, 5);
  rect (400, 215, 5, 5);
  fill   ('red');
  rect (405, 200, 5, 5);
  rect (410, 200, 5, 5);
  rect (405, 205, 5, 5);
  rect (410, 195, 25, 5);
  rect (420, 190, 40, 5);
  rect (430, 185, 20, 5);
  rect (450, 195, 20, 5);
  rect (465, 200, 10, 5);
  rect (470, 205, 5, 5);
  fill ('#8B0000');
  rect (415, 200, 5, 5);
rect (420, 200, 5, 5);
rect (425, 200, 5, 5);
rect (430, 195, 5, 5);
rect (445, 195, 5, 5);
rect (450, 200, 5, 5);
rect (455, 200, 5, 5);
rect (460, 200, 5, 5);
rect (465, 205, 5, 5);
rect (470, 210, 5, 5);
rect (465, 215, 5, 5);
fill ('red');
rect (410, 210, 55, 5);
fill ('black');
rect (415, 205, 50, 5);
rect (415, 215, 50, 5);
rect (410, 210, 5, 5);
rect (465, 210, 5, 5);
rect (400, 200, 5, 15);
 fill ('#8B0000');
 rect (405, 210, 5, 5);
 rect (410, 215, 5, 5);
 rect (410, 205, 5, 5);
 fill ('black');
 rect (405, 215, 5, 5);
rect (405, 220, 5, 5);
rect (400, 215, 5, 5);
rect (415, 220, 5, 5);
rect (410, 225, 5, 5);
rect (410, 220, 5, 5);
rect (410, 230, 5, 5);
rect (395, 220, 5, 5);
rect (390, 225, 5, 5);
rect (390, 230, 5, 5);
rect (395, 235, 5, 5);
rect (400, 240, 5, 5);
rect (405, 240, 5, 5);
rect (405, 245, 5, 5);
rect (410, 250, 5, 5);
rect (410, 255, 5, 5);
rect (405, 255, 5, 5);
rect (400, 260, 5, 5);
rect (415, 255, 5, 5);
rect (420, 255, 5, 5);
rect (425, 260, 30, 5);
rect (455, 255, 20, 5);
rect (465, 250, 5, 5);
rect (470, 245, 5, 5);
rect (470, 240, 5, 5);
rect (475, 240, 5, 5);
rect (480, 235, 5, 5);
rect (485, 230, 5, 5);
rect (485, 225, 5, 5);
rect (480, 220, 5, 5);
rect (470, 215, 10, 5);
rect (475, 200, 5, 20);
rect (475, 215, 5, 5);
rect (460, 220, 15, 5);
rect (465, 225, 5, 10);
rect (445, 220, 5, 10);
rect (425, 220, 5, 10);
// dit is de rechter oog
rect (430, 180, 20, 5);
rect (420, 185, 10, 5);
rect (450, 185, 10, 5);
rect (410, 190, 10, 5);
rect (405, 195, 5, 5);
rect (460, 190, 10, 5);
rect (470, 195, 5, 5);
rect (450, 235, 5, 15);
rect (425, 235, 5, 15);
rect (420, 245, 40, 5);
rect (430, 250, 20, 5);
rect (415, 240, 15, 5);
rect (450, 240, 15, 5);

fill ('#E8BEAC');
rect (430, 220, 15, 15);
rect (415, 225, 10, 15);
rect (455, 225, 10, 15);
rect (455, 220, 5, 5);
rect (400, 220, 5, 15);
rect (405, 225, 5, 10);
rect (405, 235, 10, 5);
rect (475, 220, 5, 15);
rect (470, 225, 5, 15);
rect (450, 250, 5, 5);
rect (425, 255, 20, 5);
fill ('#cf8a6c');
rect (445, 255, 10, 5);
rect (455, 250, 10, 5);
rect (460, 245, 10, 5);
rect (465, 235, 5, 15);
rect (430, 235, 20, 10);
rect (475, 235, 5, 5);
rect (480, 225, 5, 10);
rect (395, 225, 5, 10);
rect (400, 235, 5, 5);
rect (410, 245, 10, 5);
rect (415, 250, 15, 5);
rect (410, 240, 5, 5);

fill ('white'); 
rect (450, 220, 5, 15);
rect (445, 230, 5, 5);
rect (425, 230, 5, 5);
rect (430, 220, 5, 15);
rect (430, 220, 5, 15);

fill ('black');
rect (475, 260, 5, 5);
rect (480, 265, 5, 10);
rect (395, 265, 5, 10);
rect (485, 275, 5, 10);
rect (390, 275, 5, 10);
rect (395, 285, 5, 15);
rect (400, 300, 15, 5);
rect (415, 285, 5, 15);
rect (410, 285, 10, 5);
rect (410, 270, 5, 15);
// andere kant hand

rect (480, 285, 5, 15);
rect (465, 300, 15, 5);
rect (460, 285, 5, 15);
rect (465, 270, 5, 15);
rect (460, 285, 10, 5);

// upper clothing
fill ('yellow');
rect (455, 270, 10, 5);
rect (415, 270, 10, 5);
fill ('#ffc400');
rect (455, 275, 10, 5);
rect (415, 275, 10, 5);



fill ('#4c9aca');
rect (455, 260, 10, 10);
rect (450, 265, 5, 10);
rect (425, 265, 5, 10);
rect (415, 260, 10, 10);
rect (420, 285, 40, 20);
rect (425, 280, 30, 5);
rect (415, 300, 50, 10);
rect (425, 310, 5, 5);
rect (450, 310, 5, 5);



fill ('blue');
rect (415, 280, 10, 5);
rect (425, 275, 5, 5);
rect (410, 260, 5, 15);
rect (465, 260, 5, 15);
rect (450, 275, 5, 5);
rect (455, 280, 10, 5);
rect (455, 310, 15, 5);
rect (410, 310, 15, 5);
rect (465, 305, 5, 5);
rect (410, 305, 5, 5);
rect (425, 315, 10, 5);
rect (445, 315, 10, 5);
rect (445, 315, 10, 5);
rect (445, 305, 5, 10);
rect (430, 305, 5, 10);
rect (430, 305, 15, 5);
 
fill ('black');
rect (435, 310, 10, 10);
rect (430, 320, 5, 10);
rect (445, 320, 5, 10);
rect (395, 325, 5, 10);
rect (395, 330, 35, 5);
rect (400, 320, 5, 5);
rect (405, 305, 5, 10);
rect (405, 310, 5, 10);
//rechter kant
rect (450, 330, 35, 5);
rect (475, 320, 5, 5);
rect (480, 325, 5, 10);
rect (470, 305, 5, 15);

fill ('blue');
rect (450, 300, 5, 5);
rect (425, 300, 5, 5);

fill ('red');
rect (455, 315, 15, 5);
rect (410, 315, 15, 5);
rect (405, 325, 20, 5);
rect (455, 325, 20, 5);

fill ('#ffc400');
rect (465, 320, 10, 5);
rect (405, 320, 10, 5);

 fill ('#8B0000');
 rect (415, 320, 15, 5);
rect (450, 320, 15, 5);
rect (425, 325, 5, 5);
rect (400, 325, 5, 5);
rect (450, 325, 5, 5);
rect (475, 325, 5, 5);




fill ('red');
rect (470, 265, 10, 10);
rect (470, 260, 5, 5);
rect (480, 275, 5, 10);
rect (470, 275, 10, 5);
rect (400, 265, 10, 10);
rect (405, 260, 5, 5);
rect (395, 275, 5, 10);
rect (395, 275, 15, 5);
rect (430, 265, 20, 10);

 fill ('#8B0000');
 rect (430, 275, 20, 5);
 rect (400, 280, 10, 5);
rect (400, 285, 5, 5);
rect (475, 285, 5, 5);
 rect (470, 280, 10, 5);
 

}