/*
Write a method to replace all spaces in a string with '%20'. You may assume that the string
has sufficient space at the end to hold the additional characters, and that you are given the "true"
length of the string
*/
const URLify = string => {
  const output = string.split(' ').join('%20');
  return output;
};

console.log(URLify('Mr John Smith'));
