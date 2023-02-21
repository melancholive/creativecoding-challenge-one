int xLoc, yLoc;
int shapeWidth = 50;
int incrementX;
int incrementY;
boolean onRight;
boolean onBot;
boolean onLeft;

void setup() {
  size(900, 900);
  xLoc = 0;
  yLoc = 0;
  incrementX = 15;
  incrementY = 15;
}


void draw() {
  background(0);
  stroke(0, 200, 127);
  strokeWeight(4);
  fill(200, 127, 200);
  ellipse(xLoc, yLoc, shapeWidth, shapeWidth);
  if ( xLoc < width && yLoc == 0 ){
		// when x < width and the ball is at the top, increase x
    xLoc += incrementX;
  } else if ( xLoc == width && yLoc < height ){
		// when x = width and y < height, increase y
    yLoc += incrementY;
  } else if ( xLoc == width && yLoc == height ){
		// when x and y are both at max, then the ball is on the bottom ( set to true )
		// minus one increment of x to keep loop going
    onBot = true;
    xLoc -= incrementX;
  } else if ( xLoc == 0 && yLoc == height ) {
		// when the ball is in the bottom left corner, onBot becomes false and onLeft becomes true
		// then minus one increment of y to keep loop going
    onBot = false;
    onLeft = true;
    yLoc -= incrementY;
  } else if ( onBot == true ){
		// when the ball is on the bottom, decrease xLoc
    xLoc -= incrementX;
  } else if (onLeft == true){
		// when the ball is on the left, decrease yLoc
    yLoc -= incrementY;
  }
    

  print("xLoc is: ");
  println(xLoc);
}