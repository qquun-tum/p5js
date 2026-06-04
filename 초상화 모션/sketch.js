let pupilOffsetX = 0;
let pupilOffsetY = 0;
let blinkFrame = -1;
let blinkTimer = 0;
let nextBlink = 60;
let expression = 'neutral';

function setup() {
  createCanvas(600, 400);
  nextBlink = int(random(60, 180));
}

function draw() {
  background("#c9e0f2");

  noFill();
  stroke("#29211e");
  strokeWeight(50);
  arc(165, 149, 70, 70, radians(-10), radians(50));
  arc(214, 200, 70, 70, radians(130), radians(220));
  arc(170, 255, 70, 70, radians(-40), radians(50));
  arc(220, 255, 70, 70, radians(-10), radians(50));
  arc(433, 149, 70, 70, radians(130), radians(200));
  arc(390, 207, 70, 70, radians(-50), radians(50));
  arc(440, 255, 70, 70, radians(130), radians(220));
  arc(390, 255, 70, 70, radians(130), radians(200));
  line(290, 280, 350, 280);

  noStroke();
  fill("#f5f0f0");
  arc(300, 365, 140, 180, -PI, PI);
  fill("#fce8e1");
  arc(300, 275, 40, 25, 0, PI);
  arc(220, 200, 80, 70, HALF_PI, -HALF_PI);
  arc(380, 200, 80, 70, -HALF_PI, HALF_PI);

  fill("#29211e");
  ellipse(300, 130, 250, 220);

  fill("#e3c3b8");
  arc(300, 200, 190, 160, radians(15), radians(140));
  arc(380, 200, 80, 70, radians(15), radians(140));

  fill("#cfaea3");
  ellipse(300, 200, 190, 150);
  ellipse(289, 210, 160, 130);
  arc(216, 199, 80, 68, radians(70), radians(125));
  arc(380, 200, 80, 60, radians(10), radians(80));

  fill("#fce8e1");
  ellipse(300, 190, 200, 140);
  arc(297, 202, 190, 140, radians(0), radians(180));
  arc(212, 197, 80, 65, radians(10), radians(125));
  arc(380, 202, 80, 50, radians(4), radians(70));
  triangle(300, 100, 230, 140, 370, 140);

  noFill();
  stroke("#000000");
  strokeWeight(7);
  arc(250, 210, 55, 35, radians(185), radians(-15));
  arc(350, 210, 55, 35, radians(-165), radians(-5));

  pupilOffsetX = constrain((mouseX - 300) * 0.04, -6, 6);
  pupilOffsetY = constrain((mouseY - 195) * 0.04, -4, 4);

  fill("#000000");
  ellipse(253 + pupilOffsetX, 205 + pupilOffsetY, 30, 15);
  ellipse(347 + pupilOffsetX, 205 + pupilOffsetY, 30, 15);

  stroke("#544e4d");
  strokeWeight(9);
  noFill();
  arc(250, 180, 85, 35, radians(200), radians(-25));
  arc(350, 180, 85, 35, radians(-155), radians(-20));

  stroke("#29211e");
  strokeWeight(15);
  arc(337, 135, 90, 150, radians(130), radians(220));
  arc(360, 100, 80, 150, radians(90), radians(170));
  arc(400, 100, 100, 170, radians(100), radians(150));
  arc(410, 120, 70, 150, radians(100), radians(170));
  arc(215, 128, 100, 200, radians(-10), radians(50));
  arc(190, 130, 90, 130, radians(0), radians(60));

  strokeWeight(2);
  line(290, 240, 300, 250);
  line(310, 240, 300, 250);
  point(230, 240);
  point(300, 268);

  stroke("#dbcece");
  noFill();
  arc(300, 275, 40, 25, radians(10), radians(170));
  arc(300, 276, 50, 35, radians(13), radians(167));
  arc(300, 360, 90, 150, radians(130), radians(220));
  arc(300, 360, 90, 170, radians(-40), radians(90));

  noStroke();
  fill("#fce8e1");
  rect(230, 212, 70, 20);
  rect(310, 212, 70, 20);
  fill(255, 255, 255);
  circle(260 + pupilOffsetX, 201 + pupilOffsetY, 10);
  circle(352 + pupilOffsetX, 201 + pupilOffsetY, 10);

  stroke("#ffc9bf");
  strokeWeight(4);
  line(230, 214, 260, 214);
  line(340, 214, 370, 214);

  drawExpression();
  updateBlink();
  drawBlink();
}

function drawExpression() {
  if (expression === 'sad') {
    noStroke();
    fill("#fce8e1");
    rect(268, 230, 60, 30);
    fill("#dae5eb");
    circle(230, 220, 20);
    circle(370, 220, 20);
    stroke("#29211e");
    strokeWeight(2);
    noFill();
    arc(300, 250, 30, 20, PI, TWO_PI);
  } else if (expression === 'surprised') {
    noStroke();
    fill("#fce8e1");
    rect(268, 230, 66, 38);
    fill("#6e130c");
    ellipse(300, 245, 22, 28);
  }
}

function updateBlink() {
  if (blinkFrame >= 0) {
    blinkFrame = blinkFrame + 1;
    if (blinkFrame >= 24) {
      blinkFrame = -1;
      blinkTimer = 0;
      nextBlink = int(random(60, 180));
    }
  } else {
    blinkTimer = blinkTimer + 1;
    if (blinkTimer >= nextBlink) {
      blinkFrame = 0;
    }
  }
}

function drawBlink() {
  if (blinkFrame >= 0) {
    let t = blinkFrame / 7.0;
    if (blinkFrame >= 8 && blinkFrame < 16) {
      t = 1.0;
    } else if (blinkFrame >= 16) {
      t = (23 - blinkFrame) / 7.0;
    }
    t = constrain(t, 0, 1);
    noStroke();
    fill("#fce8e1");
    ellipse(250, 207, 86, 50 * t + 2);
    ellipse(347, 207, 86, 50 * t + 2);
  }
}

function keyPressed() {
    if (key === 's' || key === 'S') {
      expression = 'sad';
  }   else if (key === 'o' || key === 'O') {
      expression = 'surprised';
  }   else if (key === 'n' || key === 'N') {
      expression = 'neutral';
  }  
    if (key === 'g') {
        saveGif('sketch', 10);
    }
}