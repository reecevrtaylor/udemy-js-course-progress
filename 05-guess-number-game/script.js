'use strict';

// Function to update text content
const setTextContent = (selector, content) => {
  document.querySelector(selector).textContent = content;
};

// Capture initial states
const initialBackgroundColor = '#222';
const initialNumberWidth = '15rem';
const initialMessage = 'Start guessing...';

const displayMessage = message => {
  document.querySelector('.message').textContent = message;
};

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    setTextContent('.message', '❌ No number!');
  } else if (guess === secretNumber) {
    setTextContent('.message', '🎉 Correct number!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      setTextContent('.highscore', highScore);
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      setTextContent(
        '.message',
        guess > secretNumber ? '📈 Too high!' : '📉 Too low!'
      );
      score--;
      setTextContent('.score', score);
    } else {
      setTextContent('.message', '😞 You lost!');
      setTextContent('.score', 0);
    }
  }
});

//////////////////////////////
// Coding Challenge #1
/*
Implement a game reset functionality, so that the player can make a new guess! Here is how:

1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the score and secretNumber variables
3. Restore the initial conditions of the message, number, score and guess input field
4. Also restore the original background color (#222) and number width (15rem)

GOOD LUCK 😀
*/
//////////////////////////////

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  setTextContent('.number', '?');
  document.querySelector('body').style.backgroundColor = initialBackgroundColor;
  document.querySelector('.number').style.width = initialNumberWidth;
  document.querySelector('.guess').value = '';
  setTextContent('.message', initialMessage);
  setTextContent('.score', score);
});
