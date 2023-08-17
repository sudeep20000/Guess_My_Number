'use strict';

//* 72.Selecting and Manipulating Elements

// // console.log(document.querySelector('.message').textContent);
// // document.querySelector('.message').textContent = '🎉 Correct Number!';

// // document.querySelector('.number').textContent = 13;
// // document.querySelector('.score').textContent = 10;
// // document.querySelector('.guess').value = 23;
// // console.log(document.querySelector('.guess').value);


//* 73.Handiling Click Events

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
	document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
	const guess = Number(document.querySelector('.guess').value);

	if (!guess) {
		displayMessage('⛔️ No number!');
	}
	else if (guess === secretNumber) {
		displayMessage('🎉 Correct Number!');
		document.querySelector('body').style.backgroundColor = '#60b347';
		document.querySelector('.number').textContent = secretNumber;
		document.querySelector('.number').style.width = '30rem';

		if (score > highscore) {
			highscore = score;
			document.querySelector('.highscore').textContent = highscore;
		}
	} else if (guess !== secretNumber) {
		if (score > 1) {
			displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
			score--;
			document.querySelector('.score').textContent = score;
		} else {
			displayMessage('💥 You lost the game!');
			document.querySelector('body').style.backgroundColor = 'red';
			document.querySelector('.score').textContent = 0;
		}
	}

	//   // When guess is too high
	// } else if (guess > secretNumber) {
	//   if (score > 1) {
	//     document.querySelector('.message').textContent = '📈 Too high!';
	//     score--;
	//     document.querySelector('.score').textContent = score;
	//   } else {
	//     document.querySelector('.message').textContent = '💥 You lost the game!';
	//     document.querySelector('.score').textContent = 0;
	//   }

	//   // When guess is too low
	// } else if (guess < secretNumber) {
	//   if (score > 1) {
	//     document.querySelector('.message').textContent = '📉 Too low!';
	//     score--;
	//     document.querySelector('.score').textContent = score;
	//   } else {
	//     document.querySelector('.message').textContent = '💥 You lost the game!';
	//     document.querySelector('.score').textContent = 0;
	//   }
	// }
});

document.querySelector('.again').addEventListener('click', function () {
	score = 20;
	secretNumber = Math.trunc(Math.random() * 20) + 1;

	// document.querySelector('.message').textContent = 'Start guessing...';
	displayMessage('Start guessing...');
	document.querySelector('.score').textContent = score;
	document.querySelector('.number').textContent = '?';
	document.querySelector('.guess').value = '';

	document.querySelector('body').style.backgroundColor = '#222';
	document.querySelector('.number').style.width = '15rem';
});

///////////////////////////////////////
// Coding Challenge #1

/* 
Implement a game rest functionality, so that the player can make a new guess! Here is how:

1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the score and secretNumber variables
3. Restore the initial conditions of the message, number, score and guess input field
4. Also restore the original background color (#222) and number width (15rem)

GOOD LUCK 😀
*/
