// Represents the game board
let board = ['', '', '', '', '', '', '', '', ''];

// Represents the current player (X or O)
let currentPlayer = 'X';

// Array of winning combinations
const winningCombinations = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
  [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
  [0, 4, 8], [2, 4, 6]              // Diagonals
];

// Function to make a move
function makeMove(index) {
  if (board[index] === '') {
    board[index] = currentPlayer;
    document.getElementsByClassName('cell')[index].innerText = currentPlayer;
    if (checkWin()) {
      alert('Player ' + currentPlayer + ' wins!');
      resetBoard();
    } else if (board.indexOf('') === -1) {
      alert("It's a tie!");
      resetBoard();
    } else {
      currentPlayer = (currentPlayer === 'X') ? 'O' : 'X';
      if (currentPlayer === 'O') {
        makeComputerMove();
      }
    }
  }
}

// Function to make a move for the computer
function makeComputerMove() {
  // Simulate a delay for the computer's move (optional)
  setTimeout(() => {
    let emptyCells = board.reduce((acc, cell, index) => {
      if (cell === '') {
        acc.push(index);
      }
      return acc;
    }, []);

    let randomIndex = Math.floor(Math.random() * emptyCells.length);
    let computerMove = emptyCells[randomIndex];

    makeMove(computerMove);
  }, 500);
}

// Function to check for a win
function checkWin() {
  for (let combo of winningCombinations) {
    let [a, b, c] = combo;
    if (board[a] !== '' && board[a] === board[b] && board[a] === board[c]) {
      return true;
    }
  }
  return false;
}

// Function to reset the game board
function resetBoard() {
  board = ['', '', '', '', '', '', '', '', ''];
  currentPlayer = 'X';
  let cells = document.getElementsByClassName('cell');
  for (let i = 0; i < cells.length; i++) {
    cells[i].innerText = '';
  }
}
