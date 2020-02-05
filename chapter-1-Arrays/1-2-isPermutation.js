/* 
Given two strings, write a method to decide if one is a permutation of the
other. 
*/

const isPermutation = (string1, string2) => {
  if (string1.length !== string2.length) return false;
  const string1Obj = {};
  for (const char of string1) {
    string1Obj[char] = char;
  }

  for (const char of string2) {
    if (!string1Obj[char]) {
      return false;
    }
  }
  return true;
};

console.log(isPermutation('abc', 'bca'));
console.log(isPermutation('abcdef', 'bcadej'));
