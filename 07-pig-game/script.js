'use strict';

const score1El = document.getElementById('score--0');
const score2El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

score1El.textContent = 0;
score2El.textContent = 0;
diceEl.classList.add('hidden');

let currentScore = 0;

// Dice func
btnRoll.addEventListener('click', function () {
  // Generate random roll
  const dice = Math.trunc(Math.random() * 6) + 1;
  // Display dice
  diceEl.classList.remove('hidden');
  // Map through each of the dice.png and assign the corresponding dice gen number
  //   console.log(`./dice-${dice}.png`);
  diceEl.src = `./dice-${dice}.png`;

  // Check if roll is 1, if true, switch player
  if (dice !== 1) {
    // add dice to current score
    currentScore += dice;
    current0El.textContent = currentScore; // CHANGE LATER FOR CURRENT PLAYER
  } else {
    // switch
  }
});
