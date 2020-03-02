const squares = Array.from(document.querySelectorAll("#board div"));
document.getElementById("board").onclick = takeTurn;

const redCheckers = [];
var step = 0;
var indexReference;
window.onload= function() {
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

    redCheckers[redCheckers.length] = document.getElementById("42")
    redCheckers[redCheckers.length] = document.getElementById("44")
    redCheckers[redCheckers.length] = document.getElementById("46")
    redCheckers[redCheckers.length] = document.getElementById("48")
    redCheckers[redCheckers.length] = document.getElementById("49")
    redCheckers[redCheckers.length] = document.getElementById("51")
    redCheckers[redCheckers.length] = document.getElementById("53")
    redCheckers[redCheckers.length] = document.getElementById("55")
    redCheckers[redCheckers.length] = document.getElementById("58")
    redCheckers[redCheckers.length] = document.getElementById("60")
    redCheckers[redCheckers.length] = document.getElementById("62")
    redCheckers[redCheckers.length] = document.getElementById("64")

    win = null;
    render();
}

  function render() {
    board.forEach(function(mark, index) {
      squares[index].textContent = mark;
    });
    for (var i = 0; i < board.length; i++) {
      squares[i].style.color = "black"
    }
    for (var i = 0; i < board.length; i++) {
      if (squares[i].textContent == "♔") {
        squares[i].style.fontSize = "50px"
      } else {
        squares[i].style.fontSize = "100px"
      }
    }
    for (var i = 0; i < redCheckers.length ; i++) {
      squares[redCheckers[i].id-1].style.color = "red"
    }
    if (squares[0].style.color == "red" && board[0] == "\u2022") {
      board[0] = "♔"
    } else if (squares[2].style.color == "red" && board[2] == "\u2022") {
      board[2] = "♔"
    } else if (squares[4].style.color == "red" && board[4] == "\u2022") {
      board[4] = "♔"
    } else if (squares[6].style.color == "red" && board[6] == "\u2022") {
      board[6] = "♔"
    } else if (squares[63].style.color == "black" && board[63] == "\u2022") {
      board[63] = "♔"
    } else if (squares[61].style.color == "black" && board[61] == "\u2022") {
      board[61] = "♔"
    } else if (squares[59].style.color == "black" && board[59] == "\u2022") {
      board[59] = "♔"
    } else if (squares[57].style.color == "black" && board[57] == "\u2022") {
      board[57] = "♔"
    }
  }
  function takeTurn(e) {
    turn = document.getElementById("message").textContent.substring(6,document.getElementById("message").textContent.length)
      let index = squares.findIndex(function(square) {
        return square === e.target;
      });
        if (((board[index] == "•" || board[index] == "♔") && turn.toLowerCase() == squares[index].style.color) || step == 1) {
          if (step == 1) {
            if (turn.toLowerCase() == "red" && (index + 9 == indexReference || index + 7 == indexReference) && index - index%8 +8 == indexReference - indexReference%8 && board[index] == "" && board[indexReference] == "•") {
              board[indexReference] = ""
              board[index] = "•"
              for (var i = 0; i < redCheckers.length; i++) {
                if (redCheckers[i] == document.getElementById(indexReference + 1)) {
                  redCheckers.splice(i,1,document.getElementById(index + 1))
                }
              }
            } else if (turn.toLowerCase() == "black" && (index - 9 == indexReference || index - 7 == indexReference) && index - index%8 - 8 == indexReference - indexReference%8 && board[index] == "" && board[indexReference] == "•") {
              board[indexReference] = ""
              board[index] = "•"
            } else if (turn.toLowerCase() == "red" && (index + 18 == indexReference || index + 14 == indexReference) && index - index%8 +16 == indexReference - indexReference%8 && board[index] == "" && board[indexReference] == "•" && (board[(indexReference + index)/2] == "•" || board[(indexReference + index)/2] == "♔") && squares[(indexReference + index)/2].style.color == "black") {
              board[indexReference] = ""
              board[(indexReference + index)/2] = ""
              board[index] = "•"
              for (var i = 0; i < redCheckers.length; i++) {
                if (redCheckers[i] == document.getElementById(indexReference + 1)) {
                  redCheckers.splice(i,1,document.getElementById(index + 1))
                }
              }
            } else if (turn.toLowerCase() == "black" && (index - 18 == indexReference || index - 14 == indexReference) && index - index%8 -16 == indexReference - indexReference%8 && board[index] == "" && board[indexReference] == "•" && (board[(indexReference + index)/2] == "•" || board[(indexReference + index)/2] == "♔") && squares[(indexReference + index)/2].style.color == "red") {
              board[indexReference] = ""
              board[(indexReference + index)/2] = ""
              board[index] = "•"
              for (var i = 0; i < redCheckers.length; i++) {
                if (redCheckers[i] == document.getElementById((indexReference + index)/2 +1)) {
                  redCheckers.splice(i,1)
                }
                console.log((indexReference + index)/2)
              }
            } else if (turn.toLowerCase() == "red" && ((index + 9 == indexReference || index + 7 == indexReference) || (index - 9 == indexReference || index - 7 == indexReference))&& (index - index%8 +8 == indexReference - indexReference%8 || index - index%8 -8 == indexReference - indexReference%8)&& board[index] == "" && board[indexReference] == "♔") {
              board[indexReference] = ""
              board[index] = "♔"
              for (var i = 0; i < redCheckers.length; i++) {
                if (redCheckers[i] == document.getElementById(indexReference + 1)) {
                  redCheckers.splice(i,1,document.getElementById(index + 1))
                }
              }
              if (turn.toLowerCase() == "red" && board[index] == "•" && step == 1) {
                document.getElementById("message").textContent = "Turn: Black"
                step = 0;
                render()
              } else if (turn.toLowerCase() == "black" && step == 1) {
                document.getElementById("message").textContent = "Turn: Red"
                step = 0;
                render()
              }
            } else if (turn.toLowerCase() == "black" && ((index + 9 == indexReference || index + 7 == indexReference) || (index - 9 == indexReference || index - 7 == indexReference))&& (index - index%8 +8 == indexReference - indexReference%8 || index - index%8 -8 == indexReference - indexReference%8)&& board[index] == "" && board[indexReference] == "♔") {
              board[indexReference] = ""
              board[index] = "♔"
            } else if (turn.toLowerCase() == "red" && (index + 18 == indexReference || index + 14 == indexReference || index - 14 == indexReference || index - 18 == indexReference) && (index - index%8 +16 == indexReference - indexReference%8 || index - index%8 -16 == indexReference - indexReference%8)&& board[index] == "" && board[indexReference] == "♔" && ((board[(indexReference + index)/2] == "•" || board[(indexReference + index)/2] == "♔"))&& squares[(indexReference + index)/2].style.color == "black") {
              board[indexReference] = ""
              board[(indexReference + index)/2] = ""
              board[index] = "♔"
              for (var i = 0; i < redCheckers.length; i++) {
                if (redCheckers[i] == document.getElementById(indexReference + 1)) {
                  redCheckers.splice(i,1,document.getElementById(index + 1))
                }
              }
              if (turn.toLowerCase() == "red" && board[index] == "•" && step == 1) {
                document.getElementById("message").textContent = "Turn: Black"
                step = 0;
                render()
              } else if (turn.toLowerCase() == "black" && step == 1) {
                document.getElementById("message").textContent = "Turn: Red"
                step = 0;
                render()
              }
            } else if (turn.toLowerCase() == "black" && (index + 18 == indexReference || index + 14 == indexReference || index - 14 == indexReference || index - 18 == indexReference) && (index - index%8 +16 == indexReference - indexReference%8 || index - index%8 -16 == indexReference - indexReference%8)&& board[index] == "" && board[indexReference] == "♔" && ((board[(indexReference + index)/2] == "•" || board[(indexReference + index)/2] == "♔"))&& squares[(indexReference + index)/2].style.color == "red") {
              board[indexReference] = ""
              board[(indexReference + index)/2] = ""
              board[index] = "♔"
              for (var i = 0; i < redCheckers.length; i++) {
                if (redCheckers[i] == document.getElementById((indexReference + index)/2 +1)) {
                  redCheckers.splice(i,1)
                }
              }
            } else {
              step = -1
            }
          }
          indexReference = index
          if (step == 0) {
            step = 1
          } else if (step == 1) {
            step = 2
          } else if (step == -1) {
            step = 0
          }
          if (turn.toLowerCase() == "red" && board[index] == "•" && step == 2) {
            document.getElementById("message").textContent = "Turn: Black"
            step = 0;
            render()
          } else if (turn.toLowerCase() == "black" && step == 2) {
            document.getElementById("message").textContent = "Turn: Red"
            step = 0;
            render()
          }
        }

    }
