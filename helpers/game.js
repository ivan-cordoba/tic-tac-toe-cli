const readline = require('readline');
const { boardToString, placePiece, checkWin } = require('./board.js');

let row = null;
let col = null;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const askForRow = (player) => {
  rl.question(`Player ${player} pick row (0, 1, 2)`, (answer) => {
    if (answer === '0' || answer === '1' || answer === '2') {
      row = parseInt(answer);
      askForCol(player);
    } else {
      askForRow(player);
    }
  });
};

const askForCol = (player) => {
  rl.question(`Player ${player} pick col (0, 1, 2)`, (answer) => {
    if (answer === '0' || answer === '1' || answer === '2') {
      col = parseInt(answer);
      placePiece(row, col, player);
      console.log(boardToString());
      if (checkWin(player)) {
        console.log(`Player ${player} WINS!`);
        rl.close();
        return;
      }
      if (player === 'x') {
        askForRow('o');
      } else {
        askForRow('x');
      }
    } else {
      askForCol(player);
    }
  });
};

const startGame = () => {
  askForRow('x');
};

module.exports = {
  startGame,
};
