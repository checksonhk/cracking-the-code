/*
Imagine you are reading in a stream of integers. Periodically, you wish to be able
to look up the rank of a number x (the number of values less than or equal to x). Implement the data
structures and algorithms to support these operations. That is, implement the method trac k (i n t
x), which is called when each number is generated, and the method getRankOfNumber(int
x), which returns the number of values tess than or equal to x (not including x itself). 

Example: 
Input : arr[] = [5, 1, 14, 4, 15, 9, 7, 20, 11], x = 20;
Ouput: 8

*/

// time complexity of O(n)
function rank1(array, target) {
  let count = 0;
  array.forEach(num => {
    if (num < target) {
      count++;
    }
  });
  return count;
}

function binarySearch(array, left, right, target) {
  if (left > right) return -1;

  const mid = Math.floor((left + right) / 2);
  if (array[mid] === target) return mid;

  if (array[mid] < target) {
    return binarySearch(array, mid + 1, right, target);
  } else {
    return binarySearch(array, left, mid - 1, target);
  }
}

function rank(array, target) {
  // sort is O(n*log(n))
  const sorted = array.sort((a, b) => a - b);
  // search is O(log(n))
  return binarySearch(sorted, 0, sorted.length, target);
}

console.log(rank([5, 1, 14, 4, 15, 9, 7, 20, 11], 20));
