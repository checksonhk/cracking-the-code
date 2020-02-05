/*
Given a string, write a function to check if it is a permutation of a palindrome. A palindrome is a word or phrase that is the same forwards and backwards. A permutation
is a rearrangement of letters. The palindrome does not need to be limited to just dictionary words
*/

const plaindromePermutations = string => {
  const stringObj = {};
  for (const char of string) {
    if (stringObj[char]) stringObj[char] += 1;
    else stringObj[char] = 1;
  }

  // if string is even all chars should have a value of 2
  // if string is odd all chars should have a value of 2 but 1
  let odd = 0;
  for (const count of Object.values(stringObj)) {
    if (count % 2 > 0) {
      odd += 1;
      if (odd > 1) return false;
    }
  }
  return true;
};

console.log(plaindromePermutations('tactcoa'));
console.log(plaindromePermutations('code'));
console.log(plaindromePermutations('racecar'));
console.log(plaindromePermutations('recar'));
