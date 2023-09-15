'use strict';

// My improved version
const playersEl = [
  document.querySelector('.player--0'),
  document.querySelector('.player--1'),
];
const scoresEl = [
  document.getElementById('score--0'),
  document.getElementById('score--1'),
];
const currentsEl = [
  document.getElementById('current--0'),
  document.getElementById('current--1'),
];

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let scores, currentScore, activePlayer, playing;

const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  scoresEl.forEach((score, index) => {
    score.textContent = 0;
    currentsEl[index].textContent = 0;
  });

  diceEl.classList.add('hidden');

  playersEl.forEach((player, index) => {
    player.classList.remove('player--winner');
    player.classList.toggle('player--active', index === activePlayer);
  });
};

init();

const switchPlayer = function () {
  currentsEl[activePlayer].textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  playersEl.forEach((player, index) => {
    player.classList.toggle('player--active', index === activePlayer);
  });
};

btnRoll.addEventListener('click', function () {
  if (playing) {
    const dice = Math.trunc(Math.random() * 6) + 1;
    diceEl.classList.remove('hidden');
    diceEl.src = `./dice-${dice}.png`;

    if (dice !== 1) {
      currentScore += dice;
      currentsEl[activePlayer].textContent = currentScore;
    } else {
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    scores[activePlayer] += currentScore;
    scoresEl[activePlayer].textContent = scores[activePlayer];

    if (scores[activePlayer] >= 10) {
      playing = false;
      [btnHold, btnRoll].forEach(btn => btn.classList.add('disabled'));
      diceEl.classList.add('hidden');
      playersEl[activePlayer].classList.add('player--winner');
      playersEl[activePlayer].classList.remove('player--active');
    } else {
      switchPlayer();
    }
  }
});

btnNew.addEventListener('click', init);
