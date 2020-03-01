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

let columns = [
  [null, null, null, null, null, null],
  [null, null, null, null, null, null],
  [null, null, null, null, null, null],
  [null, null, null, null, null, null],
  [null, null, null, null, null, null],
  [null, null, null, null, null, null],
  [null, null, null, null, null, null]
]

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

  message.textContent =
    win === "T" ? "It's a tie!" : win ? `${win} wins!` : `Turn: ${turn}`;
}

// function render() {
//   board.forEach(function(mark, index) {
//     console.log(turn);
//     document.getElementsByClassName("square") = box;
//     console.log(box);
//     if (turn === "red") {
//       box.style.backgroundColor = "red";
//     } else {
//       box.style.backgroundColor = "yellow";
//     }
//
//
//     // const canvas = document.getElementById("board[index]");
//     // const ctx = canvas.getContext("2d");
//     //
//     // if (turn === "red") {
//     //     ctx.beginPath();
//     //     ctx.arc(20*index%7, 20*((index/6)-index%6), 15, 0, 2 * Math.PI);
//     //     ctx.fill();
//     // }
//
//   });
//   message.textContent =
//     win === "T" ? "It's a tie!" : win ? `${win} wins!` : `Turn: ${turn}`;
// }

function getWinner() {
  let winner = null;

  winningConditions.forEach(function(condition, index) {
    if (
      board[condition[0]] &&
      board[condition[0]] === board[condition[1]] &&
      board[condition[1]] === board[condition[2]] &&
      board[condition[2]] === board[condition[3]]
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
    turn === "red";
    document.getElementById("red-button").style.visibility = "invisible";
    document.getElementById("yellow-button").style.visibility = "invisible";
    render();
}

function yellowFirst() {
  turn === "yellow";
  document.getElementById("red-button").style.visibility = "invisible";
  document.getElementById("yellow-button").style.visibility = "invisible";
  render();
}

function takeTurn1(e) {
  if (!win) {
    if (board[35] === "") {
      let index = squares.findIndex(function(square) {
        return square === e.target;
      });
    } else if (board[28] === "") {
      let index = squares.findIndex(function(square) {
        return square === e.target;
      });
    } else if (board[21] === "") {
      let index = squares.findIndex(function(square) {
        return square === e.target;
      });
    } else if (board[14] === "") {
      let index = squares.findIndex(function(square) {
        return square === e.target;
      });
    } else if (board[7] === "") {
      let index = squares.findIndex(function(square) {
        return square === e.target;
      });
    } else if (board[0] === "") {
      let index = squares.findIndex(function(square) {
        return square === e.target;
      });
    }
  }
}

function takeTurn2() {
  if (!win) {
    if (board[36] === "") {
      let index = squares.findIndex(function(square) {
        return square === e.target;
      });
    } else if (board[29] === "") {
      let index = squares.findIndex(function(square) {
        return square === e.target;
      });
    } else if (board[22] === "") {
      let index = squares.findIndex(function(square) {
        return square === e.target;
      });
    } else if (board[15] === "") {
      let index = squares.findIndex(function(square) {
        return square === e.target;
      });
    } else if (board[8] === "") {
      let index = squares.findIndex(function(square) {
        return square === e.target;
      });
    } else if (board[1] === "") {
      let index = squares.findIndex(function(square) {
        return square === e.target;
      });
    }
  }
}

function takeTurn3() {
  if (!win) {
    if (board[37] === "") {
      let index = squares.findIndex(function(square) {
        return square === e.target;
      });
    } else if (board[30] === "") {
      let index = squares.findIndex(function(square) {
        return square === e.target;
      });
    } else if (board[23] === "") {
      let index = squares.findIndex(function(square) {
        return square === e.target;
      });
    } else if (board[16] === "") {
      let index = squares.findIndex(function(square) {
        return square === e.target;
      });
    } else if (board[9] === "") {
      let index = squares.findIndex(function(square) {
        return square === e.target;
      });
    } else if (board[2] === "") {
      let index = squares.findIndex(function(square) {
        return square === e.target;
      });
    }
  }
}

function takeTurn4() {
  if (!win) {
    if (board[38] === "") {
      let index = squares.findIndex(function(square) {
        return square === e.target;
      });
    } else if (board[31] === "") {
      let index = squares.findIndex(function(square) {
        return square === e.target;
      });
    } else if (board[24] === "") {
      let index = squares.findIndex(function(square) {
        return square === e.target;
      });
    } else if (board[17] === "") {
      let index = squares.findIndex(function(square) {
        return square === e.target;
      });
    } else if (board[10] === "") {
      let index = squares.findIndex(function(square) {
        return square === e.target;
      });
    } else if (board[3] === "") {
      let index = squares.findIndex(function(square) {
        return square === e.target;
      });
    }
  }
}

function takeTurn5() {

}

function takeTurn6() {

}

function takeTurn7() {

}
