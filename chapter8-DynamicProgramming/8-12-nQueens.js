/*
Write an algorithm to print all ways of arranging eight queens on an 8x8 chess board
so that none of them share the same row, column, or diagonal. In this case, "diagonal" means all
diagonals, not just the two that bisect the board. 
*/

function nQueens(n) {
  const results = [];
  _solveNQueens(n, 0, [], results);
  return results;
}

// colPlacement is to keep track of where we place the queens
/*
  The colPlacements list will hold the column we place a
  queen for the i'th row.
  So if I have [ 1, 3, 0, 2 ] that means:
  It is a 4 x 4 board.
  row index 0 has a queen placed in column index 1
  row index 1 has a queen placed in column index 3
  row index 2 has a queen placed in column index 0
  row index 3 has a queen placed in column index 2
*/

function _solveNQueens(n, row, colPlacements, results) {
  // if we reach the end of the board
  if (row === n) {
    results.push(generateBoardFromPlacements(n, colPlacements.slice()));
  } else {
    for (let col = 0; col < n; col++) {
      // push current col into colPlacements
      colPlacements.push(col);
      // checks if placement is valid
      if (_isValid(colPlacements)) {
        // solve for queens with colPlacements updated
        _solveNQueens(n, row + 1, colPlacements, results);
      }
      colPlacements.pop();
    }
  }
}

function _isValid(colPlacements) {
  const rowIdx = colPlacements.length - 1;
  for (let i = 0; i < rowIdx; i++) {
    /*
        1.) absoluteColumnDistance == 0
          If the absolute difference in columns is 0 then we placed in a column being
          attacked by the i'th queen.
        2.) absoluteColumnDistance == rowDistance
          If the absolute difference in columns equals the distance in rows from the
          i'th queen we placed, then the queen we just placed is attacked diagonally.
        For Constraint #2 imagine this:
        [
          ". . Q .",  <--- row 0 (Queen 1)
          "Q . . .",  <--- row 1 (Queen 2)
          ". Q . .",  <--- row 2 (Queen 3)
          ". . . ."
        ]
        1.) 
          Absolute Column Distance Between Queen 2 & 3 == 1.
          Queen 2 is in col 0, Queen 3 is in col 1. 1 - 0 = 1.
        2.)
          Absolute Row Distance Between Queen 2 & 3 == 1
          Queen 2 is in row 1, Queen 3 is in row 2. 2 - 1 = 1.
      */

    const diff = Math.abs(colPlacements[i] - colPlacements[rowIdx]);
    if (diff === 0 || diff === rowIdx - 1) {
      return false;
    }
  }
  return true;
}

function generateBoardFromPlacements(n, colPlacements) {
  const board = [];
  // console.log(colPlacements);
  const totalItems = colPlacements.length;

  // add row for each queen placed
  for (let row = 0; row < totalItems; row++) {
    const newRow = [];
    for (let col = 0; col < n; col++) {
      if (col === colPlacements[row]) {
        newRow.push('Q');
      } else newRow.push('');
    }

    board.push(newRow);
  }

  return board;
}

console.log(nQueens(8));
