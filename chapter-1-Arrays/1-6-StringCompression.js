/* 
Implement a method to perform basic string compression using the counts
of repeated characters. For example, the string aabcccccaaa would become a2blc5a3, If the
"compressed" string would not become smaller than the original string, your method should return
the original string. You can assume the string has only uppercase and lowercase letters (a - z). 
*/

const stringCompression = string => {
  if (string.lenght < 2) return string;
  let output = '';
  let currentChar = ['', ''];
  for (const char of string) {
    if (char !== currentChar[0]) {
      output += currentChar.join('');
      currentChar[0] = char;
      currentChar[1] = 1;
    } else {
      currentChar[1] += 1;
    }
  }
  output += currentChar.join('');
  return output.length > string.length ? string : output;
};

console.log(stringCompression('aabcccccaaa'));
console.log(stringCompression('abcd'));
console.log(stringCompression('a'));
console.log(stringCompression(''));
