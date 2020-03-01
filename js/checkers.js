window.onload = function() {
  document.getElementById("board").onclick = takeTurn;
}

const squares = Array.from(document.querySelectorAll("#board div"));

let board;
let turn = "black";
let win;

window.onload = init;
document.getElementById("board").onclick = takeTurn;
document.getElementById("reset-button").onclick = init;
document.getElementById("x-button").onclick = xFirst;
document.getElementById("o-button").onclick = oFirst;

function init() {
  board = [
    "", "", "", "", "", "", "", "",
    "", "", "", "", "", "", "", "",
    "", "", "", "", "", "", "", "",
    "", "", "", "", "", "", "", "",
    "", "", "", "", "", "", "", "",
    "", "", "", "", "", "", "", "",
    "", "", "", "", "", "", "", "",
    "", "", "", "", "", "", "", "",
  ];
  board[0] = "\u2022"
    board[2] = "\u2022"
    board[4] = "\u2022"
    board[6] = "\u2022"
    board[9] = "\u2022"
    board[11] = "\u2022"
    board[13] = "\u2022"
    board[15] = "\u2022"
    board[16] = "\u2022"
    board[18] = "\u2022"
    board[20] = "\u2022"
    board[22] = "\u2022"

    board[63] = "\u2022"
    board[61] = "\u2022"
    board[59] = "\u2022"
    board[57] = "\u2022"
    board[54] = "\u2022"
    board[52] = "\u2022"
    board[50] = "\u2022"
    board[48] = "\u2022"
    board[47] = "\u2022"
    board[45] = "\u2022"
    board[43] = "\u2022"
    board[41] = "\u2022"
    console.log(board);
  turn = "red";
  win = null;

  render();
}

function takeTurn(e) {
  if (!win) {
    let index = squares.findIndex(function(square) {
      return square === e.target;
    });

    if (board[index] === "") {
      board[index] = turn;
      turn = turn === "black" ? "red" : "black";
      win = getWinner();

      render();
    }
  }
  win = getWinner();
  keepScore(win);
}

function render() {
  board.forEach(function(mark, index) {
    squares[index].textContent = mark;
  });

  message.textContent =
    win === "T" ? "It's a tie!" : win ? `${win} wins!` : `Turn: ${turn}`;
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
