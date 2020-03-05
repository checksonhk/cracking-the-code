/*
Given an M x N matrix in which each row and each column is sorted in
ascending order, write a method to find an element. 

input
[[1,2,3],
[4,5,6],
[7,8,9]]

The row index of an an item in a matrix is n / totalColumns where n is the number of enteries
The col index of an an item in a matrix is n % totalRows 
*/

function _binarySearch(array, low, high, target) {
  if (low > high) return -1;
  const mid = Math.floor((low + high) / 2);
  if (array[mid] === target) return mid;

  if (array[mid] < target) {
    return _binarySearch(array, mid + 1, high, target);
  } else {
    return _binarySearch(array, low, mid - 1, target);
  }
}

function binarySearch(array, target) {
  return _binarySearch(array, 0, array.length, target);
}

function sortedMatrix1(matrix, target) {
  // this solution is n log(n)
  for (const index in matrix) {
    const location = binarySearch(matrix[index], target);
    if (location !== -1) {
      return [+index, location];
    }
  }
}

// imagine the matrix being a 1D array and preform binarySearch on that array
// this solution is log(n*m)
function sortedMatrix2(matrix, target) {
  let left = 0;
  let right = matrix[matrix.length - 1][matrix[0].length - 1];

  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    const idxR = Math.floor(mid / matrix[0].length);
    const idxC = mid % matrix.length;
    if (matrix[idxR][idxC] === target) {
      return [idxR, idxC];
    }

    if (matrix[idxR][idxC] < target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
}
console.log(
  sortedMatrix2(
    [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ],
    5,
  ),
);

/* What if now the matrix now looks liks this 
[[1,4,7,11],
[8,9,10,20],
[11,12,17,30]]

key thing to note here is that the elms in a row are sorted AND elms in a column are sorted
*/

// this has a time complexity of O(m+n)
function searchMatrix(matrix, target) {
  // start at bottom left
  let col = 0;
  let row = matrix.length - 1;

  // while within boundaries
  while (col < matrix[0].length && row >= 0) {
    if (matrix[row][col] === target) return [row, col];

    if (target < matrix[row][col]) {
      // we know its not on the right so we move up
      row--;
      continue;
    }
    if (target > matrix[row][col]) {
      // we know moving left increases the value
      col++;
    }
  }
  return -1;
}

console.log(
  searchMatrix(
    [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ],
    5,
  ),
);
