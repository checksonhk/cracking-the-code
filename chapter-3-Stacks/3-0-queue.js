class Queue {
  constructor() {
    this.data = [];
  }

  enqueue(value) {
    this.data.push(value);
  }

  dequeue() {
    return this.data.shift();
  }

  front() {
    if (this.data.length === 0) {
      return 'Queue is empty';
    }
    return this.data[0];
  }

  isEmpty() {
    return this.data.length !== 0 ? true : false;
  }
}
