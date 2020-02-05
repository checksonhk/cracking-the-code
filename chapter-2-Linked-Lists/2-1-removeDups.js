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

// Write code to remove duplicates from an unsorted linked list
const removeDups = linkedList => {
  let current = linkedList.head;
  let lookUp = {};
  while (current) {
    if (lookUp[current.element]) {
      linkedList.removeElement(current.element);
      current = current.next;
    } else {
      lookUp[current.element] = 1;
      current = current.next;
    }
  }
};

removeDups(test);
test.print();
