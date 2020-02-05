const LinkedList = require('./2-0-linkedList');

const test = new LinkedList.LinkedList();

test.add(0);
test.add(3);
test.add(4);
test.add(6);
test.add(5);
test.print();

// Implement an algorithm to find the kth to last element of a singly linked list.

/*

// uses lenght of Linked List
const nthFromLast = (linkedList, n) => {
  current = linkedList.head;
  length = linkedList.size;
  if (n > length) {
    return 'location is greater than length of list';
  }
  return linkedList.printElementAt(length - 2);
};

*/

// implementation using two pointers

const nthFromLast = (linkedList, n) => {
  let current = linkedList.head; // main pointer
  let ref = linkedList.head; // reference pointer
  let count = 0; // current index
  if (linkedList.head) {
    // while current index is smaller than n, keep iterating reference pointer
    while (count < n) {
      if (!ref) {
        return `${n} is greater than lenght of list`;
      }

      // iterate reference pointer and increase count
      ref = ref.next;
      count++;
    }
  }
  // when count = n that means we can now iterate the main pointer and then reference pointer till the reference pointer reaches the end of the linked list
  while (ref) {
    current = current.next;
    ref = ref.next;
  }
  return current.element;
};

console.log(nthFromLast(test, 2));
