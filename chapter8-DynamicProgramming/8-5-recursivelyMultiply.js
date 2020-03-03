/*
Write a recursive function to multiply two positive integers without using the
* operator. You can use addition, subtraction, and bit shifting, but you should minimize the number
of those operations. 
*/

// recursive solution
function multiply(n1, n2) {
  // if multiplying by 1 or 0 return 1 or 0
  if (n2 === 0) return 0;
  else if (n2 === 1) return n1;

  return n1 + multiply(n1, n2 - 1);
}

// dp solution

function multiplyD(n1, n2) {
  const nums = [];
  nums[0] = 0;
  nums[1] = n1;
  for (let i = 1; i <= n2; i++) {
    nums[i] = n1 + nums[i - 1];
  }

  return nums[n2];
}

console.log(multiply(3, 3));
console.log(multiplyD(2, 3));
