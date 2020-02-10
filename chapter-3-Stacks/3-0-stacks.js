// LIFO - Last In First Out

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
    this.top--;
    return this.data.pop();
  }

  peek() {
    return this.data[this.top - 1];
  }

  isEmpty() {
    return this.data.length !== 0 ? true : false;
  }
}
