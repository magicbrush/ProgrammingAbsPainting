function setup()
{
  createCanvas(300,450);
}

function draw()
{
  background(215,205,190);
  
  rectMode(CENTER);
  
  // draw black square
  noStroke();
  fill(0);
  //resetMatrix(); 
  rect(115,155,130,130);
  
  push();
  // draw red square
  fill(170,0,0);
  translate(180,300);
  rotate(-TWO_PI/24);
  rect(0,0,100,100);
  pop();
}