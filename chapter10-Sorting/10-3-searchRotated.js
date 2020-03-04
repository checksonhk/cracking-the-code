/*
 Given a sorted array of n integers that has been rotated an unknown
number of times, write code to find an element in the array. You may assume that the array was
originally sorted in increasing order, 

Input: find 5 in [15, 16, 19, 20, 25, 1, 3, 4, 5, 7, 10, 14}
Output: 8 (the index of 5 in the array) 
*/

function searchRotated(array, target) {
  if (array.length === 0) return -1;
  let left = 0;
  let right = array.length - 1;

  // use binary search to index of original starting elm
  // could also use array.indexOf(Math.min(...array))
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (array[mid] > array[right]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  let start = left;
  // reset variables
  left = 0;
  right = array.length - 1;

  if (target >= array[start] && target <= array[right]) {
    left = start;
  } else {
    right = start;
  }
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (array[mid] === target) return mid;
    if (array[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return -1;
}

console.log(searchRotated([15, 16, 19, 20, 25, 1, 3, 4, 5, 7, 10, 14], 5));
console.log(searchRotated([15, 16, 19, 20, 25, 1, 3, 4, 5, 7, 10, 14], 15));
