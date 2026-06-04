let starDiam = 0;
let angle1   = 0;
let angle2   = 0;
let bd1      = 0;
let bd2      = 0
let triX = 500, triY = 60;
let r1X  = 50,  r1Y  = 160;
let r2X  = 570, r2Y  = 180;
let r3X  = 470, r3Y  = 350;
let triCol, r1Col, r2Col, r3Col;
let dotColors = [];
let dotWs     = [];
let arcProg = [0, 0, 0, 0, 0];
let e1, e3;

function setup() {
  createCanvas(600, 400);
  background(20);

  for (let i = 0; i < 5; i++) {
    dotColors.push(color(255, 255, 255));
    dotWs.push(random(3, 8));
  }

  triCol = color(255, 255, 255);
  r1Col  = color(255, 255, 255);
  r2Col  = color(255, 255, 255);
  r3Col  = color(255, 255, 255);

  e1 = PI + 7  * TWO_PI;
  e3 = PI + 11 * TWO_PI;
}

function draw() {
  background(20);

  starDiam += 0.3;
  starDiam %= 250;

  angle1 += 0.5;
  angle2 -= 0.3;

  bd1 += 1;
  bd1 %= 310;
  bd2 += 1.5;
  bd2 %= 295;

  if (frameCount % 5 == 0) {
    triX  = constrain(triX  + int(random(-5, 5)), 490, 525);
    triY  = constrain(triY  + int(random(-5, 5)), 40,  80);
    r1X   = constrain(r1X   + int(random(-5, 5)), 30,  75);
    r1Y   = constrain(r1Y   + int(random(-5, 5)), 145, 185);
    r2X   = constrain(r2X   + int(random(-5, 5)), 555, 590);
    r2Y   = constrain(r2Y   + int(random(-5, 5)), 165, 200);
    r3X   = constrain(r3X   + int(random(-5, 5)), 455, 490);
    r3Y   = constrain(r3Y   + int(random(-5, 5)), 335, 370);

    triCol = color(random(150, 255), random(150, 255), random(150, 255));
    r1Col  = color(random(150, 255), random(150, 255), random(150, 255));
    r2Col  = color(random(150, 255), random(150, 255), random(150, 255));
    r3Col  = color(random(150, 255), random(150, 255), random(150, 255));
  }

  if (frameCount % 3 == 0) {
    for (let i = 0; i < 5; i++) {
      dotColors[i] = color(random(100, 255), random(100, 255), random(100, 255));
      dotWs[i]     = random(2, 10);
    }
  }

  let arcSpeeds = [0.004, 0.003, 0.006, 0.007, 0.005];
  for (let i = 0; i < 5; i++) {
    arcProg[i] += arcSpeeds[i];
    if (arcProg[i] > 1) arcProg[i] = 0;
  }

  strokeWeight(3);
  noStroke();
  for (let d = bd1; d > 0; d -= 15) {
    fill(0, 0, 0, 30);
    circle(300, 200, d);
  }
  for (let d = bd2; d > 0; d -= 15) {
    fill(0, 0, 0, 20);
    circle(300, 200, d);
  }
  fill(20, 20, 20);
  circle(300, 200, 270);

  let lw = map(starDiam, 0, 250, 3,  0.5);
  let lo = map(starDiam, 0, 250, 0, 25);

  strokeWeight(lw);
  stroke(100);
  line(120, 200+lo, 480, 200+lo);
  line(140, 190+lo, 460, 190+lo);
  line(160, 180+lo, 440, 180+lo);
  line(180, 170+lo, 420, 170+lo);
  line(140, 210+lo, 460, 210+lo);
  line(160, 220+lo, 440, 220+lo);
  line(180, 230+lo, 420, 230+lo);

  stroke(70);
  line(200, 120+lo, 300, 200+lo);
  line(220, 110+lo, 300, 200+lo);
  line(240, 105+lo, 300, 200+lo);
  line(400, 120+lo, 300, 200+lo);
  line(380, 110+lo, 300, 200+lo);
  line(360, 105+lo, 300, 200+lo);
  line(160, 180+lo, 280, 210+lo);
  line(200, 170+lo, 290, 210+lo);
  line(240, 165+lo, 295, 205+lo);
  line(440, 180+lo, 320, 210+lo);
  line(400, 170+lo, 310, 210+lo);
  line(360, 165+lo, 305, 205+lo);
  line(160, 220+lo, 280, 190+lo);
  line(200, 230+lo, 290, 190+lo);
  line(240, 235+lo, 295, 195+lo);
  line(440, 220+lo, 320, 190+lo);
  line(400, 230+lo, 310, 190+lo);
  line(360, 235+lo, 305, 195+lo);

  let ra1 = radians(angle1);
  let ra2 = radians(angle2);

  stroke(180);
  strokeWeight(3);
  noFill();
  quad(300 + 100*sin(ra1), 200 - 100*cos(ra1),
       300 + 200*cos(ra1), 200 + 200*sin(ra1),
       300 - 100*sin(ra1), 200 + 100*cos(ra1),
       300 - 200*cos(ra1), 200 - 200*sin(ra1));
  quad(300 + 90*sin(ra2),  200 - 90*cos(ra2),
       300 + 190*cos(ra2), 200 + 190*sin(ra2),
       300 - 90*sin(ra2),  200 + 90*cos(ra2),
       300 - 190*cos(ra2), 200 - 190*sin(ra2));
  
  stroke(255);
  strokeWeight(5);
  fill(148, 177, 224);
  ellipse(300, 170, starDiam, starDiam);

  noFill();
  strokeWeight(dotWs[0]);
  stroke(dotColors[0]);
  circle(30 + random(-2, 2), 30 + random(-2, 2), 2);

  strokeWeight(dotWs[1]);
  stroke(dotColors[1]);
  circle(90 + random(-2, 2), 100 + random(-2, 2), 2);

  strokeWeight(dotWs[2]);
  stroke(dotColors[2]);
  circle(200 + random(-2, 2), 50 + random(-2, 2), 2);

  strokeWeight(dotWs[3]);
  stroke(dotColors[3]);
  point(460 + random(-2, 2), 20 + random(-2, 2));

  strokeWeight(dotWs[4]);
  stroke(dotColors[4]);
  point(100 + random(-2, 2), 300 + random(-2, 2));

  noFill();
  strokeWeight(6);

  stroke(triCol);
  triangle(triX, triY, triX+10, triY-10, triX, triY-10);

  stroke(r1Col);
  rect(r1X, r1Y, 3);

  stroke(r2Col);
  rect(r2X, r2Y, 2);

  stroke(r3Col);
  rect(r3X, r3Y, 2);

  stroke(255);
  strokeWeight(1);
  noFill();

  let v  = frameCount * 4;
  let a = 7;

  circle(300,  330 + sin(radians(v))        * a, 2);
  ellipse(280, 320 + sin(radians(v +  40))  * a, 2, 5);
  ellipse(320, 320 + sin(radians(v -  40))  * a, 2, 5);
  ellipse(260, 310 + sin(radians(v +  80))  * a, 2, 7);
  ellipse(340, 310 + sin(radians(v -  80))  * a, 2, 7);
  ellipse(240, 300 + sin(radians(v + 120))  * a, 2, 9);
  ellipse(360, 300 + sin(radians(v - 120))  * a, 2, 9);

  fill("#eba9c8");
  stroke("#eba9c8");
  arc(150, 50,  40, 40, 45, map(arcProg[0], 0, 1, 45.01, e1));

  fill("#d67287");
  stroke("#c24f6c");
  arc(480, 300, 50, 50, 60, map(arcProg[1], 0, 1, 60.01, 90));

  noFill();
  stroke("#7bc2e3");
  arc(60,  330, 20, 20, 70, map(arcProg[2], 0, 1, 70.01, e3));

  stroke("#82d188");
  arc(130, 290, 20, 20, 10, map(arcProg[3], 0, 1, 10.01, 25));

  stroke("#e8df7d");
  arc(500, 140, 30, 30, 40, map(arcProg[4], 0, 1, 40.01, 50));
}
  
  function keyPressed() {
    if (key === 'g') {
      saveGif('20250473_이예원_추상화모션', 10);
    }
  }
