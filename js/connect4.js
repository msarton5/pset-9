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
  [20,27,34,41],
// leftmost diagonal (left to right)
  [14,22,30,38],
// second diagonal
  [7,15,23,31],
  [15,23,31,39],
// third diagonal
  [0,8,16,24],
  [8,16,24,32],
  [16,24,32,40],
// fourth diagonal
  [1,9,17,25],
  [9,17,25,33],
  [17,25,33,41],
// fifth diagonal
  [2,10,18,26],
  [10,18,26,34],
// rightmost diagonal
  [3,11,19,27],
// leftmost diagonal (right to left)
  [3,9,15,21],
// second diagonal
  [4,10,16,22],
  [10,16,22,28],
// third diagonal
  [5,11,17,23],
  [11,17,23,29],
  [17,23,29,35],
// fourth diagonal
  [6,12,18,24],
  [12,18,24,30],
  [18,24,30,36],
// fifth diagonal
  [13,19,25,31],
  [19,25,31,37],
// rightmost diagonal
  [20,26,32,38]
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
// document.getElementById("board").onclick = takeTurn;
// document.getElementById("reset-button").onclick = init;
document.getElementById("button1").onclick = takeTurn1;
document.getElementById("button2").onclick = takeTurn2;
document.getElementById("button3").onclick = takeTurn3;
document.getElementById("button4").onclick = takeTurn4;
document.getElementById("button5").onclick = takeTurn5;
document.getElementById("button6").onclick = takeTurn6;
document.getElementById("button7").onclick = takeTurn7;

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

  // if (turn === "red") {
  //   document.getElementsByClassName("square").style.color = "red";
  // } else if (turn === "yellow") {
  //   document.getElementsByClassName("square").style.color = "yellow";
  // }

  for (var i = 0; i < board.length; i++) {
    if (board[i] == "\u2022") {
      squares[i].style.color = "red";
    } else if (board[i] == "\u2219"){

      squares[i].style.color = "yellow";
      squares[i].style.fontSize = "350px";
    }
  }

  message.textContent =
    win === "T" ? "It's a tie!" : win ? `${win} wins!` : `Turn: ${turn}`;
}


function getWinner() {
  let winner = null;

  winningConditions.forEach(function(condition, index) {

    if (
      board[condition[0]] &&
      board[condition[0]] === board[condition[1]] &&
      board[condition[1]] === board[condition[2]] &&
      board[condition[2]] === board[condition[3]]
    ) {
      if (board[condition[0]] == "\u2022") {
        winner = "red";
      } else {
        winner = "yellow";
      }
    }
  });

  return winner;
}

function takeTurn1() {
  if (!win) {
    if (board[35] === "") {
      if (turn === "red") {
        board[35] = "\u2022";
      } else if (turn === "yellow") {
        board[35] = "\u2219";
      }
    } else if (board[28] === "") {
      if (turn === "red") {
        board[28] = "\u2022";
      } else if (turn === "yellow") {
        board[28] = "\u2219";
      }
    } else if (board[21] === "") {
      if (turn === "red") {
        board[21] = "\u2022";
      } else if (turn === "yellow") {
        board[21] = "\u2219";
      }
    } else if (board[14] === "") {
      if (turn === "red") {
        board[14] = "\u2022";
      } else if (turn === "yellow") {
        board[14] = "\u2219";
      }
    } else if (board[7] === "") {
      if (turn === "red") {
        board[7] = "\u2022";
      } else if (turn === "yellow") {
        board[7] = "\u2219";
      }
    } else if (board[0] === "") {
      if (turn === "red") {
        board[0] = "\u2022";
      } else if (turn === "yellow") {
        board[0] = "\u2219";
      }
    }
  }
    turn = turn === "red" ? "yellow" : "red";
    win = getWinner();

    render();
  }


function takeTurn2() {
  if (!win) {
    if (board[36] === "") {
      if (turn === "red") {
        board[36] = "\u2022";
      } else if (turn === "yellow") {
        board[36] = "\u2219";
      }
    } else if (board[29] === "") {
      if (turn === "red") {
        board[29] = "\u2022";
      } else if (turn === "yellow") {
        board[29] = "\u2219";
      }
    } else if (board[22] === "") {
      if (turn === "red") {
        board[22] = "\u2022";
      } else if (turn === "yellow") {
        board[22] = "\u2219";
      }
    } else if (board[15] === "") {
      if (turn === "red") {
        board[15] = "\u2022";
      } else if (turn === "yellow") {
        board[15] = "\u2219";
      }
    } else if (board[8] === "") {
      if (turn === "red") {
        board[8] = "\u2022";
      } else if (turn === "yellow") {
        board[8] = "\u2219";
      }
    } else if (board[1] === "") {
      if (turn === "red") {
        board[1] = "\u2022";
      } else if (turn === "yellow") {
        board[1] = "\u2219";
      }
    }
  }
  turn = turn === "red" ? "yellow" : "red";
  win = getWinner();

  render();
}

