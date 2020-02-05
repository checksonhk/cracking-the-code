const LinkedList = require('./2-0-linkedList');

const test = new LinkedList.LinkedList();

test.add(0);
test.add(1);
test.add(2);
test.add(2);
test.add(3);
test.add(3);
test.add(3);
test.add(4);
test.add(4);
test.add(4);
test.add(4);
test.add(5);
test.add(5);
test.add(5);
test.add(5);
test.print();

const partition = (linkedList, elementIndex) => {
  let current = linkedList.head;
  let index = 0;
  const output = new LinkedList.LinkedList();
  while (current.next) {
    if (index >= elementIndex) {
      output.add(current.element);
      current = current.next;
      index++;
    } else {
      current = current.next;
      index++;
    }
  }
  return output.print();
};

partition(test, 3);
