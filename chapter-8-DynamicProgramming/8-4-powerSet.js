/*
Write a method to return all subsets of a set. 
*/

function subSet(array) {
  const subSets = [];
  _generateSubset(0, array, [], subSets);
  return subSets;
}

function _generateSubset(index, nums, current, subSets) {
  // push to subSets a copy of current
  subSets.push(current.slice());
  for (let i = index; i < nums.length; i++) {
    // simulate the if you decide to add or not add the number into current
    current.push(nums[i]);
    _generateSubset(i + 1, nums, current, subSets);
    current.pop();
  }
}

console.log(powerSet([1, 2, 3]));
