const LinkedList = require('./2-0-linkedList');

const list_1 = new LinkedList.LinkedList();

list_1.add(9);
list_1.add(7);
list_1.add(8);

const list_2 = new LinkedList.LinkedList();

list_2.add(6);
list_2.add(8);
list_2.add(5);

// You have two numbers represented by a linked list, where each node contains a single digit. The digits are stored in reverse order, such that the Vs digit is at the head of the list. Write a function that adds the two numbers and returns the sum as a linked list.

function sumList(list_1, list_2) {
  let p1 = list_1.head;
  let val1 = '';
  while (p1) {
    val1 = p1.element + val1;
    p1 = p1.next;
  }
  let p2 = list_2.head;
  let val2 = '';
  while (p2) {
    val2 = p2.element + val2;
    p2 = p2.next;
  }
  const finalValue = (+val1 + +val2).toString();
  console.log(finalValue);
  const outputList = new LinkedList.LinkedList();
  for (const num of finalValue) {
    outputList.add(num);
  }

  return outputList.print();
}

// Try recursion. Suppose you have two lists, A = 1->5-> 9 (representing 951) and B =2->3->6 - ?7 (representing 7632), and a function that operates on the remainder of thelists (5->9 and 3->6->7). Could you use this to create the sum method? What is therelationship between sum(l->5->9 j 2->3->6->7 ) and sum(5->9, 3->6 - >7)?

sumList(list_1, list_2);
