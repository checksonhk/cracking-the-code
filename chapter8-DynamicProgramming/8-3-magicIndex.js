/*
A magic index in an array A[0. . .n-1 ] is defined to be an index such that A[i] =
i. Given a sorted array of distinct integers, write a method to find a magic index, if one exists, in
array A.
- FOLLOW UP
What if the values are not distinct? 
*/

// Brute Force

function magicIndex(array) {
  for (let i = 0; i < array.length; i++) {
    if (i === array[i]) return i;
  }
  return -1;
}

// console.log(magicIndex([-2, -1, 0, 2])); // return -1
// console.log(magicIndex([-20, 0, 1, 2, 3, 4, 5, 7, 20])); // return 7

function _magicIndexHelper(array, lower, upper) {
  if (lower === upper) return -1;

  const middleIdx = Math.floor((lower + upper) / 2);
  if (array[middleIdx] === middleIdx) return middleIdx;
  if (array[middleIdx] > middleIdx) {
    return _magicIndexHelper(array, lower, middleIdx);
  } else {
    return _magicIndexHelper(array, middleIdx + 1, upper);
  }
}

function magicIndexD(array) {
  if (!array.length) return -1;
  return _magicIndexHelper(array, 0, array.length);
}

console.log(magicIndexD([-2, -1, 0, 2])); // return -1

console.log(magicIndexD([-20, 0, 1, 2, 3, 4, 5, 7, 20])); // return 7
