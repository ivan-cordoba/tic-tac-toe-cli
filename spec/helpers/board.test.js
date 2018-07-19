const {
  checkWin,
  checkRows,
  checkCols,
  checkDias,
} = require('../../helpers/board.js');

test('check row wins', () => {
  const boardA = [['x', 'x', 'x'],[null, null, null],[null, null, null]];
  const boardB = [[null, null, null],['x', 'x', 'x'],[null, null, null]];
  const boardC = [[null, null, null],[null, null, null],['x', 'x', 'x']];
  const boardD = [['x', null, null],['x', null, null],['x', null, null]];
  expect(checkRows('x', boardA)).toBe(true);
  expect(checkRows('x', boardB)).toBe(true);
  expect(checkRows('x', boardC)).toBe(true);
  expect(checkRows('x', boardD)).toBe(false);
});

test('check column wins', () => {
  const boardA = [['x', null, null],['x', null, null],['x', null, null]];
  const boardB = [[null, 'x', null],[null, 'x', null],[null, 'x', null]];
  const boardC = [[null, null, 'x'],[null, null, 'x'],[null, null, 'x']];
  const boardD = [[null, null, null],[null, null, null],['x', 'x', 'x']];
  expect(checkCols('x', boardA)).toBe(true);
  expect(checkCols('x', boardB)).toBe(true);
  expect(checkCols('x', boardC)).toBe(true);
  expect(checkCols('x', boardD)).toBe(false);
});

test('check daigonal wins', () => {
  const boardA = [['x', null, null],[null, 'x', null],[null, null, 'x']];
  const boardB = [[null, null, 'x'],[null, 'x', null],['x', null, null]];
  expect(checkDias('x', boardA)).toBe(true);
  expect(checkDias('x', boardB)).toBe(true);
});

test('check overall win', () => {
  const boardA = [['x', 'x', 'x'],[null, null, null],[null, null, null]];
  const boardB = [[null, 'x', null],[null, 'x', null],[null, 'x', null]];
  const boardC = [[null, null, 'x'],[null, 'x', null],['x', null, null]];
  expect(checkWin('x', boardA)).toBe(true);
  expect(checkWin('x', boardB)).toBe(true);
  expect(checkWin('x', boardC)).toBe(true);
});
