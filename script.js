'use strict';
/*console.log(document.querySelector('.message').textContent);


document.querySelector('.number').textContent = 13;


console.log(document.querySelector('.guess').value);

document.querySelector('.guess').value = 23;*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const messageE1 = document.querySelector('.message');
const numberE1 = document.querySelector('.number');
const scoreE1 = document.querySelector('.score');
const highscoreE1 = document.querySelector('.highscore');
const guessE1 = document.querySelector('.guess');
const bodyE1 = document.querySelector('body');

const displayMessage = function (message) {
  messageE1.textContent = message;
};

const displayNumber = function (number) {
  numberE1.textContent = number;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(guessE1.value);
  console.log(guess, typeof guess);

  // when there is no input
  if (!guess) {
    displayMessage('⛔ No number!');

    // when player wins
  } else if (guess === secretNumber) {
    displayMessage('🎉Correcet Number!');

    displayNumber(secretNumber);

    bodyE1.style.backgroundColor = '#60b347';

    numberE1.style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      highscoreE1.textContent = highscore;
    }
    // when guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈Too high!' : '📉Too low!');
      score--;
      scoreE1.textContent = score;
    } else {
      displayMessage('You lost the game!');
      scoreE1.textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage('Start guessing...');
  scoreE1.textContent = score;
  displayNumber('?');
  guessE1.value = '';

  bodyE1.style.backgroundColor = '#222';
  numberE1.style.width = '15rem';
});
