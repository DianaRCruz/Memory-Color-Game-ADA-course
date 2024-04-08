const colors = ["red", "blue", "yellow", "green"];

let shuffledColors = [];
let turn = 0;

function playWrongSound() {
  let wrong = new Audio("audio/Buzzer-sound.mp3");
  wrong.play();
}

function playCorrectSound() {
  let correct = new Audio("audio/Right-answer-ding-ding-sound-effect.mp3");
  correct.play();
}

function playWeeSound() {
  let wee = new Audio("audio/wee-sound-effect.mp3");
  wee.play();
}

function generateRandomIndex(max) {
  //This will generate a number between 0 and max
  return Math.floor(Math.random() * max);
}

function sortColors() {
  //This will shuffle the colors array randomly

  return colors.sort(() => Math.random() - 0.5);
}

function generateRandomColors() {
  //This will generate a random number of colors between 1 and 4
  let randomColors = [];

  for (let i = 0; i < colors.length; i++) {
    randomColors.push(colors[generateRandomIndex(4)]);
  }

  return randomColors;
}

function displayAndFadeColors() {
  shuffledColors = sortColors();
  console.log(shuffledColors);

  for (let i = 0; i < shuffledColors.length; i++) {
    let squareEl = document.querySelector(`#${shuffledColors[i]}`);
    // document.querySelector(`#red`)
    // document.querySelector(`#blue`)
    // document.querySelector(`#yellow`)
    // document.querySelector(`#green`)

    setTimeout(() => {
      squareEl.style.backgroundColor = shuffledColors[i];
    }, i * 1000);

    setTimeout(() => {
      squareEl.style.backgroundColor = "white";
    }, i * 1000 + 500);
  }
}

function displayColors() {
  shuffledColors = sortColors();

  console.log(shuffledColors);

  for (let i = 0; i < shuffledColors.length; i++) {
    let squareEl = document.querySelector(`#${shuffledColors[i]}`);

    setTimeout(() => {
      squareEl.style.backgroundColor = shuffledColors[i];
    }, i * 1000);
  }
}

function checkColors(turn, clickedColor) {
  if (clickedColor === shuffledColors[turn]) {
    playCorrectSound();

    if (turn === shuffledColors.length - 1) {
      playWeeSound();
      alert("You won!");
      setTimeout(() => {}, 3000);
    }
  } else {
    playWrongSound();
    alert("You lost!");
    // displayAndFadeColors();
  }
}

function makeAllColorsWhite() {
  const squares = document.querySelectorAll(".red, .blue, .yellow, .green");

  for (let i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = "white";
  }
}

const redSquareEl = document.querySelector("#red");
const blueSquareEl = document.querySelector("#blue");
const yellowSquareEl = document.querySelector("#yellow");
const greenSquareEl = document.querySelector("#green");

const startButtonEl = document.querySelector("#start-button");

redSquareEl.addEventListener("click", () => {
  checkColors(turn, "red");
  turn++;
});

blueSquareEl.addEventListener("click", () => {
  checkColors(turn, "blue");
  turn++;
});

yellowSquareEl.addEventListener("click", () => {
  checkColors(turn, "yellow");
  turn++;
});

greenSquareEl.addEventListener("click", () => {
  checkColors(turn, "green");
  turn++;
});

startButtonEl.addEventListener("click", () => {
  makeAllColorsWhite();
  displayAndFadeColors();
});