function takeTurn3() {
  if (!win) {
    if (board[37] === "") {
      if (turn === "red") {
        board[37] = "\u2022";
      } else if (turn === "yellow") {
        board[37] = "\u2219";
      }
    } else if (board[30] === "") {
      if (turn === "red") {
        board[30] = "\u2022";
      } else if (turn === "yellow") {
        board[30] = "\u2219";
      }
    } else if (board[23] === "") {
      if (turn === "red") {
        board[23] = "\u2022";
      } else if (turn === "yellow") {
        board[23] = "\u2219";
      }
    } else if (board[16] === "") {
      if (turn === "red") {
        board[16] = "\u2022";
      } else if (turn === "yellow") {
        board[16] = "\u2219";
      }
    } else if (board[9] === "") {
      if (turn === "red") {
        board[9] = "\u2022";
      } else if (turn === "yellow") {
        board[9] = "\u2219";
      }
    } else if (board[2] === "") {
      if (turn === "red") {
        board[2] = "\u2022";
      } else if (turn === "yellow") {
        board[2] = "\u2219";
      }
    }
  }
  turn = turn === "red" ? "yellow" : "red";
  win = getWinner();

  render();
}

function takeTurn4() {
  if (!win) {
    if (board[38] === "") {
      if (turn === "red") {
        board[38] = "\u2022";
      } else if (turn === "yellow") {
        board[38] = "\u2219";
      }
    } else if (board[31] === "") {
      if (turn === "red") {
        board[31] = "\u2022";
      } else if (turn === "yellow") {
        board[31] = "\u2219";
      }
    } else if (board[24] === "") {
      if (turn === "red") {
        board[24] = "\u2022";
      } else if (turn === "yellow") {
        board[24] = "\u2219";
      }
    } else if (board[17] === "") {
      if (turn === "red") {
        board[17] = "\u2022";
      } else if (turn === "yellow") {
        board[17] = "\u2219";
      }
    } else if (board[10] === "") {
      if (turn === "red") {
        board[10] = "\u2022";
      } else if (turn === "yellow") {
        board[36] = "\u2219";
      }
    } else if (board[3] === "") {
      if (turn === "red") {
        board[3] = "\u2022";
      } else if (turn === "yellow") {
        board[3] = "\u2219";
      }
    }
  }
  turn = turn === "red" ? "yellow" : "red";
  win = getWinner();

  render();
}

function takeTurn5() {
  if (!win) {
    if (board[39] === "") {
      if (turn === "red") {
        board[39] = "\u2022";
      } else if (turn === "yellow") {
        board[39] = "\u2219";
      }
    } else if (board[32] === "") {
      if (turn === "red") {
        board[32] = "\u2022";
      } else if (turn === "yellow") {
        board[32] = "\u2219";
      }
    } else if (board[25] === "") {
      if (turn === "red") {
        board[25] = "\u2022";
      } else if (turn === "yellow") {
        board[25] = "\u2219";
      }
    } else if (board[18] === "") {
      if (turn === "red") {
        board[18] = "\u2022";
      } else if (turn === "yellow") {
        board[18] = "\u2219";
      }
    } else if (board[11] === "") {
      if (turn === "red") {
        board[11] = "\u2022";
      } else if (turn === "yellow") {
        board[11] = "\u2219";
      }
    } else if (board[4] === "") {
      if (turn === "red") {
        board[4] = "\u2022";
      } else if (turn === "yellow") {
        board[4] = "\u2219";
      }
    }
  }
  turn = turn === "red" ? "yellow" : "red";
  win = getWinner();

  render();
}

function takeTurn6() {
  if (!win) {
    if (board[40] === "") {
      if (turn === "red") {
        board[40] = "\u2022";
      } else if (turn === "yellow") {
        board[40] = "\u2219";
      }
    } else if (board[33] === "") {
      if (turn === "red") {
        board[33] = "\u2022";
      } else if (turn === "yellow") {
        board[33] = "\u2219";
      }
    } else if (board[26] === "") {
      if (turn === "red") {
        board[26] = "\u2022";
      } else if (turn === "yellow") {
        board[26] = "\u2219";
      }
    } else if (board[19] === "") {
      if (turn === "red") {
        board[19] = "\u2022";
      } else if (turn === "yellow") {
        board[19] = "\u2219";
      }
    } else if (board[12] === "") {
      if (turn === "red") {
        board[12] = "\u2022";
      } else if (turn === "yellow") {
        board[12] = "\u2219";
      }
    } else if (board[5] === "") {
      if (turn === "red") {
        board[5] = "\u2022";
      } else if (turn === "yellow") {
        board[5] = "\u2219";
      }
    }
  }
  turn = turn === "red" ? "yellow" : "red";
  win = getWinner();

  render();
}

function takeTurn7() {
  if (!win) {
    if (board[41] === "") {
      if (turn === "red") {
        board[41] = "\u2022";
      } else if (turn === "yellow") {
        board[41] = "\u2219";
      }
    } else if (board[34] === "") {
      if (turn === "red") {
        board[34] = "\u2022";
      } else if (turn === "yellow") {
        board[34] = "\u2219";
      }
    } else if (board[27] === "") {
      if (turn === "red") {
        board[27] = "\u2022";
      } else if (turn === "yellow") {
        board[27] = "\u2219";
      }
    } else if (board[20] === "") {
      if (turn === "red") {
        board[20] = "\u2022";
      } else if (turn === "yellow") {
        board[20] = "\u2219";
      }
    } else if (board[13] === "") {
      if (turn === "red") {
        board[13] = "\u2022";
      } else if (turn === "yellow") {
        board[13] = "\u2219";
      }
    } else if (board[6] === "") {
      if (turn === "red") {
        board[6] = "\u2022";
      } else if (turn === "yellow") {
        board[6] = "\u2219";
      }
    }
  }
  turn = turn === "red" ? "yellow" : "red";
  win = getWinner();

  render();
}
