var mvRect, fxRect;

var rect3, rect4;

function setup() {
  createCanvas(800,400);

  fxRect = createSprite(400, 200, 60, 40);
  fxRect.debug = true;
  fxRect.shapeColor = "green";

  mvRect = createSprite(600, 300, 40, 60);
  mvRect.debug = true;
  mvRect.shapeColor = "green";

  rect3 = createSprite(200, 100, 40, 60);
  rect3.debug = true;
  rect3.shapeColor = "green";

  rect4 = createSprite(300, 100, 40, 60);
  rect4.debug = true;
  rect4.shapeColor = "green";
}

function draw() {
  background("lightyellow");  

  mvRect.x = mouseX;
  mvRect.y = mouseY;

  console.log(mvRect.x - fxRect.x);

  //calling new function
  var bool = isTouching( mvRect, rect4);

  if (bool) {
    
    mvRect.shapeColor = "red";
    rect4.shapeColor = "red";

  } else {
    
    mvRect.shapeColor = "green";
    rect4.shapeColor = "green";
  }

  drawSprites();
}


