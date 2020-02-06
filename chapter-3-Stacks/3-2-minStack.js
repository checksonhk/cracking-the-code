// How would you design a stack which, in addition to push and pop, has a function min which returns the minimum eiement? Push, pop and min should ail operate in 0(1 ) tim

/*
class Stack {
  constructor() {
    this.data = [];
    this.top = 0;
  }

  push(value) {
    this.data[this.top] = value;
    this.top++;
  }

  pop() {
    return this.data.pop();
  }

  min() {
    return Math.min(...this.data);
  }
}
*/

// implement with Node

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this._min = null;
  }

  push(value) {
    const node = new Node(value);
    if (!this._min || node.value < this._min.value) {
      this._min = node;
    }
    if (this.top) this.top.next = node;
    this.top = node;
  }

  pop() {
    if (!this.top) return null;
    this.min = this._min.next;
    const popped = this.top;
    this.top = this.top.next;
    return popped;
  }

  minStack() {
    return this._min;
  }
}

stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);
console.log(stack);
stack.pop();
stack.minStack();
console.log(stack);
