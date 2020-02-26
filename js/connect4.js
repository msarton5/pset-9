/////////////////// CONSTANTS /////////////////////////////////////
const winningConditions = [
// first row
  [0,1,2,3],
  [1,2,3,4],
  [2,3,4,5],
  [3,4,5,6],
// second row
  [7,8,9,10],
  [8,9,10,11],
  [9,10,11,12],
  [10,11,12,13],
// third row
  [14,15,16,17],
  [15,16,17,18],
  [16,17,18,19],
  [17,18,19,20],
// fourth row
  [21,22,23,24],
  [22,23,24,25],
  [23,24,25,26],
  [24,25,26,27],
// fifth row
  [28,29,30,31],
  [29,30,31,32],
  [30,31,32,33],
  [31,32,33,34],
// sixth row
  [35,36,37,38],
  [36,37,38,39],
  [37,38,39,40],
  [38,39,40,41],
// first column
  [0,7,14,21],
  [7,14,21,28],
  [14,21,28,35],
// second column
  [1,8,15,22],
  [8,15,22,29],
  [15,22,29,36],
// third column
  [2,9,16,23],
  [9,16,23,30],
  [16,23,30,37],
// fourth column
  [3,10,17,24],
  [10,17,24,31],
  [17,24,31,38],
// fifth column
  [4,11,18,25],
  [11,18,25,32],
  [18,25,32,39],
// sixth column
  [5,12,19,26],
  [12,19,26,33],
  [19,26,33,40],
// seventh column
  [6,13,20,27],
  [13,20,27,34],
  [20,27,34,41]
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
// document.getElementById("reset-button").onclick = init;

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

  if (turn === "red"){
      board.body.style.background = "red";
  } else if (turn === "yellow") {
      board.body.style.background = "yellow";
  }

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
      redscore.textContent = "red: " + redscore;

    } else if (win === "yellow") {
      yellowscore++;
      yellowscore.textContent = "yellow: " + yellowscore;

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
