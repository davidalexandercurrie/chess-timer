let gameStarted = false;
let timers = [...document.getElementsByClassName('timer-button')];
let timerText = [...document.getElementsByClassName('timer-text')];
timers[0].classList.add('active');
let timerIntervals = [];
let turn = [5, 5];
let phase = 0;
let overlayText = ['Game Start', 'FIRE', 'FAMINE', 'FLOOD', 'Game End'];

document.getElementById('overlay').addEventListener('click', function () {
  this.classList.remove('visible');
});

document.getElementById('reset-button').addEventListener('click', function () {
  phase = 0;
  turn = [5, 5];
  document.getElementById('player-2').classList.add('active');
  document.getElementById('player-1').classList.remove('active');
  for (let index = 0; index < 2; index++) {
    timerText[index].innerText = `${turn[index]} turns left`;
  }
  createBoard();
});

document
  .getElementById('sketch-container')
  .addEventListener('click', function () {
    this.style.visibility = 'hidden';
  });

timers.forEach((item, index) => {
  item.addEventListener('click', () => {
    pressButton(item, index);
    turn[index]--;
    if (!gameStarted) {
      gameStarted = true;
      turnCount(index);
    } else {
      turnCount(index);
    }
    if (turn[0] == 0 && turn[1] == 0) {
      phase++;
      newPhase();
    }
  });
});

function pressButton(item, index) {
  item.classList.add('active');
  timers[index * -1 + 1].classList.remove('active');
}

function turnCount(index) {
  timerText[index].innerText = `${turn[index]} turns left`;
}

function newPhase() {
  let overlay = document.getElementById('overlay');
  setOverlayText(overlay);
  if (phase == 1) {
    document.getElementById('sketch-container').style.visibility = 'visible';
    resetPhase(7);
  } else if (phase == 2) {
    resetPhase(7);
  } else if (phase >= 3) {
    resetPhase(2);
  }
}

function resetPhase(inc) {
  turn.forEach((item, index, arr) => {
    arr[index] += inc;
    turnCount(index);
  });
}

function setOverlayText(overlay) {
  overlay.classList.add('visible');
  overlay.innerText =
    phase <= 2
      ? overlayText[phase]
      : phase > 2 && phase < 10
      ? overlayText[3]
      : overlayText[4];
}
