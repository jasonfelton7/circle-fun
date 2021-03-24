let t;
let increment = 0.001; 

function setup() {
  createCanvas(windowWidth, windowHeight);
  strokeWeight(2);
  noFill();
  t = 0;
}

function draw() {
    frameRate(30);
    background(0, 15);

    stroke(255, 0, 0);
    makeCircle(4, 50, 300);

    stroke(0, 0, 255);
    makeCircle(0, 200, 100);

    stroke(0, 255, 0);
    makeCircle(100, 200, 1);

    stroke(255, 128, 0);
    makeCircle(40, 100, 50);

    stroke(128, 255, 0);
    makeCircle(60, 75, 30);

    stroke(0, 255, 128);
    makeCircle(150, 150, 20);

    stroke(0, 255, 255);
    makeCircle(10, 45, 70);

    stroke(0, 128, 255);
    makeCircle(90, 210, 150);

    stroke(127, 0, 255);
    makeCircle(170, 130, 40);

    stroke(255, 0, 255);
    makeCircle(25, 65, 55);

    stroke(255, 0, 127);
    makeCircle(105, 110, 120);
}

function makeCircle(xPos, yPos, circleSize) { 
  let x = width * noise(t + xPos);
  let y = height * noise(t + yPos);
  let size = width * noise(t + circleSize);

  ellipse(x, y, size/4, size/4);

  t += increment;
}