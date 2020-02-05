const LinkedList = require('./2-0-linkedList');

const test = new LinkedList.LinkedList();

test.add(3);
test.add(5);
test.add(8);
test.add(10);
test.add(2);
test.add(1);
test.print();

function partition(list, value) {
  let mainPtr = list.head;
  let fastPtr = list.head;

  while (fastPtr) {
    if (fastPtr.element < value) {
      mainPtr = fastPtr;
      fastPtr = fastPtr.next;
    } else {
      mainPtr = mainPtr.next;
      fastPtr = fastPtr.next;
    }
  }
  return list.print();
}

console.log(partition(test, 5));
