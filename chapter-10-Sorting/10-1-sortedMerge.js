/*
Sorted Merge: You are given two sorted arrays, A and B, where A has a large enough buffer at the
end to hold B. Write a method to merge B into A in sorted order. 
*/

function merge(arr1, arr2) {
  const results = [];
  while (arr1.length && arr2.length) {
    if (arr1[0] < arr2[0]) {
      results.push(arr1.shift());
    } else results.push(arr2.shift());
  }
  return [...results, ...arr1, ...arr2];
}

// inplace
// - instead of going from front to back, check back to front

function inPlaceMerge(a, b) {
  let bidx = b.length - 1;
  let aidx = a.length - b.length - 1;
  while (aidx >= 0 && bidx >= 0) {
    if (a[aidx] > b[bidx]) {
      a[aidx + bidx + 1] = a[aidx];
      aidx -= 1;
    } else {
      a[aidx + bidx + 1] = b[bidx];
      bidx -= 1;
    }
  }
  while (bidx >= 0) {
    a[bidx] = b[bidx];
    bidx -= 1;
  }
  return a;
}

console.log(merge([2, 4, 6], [1, 3, 5]));
console.log(inPlaceMerge([2, 4, 6, null, null, null], [1, 3, 5]));
