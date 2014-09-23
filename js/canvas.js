var canvas1 = document.getElementById('c1');
var c1 = canvas1.getContext('2d');

var canvas2 = document.getElementById('c2');
var c2 = canvas2.getContext('2d');

drawTemplateOutline();
drawFoldLines();
drawKeys();
drawFoldText();

drawTemplateOutline2();
drawKeys2();
drawDividers();
drawChords();


// main template

function drawTemplateOutline() {
  c1.beginPath();
  c1.lineWidth = 4;
  c1.moveTo(50, 50);
  c1.lineTo(50, 375);
  c1.lineTo(950, 375);
  c1.lineTo(950, 50);
  c1.lineTo(50, 50);
  c1.closePath();
  c1.stroke();
}

function drawFoldLines() {
  c1.setLineDash([10]);
  c1.lineWidth = 2;
  c1.moveTo(175, 50);
  c1.lineTo(175, 375);
  c1.stroke();
  c1.moveTo(825, 50);
  c1.lineTo(825, 375);
  c1.stroke();
}

function drawKeys() {
  c1.beginPath();
  c1.setLineDash([0]);
  c1.lineWidth = 2;
  c1.moveTo(268, 50);
  c1.lineTo(268, 375);
  c1.moveTo(361, 50);
  c1.lineTo(361, 375);
  c1.moveTo(454, 50);
  c1.lineTo(454, 375);
  c1.moveTo(547, 50);
  c1.lineTo(547, 375);
  c1.moveTo(640, 50);
  c1.lineTo(640, 375);
  c1.moveTo(733, 50);
  c1.lineTo(733, 375);
  c1.stroke();

  c1.save();
  c1.textAlign = "center";
  c1.font = "24pt Arial";
  c1.fillText("C", 222, 360);
  c1.restore();

  c1.save();
  c1.textAlign = "center";
  c1.font = "24pt Arial";
  c1.fillText("D", 315, 360);
  c1.restore();

  c1.save();
  c1.textAlign = "center";
  c1.font = "24pt Arial";
  c1.fillText("E", 408, 360);
  c1.restore();

  c1.save();
  c1.textAlign = "center";
  c1.font = "24pt Arial";
  c1.fillText("F", 501, 360);
  c1.restore();

  c1.save();
  c1.textAlign = "center";
  c1.font = "24pt Arial";
  c1.fillText("G", 594, 360);
  c1.restore();

  c1.save();
  c1.textAlign = "center";
  c1.font = "24pt Arial";
  c1.fillText("A", 687, 360);
  c1.restore();

  c1.save();
  c1.textAlign = "center";
  c1.font = "24pt Arial";
  c1.fillText("B", 780, 360);
  c1.restore();

}

function drawFoldText() {
  c1.save();
  c1.translate(170, 212);
  c1.rotate(-Math.PI/2);
  c1.textAlign = "center";
  c1.fillText("FOLD", 0, 0);
  c1.restore();

  c1.save();
  c1.translate(830, 212);
  c1.rotate(Math.PI/2);
  c1.textAlign = "center";
  c1.fillText("FOLD", 0, 0);
  c1.restore();

}

  // end main template

  // chord template
  function drawTemplateOutline2() {
    c2.beginPath();
    c2.lineWidth = 4;
    c2.moveTo(175, 50);
    c2.lineTo(175, 325);
    c2.lineTo(825, 325);
    c2.lineTo(825, 50);
    c2.lineTo(175, 50);
    c2.closePath();
    c2.stroke();
  }

  function drawKeys2() {
    c2.beginPath();
    c2.setLineDash([0]);
    c2.lineWidth = 2;
    c2.moveTo(268, 50);
    c2.lineTo(268, 325);
    c2.moveTo(361, 50);
    c2.lineTo(361, 325);
    c2.moveTo(454, 50);
    c2.lineTo(454, 325);
    c2.moveTo(547, 50);
    c2.lineTo(547, 325);
    c2.moveTo(640, 50);
    c2.lineTo(640, 325);
    c2.moveTo(733, 50);
    c2.lineTo(733, 325);
    c2.stroke();
  }

  function drawDividers() {
    c2.beginPath();
    c2.moveTo(175, 142);
    c2.lineTo(825, 142);
    c2.moveTo(175, 233);
    c2.lineTo(825, 233);
    c2.stroke();
  }

  function drawChords() {
    c2.beginPath();
    c2.arc(222, (325-233)/2 + 233, 15, 0, 2 * Math.PI, false);
    c2.fill();

    c2.beginPath();
    c2.arc(408, (325-233)/2 + 233, 15, 0, 2 * Math.PI, false);
    c2.fill();

    c2.beginPath();
    c2.arc(594, (325-233)/2 + 233, 15, 0, 2 * Math.PI, false);
    c2.fill();

      //

      c2.beginPath();
      c2.arc(222, (233-142)/2 + 142, 15, 0, 2 * Math.PI, false);
      c2.fill();

      c2.beginPath();
      c2.arc(501, (233-142)/2 + 142, 15, 0, 2 * Math.PI, false);
      c2.fill();

      c2.beginPath();
      c2.arc(687, (233-142)/2 + 142, 15, 0, 2 * Math.PI, false);
      c2.fill();

      //

      c2.beginPath();
      c2.arc(315, (142-50)/2 + 50, 15, 0, 2 * Math.PI, false);
      c2.fill();

      c2.beginPath();
      c2.arc(594, (142-50)/2 + 50, 15, 0, 2 * Math.PI, false);
      c2.fill();

      c2.beginPath();
      c2.arc(780, (142-50)/2 + 50, 15, 0, 2 * Math.PI, false);
      c2.fill();

    }