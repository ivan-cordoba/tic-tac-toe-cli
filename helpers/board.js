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
  board[row][col] = player;
}

const checkRows = (player, boardIn = board) => {
  for (let i = 0; i < 3; i += 1) {
    let check = true;
    for (let j = 0; j < 3; j += 1) {
      if (boardIn[i][j] !== player) {
        check = false;
      }
    }
    if (check) {
      return true;
    }
  }
  return false;
};

const checkCols = (player, boardIn = board) => {
  for (let i = 0; i < 3; i += 1) {
    let check = true;
    for (let j = 0; j < 3; j += 1) {
      if (boardIn[j][i] !== player) {
        check = false;
      }
    }
    if (check) {
      return true;
    }
  }
  return false;
}

const checkDias = (player, boardIn = board) => {
  if (boardIn[0][0] === player && boardIn[1][1] === player && boardIn[2][2] === player) {
    return true;
  }
  if (boardIn[0][2] === player && boardIn[1][1] === player && boardIn[2][0] === player) {
    return true;
  }
  return false;
}

const checkWin = (player, boardIn = board) => {
  if (checkRows(player, boardIn)) return true;
  if (checkCols(player, boardIn)) return true;
  if (checkDias(player, boardIn)) return true;
  return false;
};

module.exports = {
  boardToString,
  placePiece,
  checkWin,
  checkRows,
  checkCols,
  checkDias,
}