/////////////////// CONSTANTS /////////////////////////////////////
const winningConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

///////////////////// APP STATE (VARIABLES) /////////////////////////
let board;
let turn = "red";
let win;
let redscore = 0;
let yellowscore = 0;

///////////////////// CACHED ELEMENT REFERENCES /////////////////////
const squares = Array.from(document.querySelectorAll("#board div"));
const message = document.querySelector("h2");

///////////////////// EVENT LISTENERS ///////////////////////////////
window.onload = init;
document.getElementById("board").onclick = takeTurn;
document.getElementById("reset-button").onclick = init;

///////////////////// FUNCTIONS /////////////////////////////////////
function init() {
  board = [
    "", "", "", "", "", "", "",
    "", "", "", "", "", "", "",
    "", "", "", "", "", "", "",
    "", "", "", "", "", "", "",
    "", "", "", "", "", "", "",
    "", "", "", "", "", "", "",
  ];
  turn = "red";
  win = null;

  render();
}

function render() {
  board.forEach(function(mark, index) {
    squares[index].textContent = mark;
  });

  message.textContent =
    win === "T" ? "It's a tie!" : win ? `${win} wins!` : `Turn: ${turn}`;
}

function takeTurn(e) {
  let index = squares.findIndex(function(square) {
    return square === e.target;
  });
  board[index] = turn;
  turn = turn === "red" ? "yellow" : "red";

  render();
}

function getWinner() {
  let winner = null;

  winningConditions.forEach(function(condition, index) {
    if (
      board[condition[0]] &&
      board[condition[0]] === board[condition[1]] &&
      board[conition[1]] === board[condition[2]]
    ) {
      winner = board[condition[0]];
    }
  });

  return winner;
}

function takeTurn(e) {
  if (!win) {
    let index = squares.findIndex(function(square) {
      return square === e.target;
    });

    if (board[index] === "") {
      board[index] = turn;
      turn = turn === "red" ? "yellow" : "red";
      win = getWinner();

      render();
    }
  }
  win = getWinner();
  keepScore(win);
}

function getWinner() {
  let winner = null;

  winningConditions.forEach(function(condition, index) {
    if (
      board[condition[0]] &&
      board[condition[0]] === board[condition[1]] &&
      board[condition[1]] === board[condition[2]]
    ) {
      winner = board[condition[0]];

    }
  }
);

  return winner ? winner : board.includes("") ? null : "T";
}

function keepScore(win) {
  if (win !== null) {
    if (win === "red") {
      redscore++;
      red.textContent = "red: " + redscore;

    } else if (win === "yellow") {
      yellowscore++;
      yellow.textContent = "yellow: " + yellowscore;

    }
  }
}

function redFirst() {
    turn = "red";
    document.getElementById("red-button").style.visibility = "invisible";
    document.getElementById("yellow-button").style.visibility = "invisible";
    render();
}

function yellowFirst() {
  turn = "yellow";
  document.getElementById("red-button").style.visibility = "invisible";
  document.getElementById("yellow-button").style.visibility = "invisible";
  render();
}
