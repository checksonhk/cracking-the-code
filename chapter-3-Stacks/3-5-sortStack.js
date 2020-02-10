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
    return this.data.length === 0 ? true : false;
  }
}

/* 
Write a program to sort a stack such that the smallest items are on the top. You can use
an additional temporary stack, but you may not copy the elements into any other data structure
(such as an array). The stack supports the following operations: push, pop, peek, and is Empty.
*/

/*
Create a temporary stack say tmpStack.
- While input stack is NOT empty do this:
- Pop an element from input stack call it temp

- while temporary stack is NOT empty and top of temporary stack is greater than temp,
pop from temporary stack and push it to the input stack
push temp in temporary stack

- The sorted numbers are in tmpStack
*/

function sortStack(inputStack) {
  const tempStack = new Stack();
  while (!inputStack.isEmpty()) {
    const temp = inputStack.pop();
    // console.log(temp);
    while (!tempStack.isEmpty() && tempStack.peek() > temp) {
      inputStack.push(tempStack.pop());
    }
    tempStack.push(temp);
  }

  while (!tempStack.isEmpty()) {
    inputStack.push(tempStack.pop());
  }
}

const stack = new Stack();
stack.push(3);
stack.push(2);
stack.push(1);
stack.push(5);
stack.push(4);
console.log('BEFORE SORT', stack);
sortStack(stack);
console.log('AFTER SORT', stack);
