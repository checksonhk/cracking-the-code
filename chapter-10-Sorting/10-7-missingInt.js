/*
Given an input file with four billion non-negative integers, provide an algorithm to
generate an integer that is not contained in the file. Assume you have 1 GB of memory available for
this task.
FOLLOW UP
What if you have only 10 MB of memory? Assume that ail the values are distinct and we now have
no more than one billion non-negative integers. 
*/

// sum of series s = n*(n +1)/2

function missingInt(file) {
  const n = file.length;
  const expected = ((n + 1) * (n + 2)) / 2;
  const sum = file.reduce((acc, curr) => acc + curr);
  return expected - sum;
}

console.log(missingInt([1, 2, 3, 5, 6, 7, 8, 9]));
