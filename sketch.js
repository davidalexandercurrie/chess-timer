let cnv;
let board = [];

function setup() {
  cnv = createCanvas(windowWidth, windowHeight);
  cnv.parent('sketch-container');

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

// function windowResized() {
//   resizeCanvas(windowWidth, windowHeight);
// }

window.addEventListener('orientationchange', function (event) {
  console.log(
    'the orientation of the device is now ' +
      event.target.screen.orientation.angle
  );
  resizeCanvas(windowWidth, windowHeight);
});

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
}

function rand(min, max, num) {
  let arr = [];
  let vals = [];
  for (let i = 0; i < max - min + 1; i++) {
    arr[i] = min + i;
  }

  for (let i = 0; i < num; i++) {
    let r = Math.floor(random(arr.length));
    board[arr[r]] = 1;
    vals.push(arr[r]);
    arr.splice(r, 1);
  }
}
