/*
Given a sorted array of strings that is interspersed with empty strings, write a
method to find the location of a given string. 

Input ["for", "geeks", "", "", "", "", "ide", "practice", "", "", "", "quiz"] ,"geeks"
Output : 1
*/

function sparseSearch1(array, target) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) return i;
  }
}

function _sparseSearch2(array, low, high, target) {
  if (low > high) return -1;
  let mid = Math.floor((low + high) / 2);

  // if chosen midpointis empty shift until there is a valid word
  if (array[mid] === '') {
    let left = mid - 1;
    let right = mid + 1;

    /*Search for both side for a non empty string*/
    while (true) {
      /* No non-empty string on both sides */
      if (left < low && right > high) return -1;

      // shift to the left first
      if (left >= low && array[left] !== '') {
        mid = left;
        break;
        // else shift to the right
      } else if (right <= high && array[right] !== '') {
        mid = right;
        break;
      }

      left--;
      right++;
    }
  }

  if (array[mid] === target) return mid;

  if (array[mid] < target) {
    return _sparseSearch2(array, mid + 1, high, target);
  } else {
    return _sparseSearch2(array, low, mid - 1, target);
  }
}

function sparseSearch2(array, target) {
  return _sparseSearch2(array, 0, array.length - 1, target);
}

// console.log(sparseSearch1(['for', 'geeks', '', '', '', '', 'ide', 'practice', '', '', '', 'quiz'], 'geeks'));
console.log(sparseSearch2(['for', 'geeks', '', '', '', '', 'ide', 'practice', '', '', '', 'quiz'], 'geeks'));
