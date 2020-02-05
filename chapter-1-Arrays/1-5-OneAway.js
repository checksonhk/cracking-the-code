/*
There are three types of edits that can be performed on strings: insert a character,
remove a character, or replace a character. Given two strings, write a function to check if they are
one edit (or zero edits) away
*/

const oneAway = (string1, string2) => {
  if (string1 === string2) return true;
  let edit = 0;
  for (const indx in string1) {
    if (string1[indx] !== string2[indx]) {
      edit += 1;
    }
  }
  return edit > 1 ? false : true;
};

console.log(oneAway('pale', 'pile'));
console.log(oneAway('pales', 'pale'));
console.log(oneAway('pale', 'bale'));
console.log(oneAway('pales', 'bake'));
console.log(oneAway('aaa', 'aaaa'));
