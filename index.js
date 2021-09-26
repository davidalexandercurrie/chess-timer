let gameStarted = false;
let timers = [...document.getElementsByClassName('timer-button')];
timers[0].classList.add('active');
let counts = [600, 600];
let timerIntervals = [];
let turn = 1;

timers.forEach((item, index) => {
  item.addEventListener('click', () => {
    pressButton(item, index);
    if (!gameStarted) {
      gameStarted = true;
      makeTimer(item, index);
    } else {
      clearInterval(timerIntervals[index * -1 + 1]);
      makeTimer(item, index);
    }
    if (index == 0) {
      turn++;
    }
    document.getElementById('turn-number').innerText = `Turn ${turn}`;
  });
});

function pressButton(item, index) {
  item.classList.add('active');
  timers[index * -1 + 1].classList.remove('active');
}

function makeTimer(item, index) {
  timerIntervals[index] = setInterval(() => {
    counts[index * -1 + 1]--;
    console.log(counts[0]);
    item.innerText = `${Math.floor(counts[index * -1 + 1] / 60)}:${
      counts[index * -1 + 1] % 60
    }`;
    console.log(timerIntervals);
  }, 1000);
}
