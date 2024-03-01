import dice1 from "./img/dice-1.png";
import dice2 from "./img/dice-2.png";
import dice3 from "./img/dice-3.png";
import dice4 from "./img/dice-4.png";
import dice5 from "./img/dice-5.png";
import dice6 from "./img/dice-6.png";

const player0Score = document.querySelector("#score-0");
const player1Score = document.getElementById("score-1");

const current0El = document.getElementById("current-0");
const current1El = document.getElementById("current-1");

const diceElement = document.querySelector(".dice");
const NewGame = document.querySelector(".btn-new");
const rollDice = document.querySelector(".btn-roll");
const HoldBtn = document.querySelector(".btn-hold");

const redActiveDot0 = document.querySelector(".red-active-dot-0");
const redActiveDot1 = document.querySelector(".red-active-dot-1");

diceElement.classList.add("hidden");
let currentScore0 = 0;
let currentScore1 = 0;
let activePlayer = 0;
let cliked = 0;
let alertShown = false; // Flag variable to track if alert has been shown
let timer = 0;
let MyInterval; // Declare the interval variable

function initializeGame() {
  currentScore0 = 0;
  currentScore1 = 0;
  activePlayer = 0;
  cliked = 0;
  alertShown = false;
  timer = 0;

  document.getElementById("current-0").textContent = 0;
  document.getElementById("current-1").textContent = 0;

  redActiveDot0.style.display = activePlayer === 0 ? "block" : "none";
  redActiveDot1.style.display = activePlayer === 1 ? "block" : "none";

  document.querySelector(".player-0-panel").classList.add("active");
  document.querySelector(".player-1-panel").classList.remove("active");

  // Reset background colors
  document
    .querySelector(".player-0-panel")
    .classList.remove("non-active-player");
  document.querySelector(".player-1-panel").classList.remove("active-player");
  document.querySelector(".player-1-panel").classList.add("non-active-player");

  document.querySelector(".win-0").style.display = "none";
  document.querySelector(".win-1").style.display = "none";

  rollDice.disabled = false;
  diceElement.style.display = "block";
}

// Call the initializeGame function on page load
initializeGame();

rollDice.addEventListener("click", function () {
  diceElement.classList.remove("hidden");
  const dice = Math.trunc(Math.random() * 6) + 1;
  switch (dice) {
    case 1:
      diceElement.src = dice1;
      break;
    case 2:
      diceElement.src = dice2;
      break;
    case 3:
      diceElement.src = dice3;
      break;
    case 4:
      diceElement.src = dice4;
      break;
    case 5:
      diceElement.src = dice5;
      break;
    case 6:
      diceElement.src = dice6;
      break;
    default:
      diceElement.src = dice6;
      break;
  }
  // diceElement.src = dice1;
  let player0 = document.querySelector(".player-0-panel");
  let player1 = document.querySelector(".player-1-panel");

  if (cliked % 2 == 0) {
    redActiveDot0.style.display = "block";
    redActiveDot1.style.display = "none";
    activePlayer = 0;
  } else {
    redActiveDot1.style.display = "block";
    redActiveDot0.style.display = "none";
    activePlayer = 1;
  }

  console.log(activePlayer);
  cliked += 1;

  if (dice === 6 && activePlayer === 0) {
    currentScore0 += 1;
    document.getElementById("current-0").textContent = currentScore0;
  } else if (dice === 6 && activePlayer === 1) {
    currentScore1 += 1;
    document.getElementById("current-1").textContent = currentScore1;
  }

  // Toggle background colors
  player0.classList.toggle("active-player", activePlayer === 0);
  player0.classList.toggle("non-active-player", activePlayer === 1);
  player1.classList.toggle("active-player", activePlayer === 1);
  player1.classList.toggle("non-active-player", activePlayer === 0);

  // Increment the timer only if the alert hasn't been shown
  if (!alertShown) {
    timer += 1;
  }

  if (timer === 30 && !alertShown) {
    clearInterval(MyInterval);
    alert("TimeOut ⌚ Please Start a New Game");

    if (currentScore0 > currentScore1) {
      document.querySelector(".win-0").style.display = "block";
    } else {
      document.querySelector(".win-1").style.display = "block";
    }

    alertShown = true; // Set the flag to true after showing the alert

    // Disable other buttons
    rollDice.disabled = true;
    diceElement.style.display = "none";
  }
});

NewGame.addEventListener("click", function () {
  initializeGame();

  // Start the timer interval again
  MyInterval = setInterval(() => {
    console.log(timer);
    timer += 1;

    if (timer === 30 && !alertShown) {
      clearInterval(MyInterval);
      alert("TimeOut ⌚ Please Start a New Game");

      if (currentScore0 > currentScore1) {
        document.querySelector(".win-0").style.display = "block";
      } else {
        document.querySelector(".win-1").style.display = "block";
      }

      alertShown = true; // Set the flag to true after showing the alert

      // Disable other buttons
      rollDice.disabled = true;
    }
  }, 1000);
});
