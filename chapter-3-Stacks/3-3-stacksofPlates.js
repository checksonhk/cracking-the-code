class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class stackPlates {
  constructor() {
    this.stacks = [[]];
    // preset stack limit
    this.limit = 3;
    this.currentStack = 0;
  }

  push(value) {
    if (this.stacks[this.currentStack].length >= this.limit) {
      this.stacks.push([]);
      this.currentStack++;
    }
    this.stacks[this.currentStack].push(value);
  }

  pop() {
    const poppedValue = this.stacks[this.currentStack].pop();
    if (!this.stacks[this.currentStack].length) {
      this.currentStack--;
    }
    return poppedValue;
  }

  popAt(index) {
    return this.stacks[index].pop();
  }
}

const stacks = new stackPlates();
stacks.push(1);
stacks.push(2);
stacks.push(3);
stacks.push(1);
stacks.push(1);
stacks.push(1);
stacks.push(1);
console.log(stacks);
stacks.pop();
stacks.pop();
stacks.pop();
console.log(stacks);
stacks.popAt(0);
console.log(stacks);
