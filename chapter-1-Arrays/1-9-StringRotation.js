/* 
Assume you have a method isSubstring which checks if one word is a substring
of another. Given two strings, si and s2, write code to check if s2 is a rotation of s1 using only one
call to isSubstring [e.g., "waterbottle " is a rotation "erbottlewat")
*/

const isSubString = (string1, string2) => {
  return string2.includes(string1) ? true : false;
};

/* 
const stringRotation = (string1, string2) => {
  if (string1.length !== string2.length) return false;
  let counter = 0;
  const MAX_SHIFTS = 25;
  while (counter < MAX_SHIFTS) {
    // this part of the algorithm is very inefficient
    const tempstring = string2.split('');
    const temp = tempstring.pop();
    tempstring.unshift(temp);
    string2 = tempstring.join('');
    counter += 1;
    if (string2 === string1) break;
  }
  // console.log('COUNTER', counter);
  return counter < MAX_SHIFTS ? true : false;
};
*/

const stringRotation = (string1, string2) => {
  return (string2 + string2).indexOf(string1) !== -1 && string1.length === string2.length;
};
// console.log(isSubString('bottle', 'waterbottle')); // should evaluate to true
console.log(stringRotation('waterbottle', 'erbottlewat')); // should return true
console.log(stringRotation('abcde', 'cdeab')); // should return true
console.log(stringRotation('abcde', 'abced')); // should return true
