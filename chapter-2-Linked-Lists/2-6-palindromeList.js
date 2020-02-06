const LinkedList = require('./2-0-linkedList');

const list_1 = new LinkedList.LinkedList();

list_1.add('r');
list_1.add('a');
list_1.add('c');
list_1.add('e');
list_1.add('c');
list_1.add('a');
list_1.add('r');
list_1.print();

// Implement a function to check if a linked list is a palindrome.

function palidromeList(list) {
  let word = '';
  let current = list.head;
  while (current) {
    word = word + current.element;
    current = current.next;
  }
  return word
    .split('')
    .reverse()
    .join('') === word
    ? true
    : false;
}

// TODO: try with recursion, try using a stack

console.log(palidromeList(list_1));
