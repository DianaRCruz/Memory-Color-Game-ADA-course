// selectors down

const squareRedEL = document.querySelector("#squareRed");
const squareBlueEL = document.querySelector("#squareBlue");
const squareGreenEL = document.querySelector("#squareGreen");
const squareYellowEL = document.querySelector("#squareYellow");
const startButtomEL = document.querySelector("#start");
const nextButtonEl = document.querySelector("#next");
const pPoints = document.getElementById("points");

// hide elements beginning

nextButtonEl.style.visibility = "hidden";
pPoints.style.visibility = "hidden";
document.getElementById("wrapperPointNext").style.visibility = "hidden";

// array turn and points

let shuffledColors = [];
let turn = 0;
let userArray = [];

shuffledColors = [getRandomColor(), getRandomColor()];

// event listeners

squareRedEL.addEventListener("click", () => {
  checkColors(squareRedEL, turn);
  turn++;
  userArray.push(squareRedEL);
});

squareBlueEL.addEventListener("click", () => {
  checkColors(squareBlueEL, turn);
  turn++;
  userArray.push(squareBlueEL);
});
squareGreenEL.addEventListener("click", () => {
  checkColors(squareGreenEL, turn);
  turn++;
  userArray.push(squareGreenEL);
});
squareYellowEL.addEventListener("click", () => {
  checkColors(squareYellowEL, turn);
  turn++;
  userArray.push(squareYellowEL);
});

startButtomEL.addEventListener("click", () => startGame());

nextButtonEl.addEventListener("click", () => StartNextRound());

//show random array animation

function displayDisapearSquares() {
  console.log(shuffledColors);

  for (let i = 0; i < shuffledColors.length; i++) {
    if (shuffledColors[i] === document.querySelector("#squareRed")) {
      setTimeout(DisplayRed, (i + 1) * 1000);
      setTimeout(DisapearRed, (i + 1) * 1000 + 500);

      //DisplayRed();
    } else if (shuffledColors[i] === document.querySelector("#squareBlue")) {
      setTimeout(DisplayBlue, (i + 1) * 1000);
      setTimeout(DisapearBlue, (i + 1) * 1000 + 500);
      //DisplayBlue();
    } else if (shuffledColors[i] === document.querySelector("#squareGreen")) {
      setTimeout(DisplayGreen, (i + 1) * 1000);
      setTimeout(DisapearGreen, (i + 1) * 1000 + 500);
      //DisplayGreen();
    } else {
      setTimeout(DisplayYellow, (i + 1) * 1000);
      setTimeout(DisapearYellow, (i + 1) * 1000 + 500);
      //DisplayYellow();
    }
  }
}

//function checks correct user awnser

function checkColors(element, turn) {
  if (element === shuffledColors[turn]) {
    playCorrectSound();

    if (turn === shuffledColors.length - 1) {
      playWeeSound();
      deactivateButtons();
      playWeeSound();
      winnerAnimation();
      showWinner();
      setTimeout(disapearWinner, 400);
      setTimeout(showWinner, 600);
      setTimeout(disapearWinner, 1000);
      setTimeout(showWinner, 1200);
      setTimeout(disapearWinner, 1800);
      setTimeout(displayNextRoundButton, 2300);
      setTimeout(displayPoints, 2300);
    }
  } else {
    deactivateButtons();
    playWrongSound();
    loserAnimation();
    setTimeout(showLoser, 50);
    setTimeout(disapearLoser, 400);
    setTimeout(showLoser, 600);
    setTimeout(disapearLoser, 1000);
    setTimeout(showLoser, 1200);
    setTimeout(disapearLoser, 1800);
    setTimeout(displayStartButton, 2000);
  }
}

//function create random color and create random array

function getRandomColor() {
  const squares = [squareRedEL, squareBlueEL, squareGreenEL, squareYellowEL];
  const randomColor = squares[Math.floor(Math.random() * squares.length)];
  return randomColor;
}

function getRandomArray() {
  let randomArray = [];
  randomArray.length = shuffledColors.length + 1;
  for (let i = 0; i < randomArray.length; i++)
    randomArray.fill(getRandomColor(), i);

  return (shuffledColors = randomArray);
}

//function start button, next round button

function startGame() {
  shuffledColors = [getRandomColor(), getRandomColor()];
  userArray = [];
  turn = 0;
  document.getElementById("start").style.visibility = "hidden";
  document.getElementById("header").style.visibility = "hidden";
  // resetSquares();
  displayDisapearSquares();
  showWrapperPointsNext();
  setTimeout(activateButtons, (shuffledColors.length + 1) * 1000);
}

function StartNextRound() {
  userArray = [];
  turn = 0;
  pPoints.style.visibility = "hidden";
  nextButtonEl.style.visibility = "hidden";
  getRandomArray();
  setTimeout(activateButtons, (shuffledColors.length + 1) * 1000);
  // resetSquares();
  displayDisapearSquares();
  // setTimeout(resetSquaresColors, (shuffledColors.length + 1) * 1000);
}

//show buttons

