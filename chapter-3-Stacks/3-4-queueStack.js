// stacks are LIFO
// queues are FIFO First in First Out

// Queue via Stacks: Implement a MyQueue class which implements a queue using two stacks.

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

class queueStack {
  constructor() {
    this.stack1 = new Stack();
    this.stack2 = new Stack();
  }

  enqueue(value) {
    // This method makes sure that oldest entered element is always at the top of stack 1, so that deQueue operation just pops from stack1. To put the element at top of stack1, stack2 is used.

    while (this.stack1.data.length) {
      this.stack2.push(this.stack1.pop());
    }
    this.stack1.push(value);
    while (this.stack2.data.length) {
      this.stack1.push(this.stack2.pop());
    }
  }

  dequeue() {
    if (this.stack1.length === 0) console.log('ERROR queue empty');
    return this.stack1.pop();
  }
}

/*
- Better implementation, make the deQeue operation costly 
 
enQueue(q,  x)
  1) Push x to stack1 (assuming size of stacks is unlimited).
Here time complexity will be O(1)

deQueue(q)
  1) If both stacks are empty then error.
  2) If stack2 is empty
       While stack1 is not empty, push everything from stack1 to stack2.
  3) Pop the element from stack2 and return it.
Here time complexity will be O(n)

*/

const queue = new queueStack();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue);
queue.dequeue();
queue.dequeue();
console.log(queue);
