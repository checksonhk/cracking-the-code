// Describe how you could use a single array to implement three stacks.
class threeStacks {
  constructor() {
    this.data = [[], [], []];
    this.stackIndex = [0, 1, 2];
  }

  pop(stackIndex = 0) {
    if (!this.stackIndex.includes(stackIndex)) {
      return 'Stack Index not avaliable';
    }
    return this.data[stackIndex].pop();
  }

  push(value, stackIndex = 0) {
    if (!this.stackIndex.includes(stackIndex)) {
      return 'Stack Index not avaliable';
    }
    this.data[stackIndex].push(value);
    return this.data[stackIndex];
  }

  peek(stackIndex = 0) {
    if (!this.stackIndex.includes(stackIndex)) {
      return 'Stack Index not avaliable';
    }
    return this.data[stackIndex][this.data[stackIndex].length - 1];
  }
}

three_stacks = new threeStacks();
three_stacks.push(101, 0);
three_stacks.push(102, 0);
three_stacks.push(103, 0);
three_stacks.push(201, 1);
console.log(three_stacks.data);
three_stacks.pop(0); // 103
three_stacks.pop(1); // 201
three_stacks.pop(1); // none
console.log(three_stacks.data);
console.log(three_stacks.peek(0));
