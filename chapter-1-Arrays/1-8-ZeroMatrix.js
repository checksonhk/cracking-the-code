/*
Zero Matrix: Write an algorithm such that if an element in an MxN matrix is 0, its entire row and
column are set to 0. 
*/

const zeroMatrix = matrix => {
  const height = matrix.length;
  const width = matrix[0].length;

  // This implementation currently has space complexitiy of O(H + W) as we need to store two arrays which keep track of which rows/cols need to be set zero. We can reduce the space complexity by removing the boolean_row array and converting that to a variable, as if any value in the row is a zero, all the values of the row need to be zero.

  // To further reduce space complexity, use the first row of the matrix to act as our boolean_col

  // const boolean_row = new Array(height);
  // const boolean_col = new Array(width);

  let boolean_first_row_zero = false;
  for (const col in matrix) {
    if (matrix[0][col] === 0) {
      boolean_first_row_zero = true;
    }
  }

  for (const row in matrix) {
    for (const col in matrix[row]) {
      if (matrix[row][col] === 0) {
        // boolean_row[row] = true;
        // boolean_col[col] = true;
        matrix[0][col] = 0; // denotes the whole column should be filled with zeros
      }
    }
  }

  // skip first row now, as it is acting as boolean_col
  for (let row = 1; row < height; row++) {
    let contains_row = false;
    for (const col in matrix[row]) {
      if (matrix[row][col] === 0) {
        // removing the boolean_row array and converting that to a variable
        contains_row = true;
        break;
      }
    }

    for (const col in matrix) {
      if (contains_row || matrix[0][col] === 0) {
        matrix[row][col] = 0;
      }
    }
  }

  if (boolean_first_row_zero) {
    for (const col in matrix) {
      matrix[0][col] = 0;
    }
  }
  return matrix;
};

console.log(
  zeroMatrix([
    [1, 2],
    [0, 4],
  ]),
);
// should get [[0,2], [0,0]]

console.log(
  zeroMatrix([
    [1, 2, 3],
    [0, 5, 6],
    [7, 8, 0],
  ]),
);
// should get [[0,2,0],[0,0,0],[0,0,9]]
