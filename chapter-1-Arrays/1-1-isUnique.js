// Implement an algorithm to determine if a string has all unique characters. What if you cannot use additional data structures?

const isUnique = string => {
  // create seperate arr then see if newly inserted words are in arr
  const seenChar = [];
  for (const char of string) {
    if (seenChar.includes(char)) {
      return false;
    } else {
      seenChar.push(char);
    }
  }
  return true;

  // return seenChar.length === string.length ? true : false;
};

/*
// use Set data structure and compare with original string, if they are the same, all the characters are unique, otherwise it's not. This works as Sets can only store unique values of any type

const isUnique = string => {
  const char = string.split('');
  const charSet = new Set(char);

  return char.length === [...charSet].length ? true : false;
};
*/

console.log(isUnique('abcdegfhijk'));
console.log(isUnique('happy'));
