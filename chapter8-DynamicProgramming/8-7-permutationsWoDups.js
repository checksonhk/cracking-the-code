/*
 Write a method to compute all permutations of a string of unique
characters. 
*/
function permutations(string) {
  const permutations = [];
  const subString = [];
  const isUsed = Array(string.length).fill(false);
  getPermutations(string, subString, isUsed, permutations);
  return permutations;
}

function getPermutations(string, subString, used, permutations) {
  if (subString.length === string.length) {
    permutations.push(subString.slice());
    return;
  }

  for (let i = 0; i < string.length; i++) {
    if (!used[i]) {
      used[i] = true;
      subString.push(string[i]);
      getPermutations(string, subString, used, permutations);
      subString.pop();
      used[i] = false;
    }
  }
}

console.log(permutations('happy'));
