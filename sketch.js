let circles = [];
const totalCircles = 150;

class Circle {
  constructor (x, y, gravity, radius) {
    this.x = x;
    this.y = y;
    this.gravity = gravity;
    this.radius = radius;
    this.r = random(255);
    this.g = random(255);
    this.b = random(255);
  }
  show () {
    ellipse(this.x, this.y, this.radius);
  }

}

function setup () {
  createCanvas(800,600);
  for (let i = 0; i < totalCircles; i++) {
    let newCircle = new Circle(random(width), random(height), random(2, 10), random(50));
    circles.push(newCircle);
  }
}

function draw () {
  background(0);
  fill(255, 0, 0, 100);
  noStroke();
  for (let i = 0; i < circles.length; i++) {
    fill(circles[i].r, circles[i].g, circles[i].b,  100);
    circles[i].show();
    circles[i].y += circles[i].gravity;
    if (circles[i].y > height+10) {
      let newCircle = new Circle(random(width), -10, circles[i].gravity, circles[i].radius);
      circles[i] = newCircle;
      circles[i].r = random(255);
      circles[i].g = random(255);
      circles[i].b = random(255);
    }
  }
}
