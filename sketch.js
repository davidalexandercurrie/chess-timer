let cnv;
let board = [];

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
  createBoard();
}

function draw() {
  background(255);
  rotate(PI / 2);
  translate(0, -height - (width - height) / 2);
  for (let x = 0; x < 8; x++) {
    for (let y = 0; y < 8; y++) {
      if (board[y * 8 + x]) {
        fill('orange');
      } else {
        fill('white');
      }
      square((height / 8) * x, (height / 8) * y, height / 8);
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  centerCanvas();
}

function createBoard() {
  for (let i = 0; i < 64; i++) {
    board[i] = 0;
  }
  rand(0, 2, 2);
  rand(5, 7, 2);
  rand(56, 58, 2);
  rand(61, 63, 2);
  for (let i = 0; i < 4; i++) {
    rand(8 + i * 2, 9 + i * 2, 1);
  }
  for (let i = 0; i < 4; i++) {
    rand(48 + i * 2, 49 + i * 2, 1);
  }
  rand(16, 19, 1);
  rand(20, 23, 1);
  rand(40, 43, 1);
  rand(44, 47, 1);
  console.log(board);
}

function rand(min, max, num) {
  let arr = [];
  let vals = [];
  for (let i = 0; i < max - min + 1; i++) {
    arr[i] = min + i;
  }
  console.log(arr);

  for (let i = 0; i < num; i++) {
    let r = Math.floor(random(arr.length));
    console.log(r);
    board[arr[r]] = 1;
    vals.push(arr[r]);
    arr.splice(r, 1);
  }
  console.log(vals);
}
