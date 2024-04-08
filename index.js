let shuffledColors = [];
let turn = 0;

const squareRedEL = document.querySelector("#squareRed");
const squareBlueEL = document.querySelector("#squareBlue");
const squareGreenEL = document.querySelector("#squareGreen");
const squareYellowEL = document.querySelector("#squareYellow");

const startButtomEL = document.querySelector("#start");

squareRedEL.addEventListener("click", () => {
  checkColors(turn, document.querySelector("#squareRed"));
  turn++;
});
squareBlueEL.addEventListener("click", () => {
  checkColors(turn, document.querySelector("#squareBlue"));
  turn++;
});
squareGreenEL.addEventListener("click", () => {
  checkColors(turn, document.querySelector("#squareGreen"));
  turn++;
});
squareYellowEL.addEventListener("click", () => {
  checkColors(turn, document.querySelector("#squareYellow"));
  turn++;
});

startButtomEL.addEventListener("click", () => startGame());

//setTimeout(resetSquaresColors, 7000);

function checkColors(turn, clickedColor) {
  if (clickedColor === shuffledColors[turn]) {
    playCorrectSound();

    if (turn === shuffledColors.length - 1) {
      playWeeSound();
      alert("You won!");
      alert("reload webpage to start again");
      setTimeout(() => {}, 3000);
    }
  } else {
    playWrongSound();
    alert("You lost!");
    alert("reload webpage to start again");
  }
}

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

function resetSquares() {
  const squares = document.querySelectorAll(
    ".squareRed,.squareBlue,.squareGreen,.squareYellow"
  );
  for (let i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = "black";
  }
}

function resetSquaresColors() {
  document.querySelector("#squareRed").style.backgroundColor = "red";
  document.querySelector("#squareBlue").style.backgroundColor = "blue";
  document.querySelector("#squareGreen").style.backgroundColor = "green";
  document.querySelector("#squareYellow").style.backgroundColor = "yellow";
}

function startGame() {
  document.getElementById("start").style.visibility = "hidden";
  document.getElementById("heading1").style.visibility = "hidden";
  resetSquares();
  displayDisapearSquares();
  setTimeout(resetSquaresColors, 6000);
}

function displayDisapearSquares() {
  shuffledColors = [
    getRandomColor(),
    getRandomColor(),
    getRandomColor(),
    getRandomColor(),
  ];
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

function getRandomColor() {
  const squares = [squareRedEL, squareBlueEL, squareGreenEL, squareYellowEL];
  const randomColor = squares[Math.floor(Math.random() * squares.length)];
  return randomColor;
}

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
  document.querySelector("#squareRed").style.backgroundColor = "black";
}
function DisapearBlue() {
  document.querySelector("#squareBlue").style.backgroundColor = "black";
}
function DisapearGreen() {
  document.querySelector("#squareGreen").style.backgroundColor = "black";
}
function DisapearYellow() {
  document.querySelector("#squareYellow").style.backgroundColor = "black";
}
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