function displayStartButton() {
  document.getElementById("start").style.visibility = "visible";
  document.getElementById("header").style.zIndex = "5";
  document.getElementById("header").style.visibility = "visible";
}

function displayNextRoundButton() {
  nextButtonEl.style.visibility = "visible";
}

function showWrapperPointsNext() {
  document.getElementById("wrapperPointNext").style.visibility = "visible";
  document.getElementById("wrapperPointNext").style.zIndex = "2";
}

// activate and deactivate buttons

function activateButtons() {
  squareBlueEL.style.zIndex = "0";
  squareRedEL.style.zIndex = "0";
  squareGreenEL.style.zIndex = "0";
  squareYellowEL.style.zIndex = "0";
}

function deactivateButtons() {
  squareBlueEL.style.zIndex = "-1";
  squareRedEL.style.zIndex = "-1";
  squareGreenEL.style.zIndex = "-1";
  squareYellowEL.style.zIndex = "-1";
}

// show elements p

function displayPoints() {
  pPoints.innerHTML = "max points:" + turn;
  pPoints.style.visibility = "visible";
}

function showWinner() {
  const winner = document.getElementById("winner");
  winner.style.zIndex = "3";
}

function showLoser() {
  const loser = document.getElementById("loser");
  let loserLastColor = userArray[userArray.length - 1];

  console.log(loserLastColor);

  if (loserLastColor === squareRedEL) {
    loser.style.webkitTextFillColor = "red";
  } else if (loserLastColor === squareBlueEL) {
    loser.style.webkitTextFillColor = "blue";
  } else if (loserLastColor === squareGreenEL) {
    loser.style.webkitTextFillColor = "green";
  } else {
    loser.style.webkitTextFillColor = "yellow";
  }

  loser.style.zIndex = "3";
}

//disapear p elements

function disapearWinner() {
  const winner = document.getElementById("winner");
  winner.style.zIndex = "-1";
}

function disapearLoser() {
  const loser = document.getElementById("loser");
  loser.style.zIndex = "-1";
}

// animation functions winner looser

function loserAnimation() {
  DisplayRed();
  DisplayBlue();
  DisplayGreen();
  DisplayYellow();
  setTimeout(DisapearRed, 400);
  setTimeout(DisapearBlue, 400);
  setTimeout(DisapearGreen, 400);
  setTimeout(DisapearYellow, 400);
  setTimeout(DisplayRed, 800);
  setTimeout(DisplayBlue, 800);
  setTimeout(DisplayGreen, 800);
  setTimeout(DisplayYellow, 800);
  setTimeout(DisapearRed, 1200);
  setTimeout(DisapearBlue, 1200);
  setTimeout(DisapearGreen, 1200);
  setTimeout(DisapearYellow, 1200);
  let loserLastColor = userArray[userArray.length - 1];

  console.log(loserLastColor);

  if (loserLastColor === squareRedEL) {
    document.getElementById("loser").style.webkitTextFillColor = "red";
  } else if (loserLastColor === squareBlueEL) {
    document.getElementById("loser").style.webkitTextFillColor = "blue";
  } else if (loserLastColor === squareGreenEL) {
    document.getElementById("loser").style.webkitTextFillColor = "green";
  } else {
    document.getElementById("loser").style.webkitTextFillColor = "yellow";
  }
}

function winnerAnimation() {
  let winnerLastColor = shuffledColors[shuffledColors.length - 1];

  if (winnerLastColor === squareRedEL) {
    document.getElementById("winner").style.webkitTextFillColor = "red";
    DisplayYellow();
    setTimeout(DisapearYellow, 300);
    setTimeout(DisplayGreen, 350);
    setTimeout(DisapearGreen, 650);
    setTimeout(DisplayBlue, 700);
    setTimeout(DisapearBlue, 1000);
    setTimeout(DisplayRed, 1050);
    setTimeout(DisapearRed, 1350);
  } else if (winnerLastColor === squareBlueEL) {
    document.getElementById("winner").style.webkitTextFillColor = "blue";
    DisplayRed();
    setTimeout(DisapearRed, 300);
    setTimeout(DisplayYellow, 350);
    setTimeout(DisapearYellow, 650);
    setTimeout(DisplayGreen, 700);
    setTimeout(DisapearGreen, 1000);
    setTimeout(DisplayBlue, 1050);
    setTimeout(DisapearBlue, 1350);
  } else if (winnerLastColor === squareGreenEL) {
    document.getElementById("winner").style.webkitTextFillColor = "green";
    DisplayBlue();
    setTimeout(DisapearBlue, 300);
    setTimeout(DisplayRed, 350);
    setTimeout(DisapearRed, 650);
    setTimeout(DisplayYellow, 700);
    setTimeout(DisapearYellow, 1000);
    setTimeout(DisplayGreen, 1050);
    setTimeout(DisapearGreen, 1350);
  } else {
    document.getElementById("winner").style.webkitTextFillColor = "yellow";
    DisplayGreen();
    setTimeout(DisapearGreen, 300);
    setTimeout(DisplayBlue, 350);
    setTimeout(DisapearBlue, 650);
    setTimeout(DisplayRed, 700);
    setTimeout(DisapearRed, 1000);
    setTimeout(DisplayYellow, 1050);
    setTimeout(DisapearYellow, 1350);
  }
}

