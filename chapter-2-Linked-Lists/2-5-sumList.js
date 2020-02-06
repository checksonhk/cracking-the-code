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

sumList(list_1, list_2);
