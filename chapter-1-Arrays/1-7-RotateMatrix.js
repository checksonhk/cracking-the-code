/* 
Given an image represented by an NxN matrix, where each pixel in the image is 4
bytes, write a method to rotate the image by 90 degrees. Can you do this in place? 
*/

/* First solution does not do in place */
// - transpose
// - reverse every row of transpose
/*
const rotateMatrix = matrix => {
  const output = [];
  for (let row = 0; row < matrix.length; row++) {
    output.push([]);
    for (let col = 0; col < matrix[row].length; col++) {
      output[row][col] = matrix[col][row];
    }
    output[row].reverse();
  }
  console.log(output);
};
*/

/* inPlace Solution */

const rotateMatrix = matrix => {
  const N = matrix.length;
  for (let row = 0; row < N / 2; row++) {
    for (let col = 0; col < N - row - 1; col++) {
      // store current value in a temp
      const temp = matrix[row][col];
      // move values right to top
      matrix[row][col] = matrix[col][N - row - 1];
      // move values bottom to right
      matrix[col][N - 1 - row] = matrix[N - 1 - row][N - 1 - col];
      // move values from left to bottom
      matrix[N - 1 - row][N - 1 - col] = matrix[N - 1 - col][row];
      // move temp to left
      matrix[N - 1 - col][row] = temp;
    }
  }
  return matrix;
};

console.log(
  rotateMatrix([
    [1, 2],
    [3, 4],
  ]),
);
// should get [[2,4], [1,3]]

// console.log(
//   rotateMatrix([
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
//   ]),
// );
// should get [[7,4,1],[8,5,2],[9,6,3]]
