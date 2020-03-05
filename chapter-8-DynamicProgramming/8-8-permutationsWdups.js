/*
 Write a method to compute all permutations of a string of unique
characters. 
*/
function permutations(string) {
  const permutations = [];
  const subString = [];
  const isUsed = Array(string.length).fill(false);
  // we need to sort here to make sure that duplicates are grouped, then we can check if current is same as prev
  string.sort((a, b) => a > b);
  getPermutations(string, subString, isUsed, permutations);
  return permutations;
}

function getPermutations(string, subString, used, permutations) {
  if (subString.length === string.length) {
    permutations.push(subString.slice());
    return;
  }
  for (let i = 0; i < string.length; i++) {
    if (string[i - 1] === string[i] && !used[i - 1]) continue;
    else {
      if (!used[i]) {
        used[i] = true;
        subString.push(string[i]);
        getPermutations(string, subString, used, permutations);
        subString.pop();
        used[i] = false;
      }
    }
  }
}

console.log(permutations([1, 1, 2]));
