class Node {
  constructor(element, next = null) {
    this.element = element;
    this.next = next;
  }
}

class LinkedList {
  constructor(head = null) {
    this.head = head;
    this.size = 0;
  }

  /* 
    Functions to Add
    - add(element)
    - insertAt(element, location)
    - removeFrom(location)
    - removeElement(element)

    Helpers
    - isEmpty
    - sizeOfList
    - printList
    */

  add(element) {
    const node = new Node(element);
    let current;

    // If the list does not have a head, the new Node is assigned to be the head
    if (this.head === null) this.head = node;
    else {
      // If it does have a head, we need to iterate through the existing elements in the list, to find the tail
      current = this.head;

      // iterate through Nodes to find tail, if current.next is TRUE means it is not the tail
      while (current.next) {
        current = current.next;
      }

      // once tail found, assign new node to tail
      current.next = node;
    }
    this.size++;
  }

  insertAt(element, location) {
    if (location > 0 && location > this.size) return false;
    const node = new Node(element);

    // insert element at the head
    if (location === 0) {
      // new node.next becomes head && assign head to be new node
      node.next = head;
      this.head = node;
    } else {
      let position = 0;
      let current;
      let previous;
      current = this.head;

      while (position < location && current.next) {
        previous = current;
        current = current.next;
        position++;
      }
      node.next = current;
      previous.next = node;
    }
    this.size++;
  }

  removeFrom(location) {
    if (location > 0 && location > this.size) return -1;
    let position = 0;
    let current = this.head;
    let prev = current;
    // if removing from head, set head to the next node
    if (location === 0) {
      this.head = current.next;
    } else {
      while (position < location && current.next) {
        prev = current;
        current = current.next;
        position++;
      }
      // once we reached the location set prev.next to the current.next, so it no longer references current
      prev.next = current.next;
    }
    this.size--;

    // return current element
    return current.element;
  }

  removeElement(element) {
    let current = this.head;
    let previous = current;

    while (current) {
      if (current.element === element) {
        // if previous isn't true, it means this is the head
        if (!previous) {
          this.head = current.next;
        } else {
          // set prev.next to the current.next, so it no longer references current
          previous.next = current.next;
        }
        this.size--;
        return current;
      }
      previous = current;
      current = current.next;
    }
    return -1;
  }

  printElementAt(n) {
    let current = this.head;
    let index = 0;
    while (current) {
      if (index === n) {
        return current.element;
      }
      current = current.next;
      index++;
    }
    return -1;
  }

  print() {
    const output = [];
    let current = this.head;
    while (current.next) {
      output.push(current.element);
      current = current.next;
    }
    output.push(current.element);

    console.log(output.join(' -> '));
  }
}

module.exports = { LinkedList };
