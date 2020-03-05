/*
In an array of integers, a "peak" is an element which is greater than or equal to
the adjacent integers and a "valley" is an element which is less than or equal to the adjacent integers. 
For example, in the array [5, 8,6, 2, 3,4, 6], 
[8,6] are peaks and [5, 2] are valleys. Given an array of integers, sort the array into an alternating sequence of peaks and valleys. 

 
 Process numbers in batches of 3 and if middle number is not smallest then swap
 it with smallest among 3.
 Like in [0, 1, 2, 4, 5] -> Process [0, 1, 2] => [1, 0, 2, 4, 5]
 -> Process [2, 4, 5] => [1, 0, 4, 2, 5], this is peak-valley-peak sequence.

 Complexity:
 O(n)
*/

function getMinIdx(array, n, i, j, k) {
  let iVal = i < n ? array[i] : Number.MAX_SAFE_INTEGER;
  let jVal = j < n ? array[j] : Number.MAX_SAFE_INTEGER;
  let kVal = k < n ? array[k] : Number.MAX_SAFE_INTEGER;

  minimum = Math.min(iVal, Math.min(jVal, kVal));
  if (iVal === minimum) return i;
  else if (jVal === minimum) return j;
  else return k;
}

function _getPeaksAndValleys(array, n) {
  let idx = 1;
  // iterate through the array
  while (idx < n) {
    // get the minimum of the 3 elements
    const minIdx = getMinIdx(array, n, idx - 1, idx, idx + 1);
    if (minIdx !== idx) {
      const temp = array[minIdx];
      array[minIdx] = array[idx];
      array[idx] = temp;
    }
    idx += 2;
  }
  return array;
}

function getPeaksAndValleys(array) {
  return _getPeaksAndValleys(array, array.length);
}

console.log(getPeaksAndValleys([10, 5, 2, 3, 9, 8, 7, 6, 1, 4]));
