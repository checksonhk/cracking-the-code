const LinkedList = require('./2-0-linkedList');

const test = new LinkedList.LinkedList();

test.add(0);
test.add(3);
test.add(4);
test.add(6);
test.add(5);
test.print();

const deleteNode = (linkedList, node) => {
  linkedList.removeElement(node);
  linkedList.print();
};

deleteNode(test, 6);
