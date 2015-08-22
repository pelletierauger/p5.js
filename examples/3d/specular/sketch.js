function setup(){
  createCanvas(windowWidth, windowHeight, 'webgl');
}

function draw(){
  background(0);

  camera(width/2, 0, 800);
  perspective(60 / 180 * Math.PI, width/height, 0.1, 100);

  var dirY = (mouseY / height - 0.5) * (-2);
  var dirX = (mouseX / width - 0.5) *2;

  ambientLight(50);
  //directionalLight(250, 0, 0, dirX, -dirY, 0.25);
  //directionalLight(0, 250, 0, 0, 0, 0.25);
  pointLight(0, 0, 250, 70, 70, 0);
  pointLight(250, 0, 0, -70, -70, 0);
  pointLight(200, 200, 200, dirX, dirY, 0);

  push();
  rotateZ(frameCount * 0.02);
  rotateX(frameCount * 0.02);
  rotateY(frameCount * 0.02);
  specularMaterial(250);
  plane(80, 80);
  pop();
  translate(250, 0, 0);
  push();
  rotateZ(frameCount * 0.02);
  rotateX(frameCount * 0.02);
  rotateY(frameCount * 0.02);
  box(80, 80, 80);
  pop();
  translate(250, 0, 0);
  push();
  rotateZ(frameCount * 0.02);
  rotateX(frameCount * 0.02);
  rotateY(frameCount * 0.02);
  cylinder(80, 80);
  pop();
  translate(250, 0, 0);
  push();
  rotateZ(frameCount * 0.02);
  rotateX(frameCount * 0.02);
  rotateY(frameCount * 0.02);
  cone(80, 80);
  pop();
  translate(250, 0, 0);
  push();
  rotateZ(frameCount * 0.02);
  rotateX(frameCount * 0.02);
  rotateY(frameCount * 0.02);
  torus(80, 20);
  pop();
  translate(250, 0, 0);
  push();
  rotateZ(frameCount * 0.02);
  rotateX(frameCount * 0.02);
  rotateY(frameCount * 0.02);
  sphere(80, 80);
  pop();
}