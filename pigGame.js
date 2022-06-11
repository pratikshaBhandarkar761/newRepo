  'use strict';

  //SelectingElements
  const player0El = document.querySelector('.player--0');
  const player1El = document.querySelector('.player--1');
  const score0El = document.querySelector('#score--0');
  const score1El = document.getElementById('score--1');
  const current0El = document.getElementById('current--0');
  const current1El = document.getElementById('current--0');
  const diceEl = document.querySelector('.dice');
  const btnNew = document.querySelector('.btn--new');
  const btnRoll = document.querySelector('.btn--roll');
  const btnHold = document.querySelector('.btn--hold');

  let scores, currentScore, activePlayer, playing;
  const init = function() {


      //Rolling Dice functionality
      scores = [0, 0];
      currentScore = 0;
      activePlayer = 0;
      playing = true;
      //starting conditions
      score0El.textContent = 0;
      score1El.textContent = 0;
      current0El.textContent = 0;
      current1El.textContent = 0;

      diceEl.classList.add('hidden');
      player0El.classList.remove('player--winner');
      player1El.classList.remove('player--winner');
      player0El.classList.add('player--active');
      player1El.classList.remove('player--active');
  }
  init()
      //Switch to next player
  const switchPlayer = function() {
      document.getElementById(`current--${activePlayer}`).textContent = 0;
      currentScore = 0;
      activePlayer = activePlayer === 0 ? 1 : 0;
      player0El.classList.toggle('player--active');
      player1El.classList.toggle('player--active');
  }

  btnRoll.addEventListener('click', function() {
      if (playing) {
          //1.Generatinga random dice roll
          const dice = Math.trunc(Math.random() * 6) + 1;
          //2.Display Dice
          diceEl.classList.remove('hidden');
          diceEl.src = `dice-${dice}.png `;
          console.log(diceEl.src);

          //3.check for rolled  1
          if (dice !== 1) {
              //Add dice to current score
              currentScore += dice;
              document.getElementById(`current--${activePlayer}`).textContent = currentScore;
          } else {
              switchPlayer()
          }
      }
  });
  btnHold.addEventListener('click', function() {
      if (playing) {
          //1.Add current score to active player's score
          scores[activePlayer] += currentScore;
          //scores[1] = scores1[1] + currentSore
          document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
          //finish the game
          //2. check if player's score is >=100
          if (scores[activePlayer] >= 20) {
              diceEl.classList.add('hidden');
              playing = false;
              document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');

              document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
          } else {
              //Switch to the next player
              switchPlayer();
          }
      }
  });
  btnNew.addEventListener('click', function() {
      init();
  });