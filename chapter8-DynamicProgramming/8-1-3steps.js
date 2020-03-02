/*
A child is running up a staircase with n steps and can hop either 1 step, 2 steps, or 3
steps at a time, implement a method to count how many possible ways the child can run up the
stairs. 
*/

// Recursive
function threeSteps(n) {
  if (n === 0) {
    return 1;
  }

  if (n === 1 || n === 2) {
    return n;
  }

  return threeSteps(n - 3) + threeSteps(n - 2) + threeSteps(n - 1);
}

// Dynamic Programming Way
// - store value in an array
function threeStepsD(n) {
  const res = [];
  res[0] = 1;
  res[1] = 1;
  res[2] = 2;
  for (let i = 3; i < n + 1; i++) {
    res[i] = res[i - 1] + res[i - 2] + res[i - 3];
  }
  return res[n];
}

// expand the problem to take any steps
// eg if steps was [1,3,5]
function steps(n, steps) {
  if (n === 0) return 1;
  const nums = [];
  nums[0] = 1;
  for (let i = 1; i <= n; i++) {
    let total = 0;
    for (const step of steps) {
      if (i - step >= 0) {
        total += nums[i - step];
      }
    }
    nums[i] = total;
  }

  return nums[n];
}
console.log(threeSteps(4));
console.log(threeStepsD(4));
console.log(steps(4, [1, 2, 3]));
