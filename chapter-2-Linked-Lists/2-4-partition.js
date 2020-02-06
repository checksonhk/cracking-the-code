const LinkedList = require('./2-0-linkedList');

const test = new LinkedList.LinkedList();

test.add(3);
test.add(5);
test.add(8);
test.add(5);
test.add(10);
test.add(2);
test.add(1);
test.print();

function partition(list, value) {
  const beforeVal = new LinkedList.LinkedList();
  const afterVal = new LinkedList.LinkedList();
  let current = list.head;
  while (current) {
    if (current.element >= value) afterVal.add(current.element);
    else beforeVal.add(current.element);
    current = current.next;
  }
  let p2 = afterVal.head;
  while (p2) {
    beforeVal.add(p2.element);
    p2 = p2.next;
  }
  return beforeVal.print();
}

console.log(partition(test, 5));
