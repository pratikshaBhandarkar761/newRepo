'use strict';



// console.log(document.querySelector('.message ').textContent);
// document.querySelector('.message').textContent = '🎉 Correct number!';
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score ').textContent = 10;
// document.querySelector('.guess').value = 23;

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function(message) {
    document.querySelector('.message').textContent = message;
}
document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    // console.log(guess, typeof(guess));
    if (!guess) {
        // document.querySelector('.message').textContent = '⛔ No Number';
        displayMessage('⛔ No Number');
    } else if (guess === secretNumber) {
        displayMessage('💥Correct Number');
        // document.querySelector('.message').textContent = '💥Correct Number';
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = "green";
        document.querySelector('.number').style.width = '30rem';

        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
        //when guess is wrong
    } else if (guess !== secretNumber) {
        if (score > 1) {
            // document.querySelector('.message').textContent = guess > secretNumber ? '💕Too High' : '💫Too low';
            displayMessage(guess > secretNumber ? '💕Too High' : '💫Too low');
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            displayMessage('💥 You Lost the game!');
            // document.querySelector('.message').textContent = '💥 You Lost the game!';
            document.querySelector('.score').textContent = 0
        }

        // } else if (guess > secretNumber) {
        //     if (score > 1) {
        //         document.querySelector('.message').textContent = 'Too high!';
        //         score--;
        //         document.querySelector('.score').textContent = score;
        //     } else {
        //         document.querySelector('.message').textContent = '❌You lost the game!';
        //         document.querySelector('.score').textContent = 0;
        //     }
        // } else if (guess < secretNumber) {
        //     if (score > 1) {
        //         document.querySelector('.message').textContent = 'Too low!';
        //         score--;
        //         document.querySelector('.score').textContent = score;
        //     } else {
        //         document.querySelector('.message').textContent = '❌ You lost the game';
        //         document.querySelector('.score').textContent = 0;
        //     }
        //     document.querySelector('.message ').textcontent = 'Too Low';
    }
    document.querySelector('.again').addEventListener('click', function() {
        let score = 20;
        document.querySelector('.score').textContent = score;
        // document.querySelector('.message').textContent = "Start guessing...";
        displayMessage('Start guessing...');
        document.querySelector('body').style.backgroundColor = 'black';
        document.querySelector('.number').style.width = '15rem';
        document.querySelector('.guess').value = '';
        document.querySelector('.number').textContent = '?';
    })
})