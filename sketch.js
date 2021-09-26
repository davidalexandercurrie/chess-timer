var cnv;

function centerCanvas() {
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);
}

function setup() {
  cnv = createCanvas(windowWidth, windowHeight);
  centerCanvas();
  cnv.hide();
  cnv.mousePressed(() => {
    cnv.hide();
  });
}

function draw() {
  background(255);
  for (let x = 0; x < 8; x++) {
    for (let y = 0; y < 8; y++) {
      square(
        (height / 8) * x + (width - height) / 2,
        (height / 8) * y,
        height / 8
      );
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  centerCanvas();
}
