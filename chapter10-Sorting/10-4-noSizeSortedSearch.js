/*
You are given an array-like data structure List y which lacks a size
method. It does, however, have an elementAt (i ) method that returns the element at index i in
0(1 ) time, if i is beyond the bounds of the data structure, it returns -1. (For this reason, the data
structure only supports positive integers.) 

Given a List y which contains sorted, positive integers,
find the index at which an element X occurs. If x occurs multiple times, you may return any index. 
*/

// first create method to find Size, we can do so by using an exponential backoff

function bsearch(array, left, right, target) {
  const mid = Math.floor((left + right) / 2);
  if (mid < 0) return -1;
  if (array[mid] < target) {
    bsearch(array, mid + 1, right, target);
  } else if (array[mid] < target) {
    bsearch(array, left, mid, target);
  } else return mid;
}

function search(array, target) {
  let left = 0;
  let right = 1;
  let value = array[right];
  while (array[right] && value <= target) {
    left = right;
    right *= 2;
    value = array[right];
  }

  return bsearch(array, left, right, target);
}

console.log(bsearch([1, 2, 3, 4], 0, 3, 2));
console.log(search([1, 2, 3, 4, 5, 6, 7, 8, 9], 7));