function resetSquares() {
  const squares = [
    document.querySelector("#squareRed"),
    document.querySelector("#squareBlue"),
    document.querySelector("#squareGreen"),
    document.querySelector("#squareYellow"),
  ];
  for (let i = 0; i < squares.length; i++) {
    if (squares[i] === document.querySelector("#squareRed")) {
      document.querySelector("#squareRed").style.backgroundColor =
        "rgb(57, 12, 12)";
    } else if (squares[i] === document.querySelector("#squareBlue")) {
      document.querySelector("#squareBlue").style.backgroundColor =
        "rgb(12, 12, 63)";
    } else if (squares[i] === document.querySelector("#squareGreen")) {
      document.querySelector("#squareGreen").style.backgroundColor =
        "rgb(12, 57, 12)";
    } else {
      document.querySelector("#squareYellow").style.backgroundColor =
        "rgb(83, 82, 21)";
    }
  }
}

// display dissapear squares functions

function DisplayRed() {
  document.querySelector("#squareRed").style.backgroundColor = "red";
}
function DisplayBlue() {
  document.querySelector("#squareBlue").style.backgroundColor = "blue";
}
function DisplayGreen() {
  document.querySelector("#squareGreen").style.backgroundColor = "green";
}
function DisplayYellow() {
  document.querySelector("#squareYellow").style.backgroundColor = "yellow";
}
function DisapearRed() {
  document.querySelector("#squareRed").style.backgroundColor =
    "rgb(57, 12, 12)";
}
function DisapearBlue() {
  document.querySelector("#squareBlue").style.backgroundColor =
    "rgb(12, 12, 63)";
}
function DisapearGreen() {
  document.querySelector("#squareGreen").style.backgroundColor =
    "rgb(12, 57, 12)";
}
function DisapearYellow() {
  document.querySelector("#squareYellow").style.backgroundColor =
    "rgb(83, 82, 21)";
}
function resetSquares() {
  const squares = [
    document.querySelector("#squareRed"),
    document.querySelector("#squareBlue"),
    document.querySelector("#squareGreen"),
    document.querySelector("#squareYellow"),
  ];
  for (let i = 0; i < squares.length; i++) {
    if (squares[i] === document.querySelector("#squareRed")) {
      document.querySelector("#squareRed").style.backgroundColor =
        "rgb(57, 12, 12)";
    } else if (squares[i] === document.querySelector("#squareBlue")) {
      document.querySelector("#squareBlue").style.backgroundColor =
        "rgb(12, 12, 63)";
    } else if (squares[i] === document.querySelector("#squareGreen")) {
      document.querySelector("#squareGreen").style.backgroundColor =
        "rgb(12, 57, 12)";
    } else {
      document.querySelector("#squareYellow").style.backgroundColor =
        "rgb(83, 82, 21)";
    }
  }
}

//sound functions

function playBeepSound() {
  const beep = new Audio("sounds/digital-beeping-151921.mp3");
  beep.play();
}

function playWeeSound() {
  let wee = new Audio("sounds/game-bonus-144751.mp3");
  wee.play();
}

function playWrongSound() {
  let wrong = new Audio("sounds/buzzer-or-wrong-answer-20582.mp3");
  wrong.play();
}

function playCorrectSound() {
  let correct = new Audio("sounds/correct-choice-43861.mp3");
  correct.play();
}

//functions that dont work

// function clicButtomAnimationRed() {
//   DisplayRed();
//   setTimeout(DisapearRed, 1000);
// }
// function clicButtomAnimationBlue() {
//   DisplayBlue();
//   setTimeout(DisapearBlue, 1000);
// }

// function clicButtomAnimationGreen() {
//   DisplayGreen();
//   setTimeout(DisapearGreen, 1000);
// }

// function clicButtomAnimationYellow() {
//   DisplayYellow();
//   setTimeout(DisapearYellow, 1000);
// }

//const color = ["red", "blue", "green", "yellow"];

// function getRandowArrayRoundOne() {
//   const randomArray = [getRandowColor(), getRandowColor()];
//   return randomArray;
// }

// function getRandowArrayRoundTwo() {
//   const randomArray = [getRandowColor(), getRandowColor(), getRandowColor()];
//   return randomArray;
// }

// const arrayTurnOnePush = getRandowArray();

// console.log(arrayTurnOnePush);

// const colorTurnOnePush = getRandowColor();

// console.log(colorTurnOnePush);

// const arrayTurnTwo = arrayTurnOnePush.concat(colorTurnOnePush);

// console.log(arrayTurnTwo);
// function resetSquaresColors() {
//   document.querySelector("#squareRed").style.backgroundColor =
//     "rgb(57, 12, 12)";
//   document.querySelector("#squareBlue").style.backgroundColor =
//     "rgb(12, 12, 63)";
//   document.querySelector("#squareGreen").style.backgroundColor =
//     "rgb(12, 57, 12)";
//   document.querySelector("#squareYellow").style.backgroundColor =
//     "rgb(83, 82, 21)";}
