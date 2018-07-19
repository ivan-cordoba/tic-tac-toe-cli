const board = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
]

const boardToString = () => {
  const n = 3;
  let boardStr = '';
  for (let i = 0; i < n; i += 1) {
    for (let j = 0; j < n; j += 1) {
      const curr = board[i][j];
      if (curr === 'x') {
        if (j === 1) {
          boardStr += '| X |';
        } else {
          boardStr += ' X ';
        }
      } else if (curr === 'o') {
        if (j === 1) {
          boardStr += '| O |';
        } else {
          boardStr += ' O ';
        }
      } else {
        if (j === 1) {
          boardStr += '|   |';
        } else {
          boardStr += '   ';
        }
      }
    }
    if (i !== 2) {
      boardStr += '\n-----------\n';
    }
  }
  return boardStr;
}

const placePiece = (row, col, player) => {
  console.log(row, col);
  board[row][col] = player;
}

const checkRows = (player) => {
  for (let i = 0; i < 3; i += 1) {
    let check = true;
    for (let j = 0; j < 3; j += 1) {
      if (board[i][j] !== player) {
        check = false;
      }
    }
    if (check) {
      return true;
    }
  }
  return false;
};

const checkCols = (player) => {
  for (let i = 0; i < 3; i += 1) {
    let check = true;
    for (let j = 0; j < 3; j += 1) {
      if (board[j][i] !== player) {
        check = false;
      }
    }
    if (check) {
      return true;
    }
  }
  return false;
}

const checkDias = (player) => {
  if (board[0][0] === player && board[1][1] === player && board[2][2] === player) {
    return true;
  }
  if (board[0][2] === player && board[1][1] === player && board[2][0] === player) {
    return true;
  }
  return false;
}

const checkWin = (player) => {
  if (checkRows(player)) return true;
  if (checkCols(player)) return true;
  if (checkDias(player)) return true;
  return false;
};

module.exports = {
  boardToString,
  placePiece,
  checkWin,
}