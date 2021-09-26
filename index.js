let gameStarted = false;
let timers = [...document.getElementsByClassName('timer-button')];
timers[0].classList.add('active');
let timerIntervals = [];
let turn = [5, 5];
let phase = 0;
let overlayText = ['Game Start', 'FIRE', 'FAMINE', 'FLOOD', 'Game End'];

document.getElementById('overlay').addEventListener('click', function () {
  this.classList.remove('show-overlay');
});

timers.forEach((item, index) => {
  item.addEventListener('click', () => {
    console.log(phase);
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
  timers[index].innerText = `${turn[index]} turns left`;
}

function newPhase() {
  let overlay = document.getElementById('overlay');
  setOverlayText(overlay);
  if (phase == 1) {
    cnv.show();
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
  overlay.classList.add('show-overlay');
  overlay.innerText =
    phase <= 2
      ? overlayText[phase]
      : phase > 2 && phase < 10
      ? overlayText[3]
      : overlayText[4];
}
