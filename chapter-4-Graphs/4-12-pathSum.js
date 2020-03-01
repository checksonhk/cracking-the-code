/*
You are given a binary tree in which each node contains an integer value (which
might be positive or negative). Design an algorithm to count the number of paths that sum to a
given value. The path does not need to start or end at the root or a leaf, but it must go downwards
(traveling only from parent nodes to child nodes).
*/

class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

function findPathWithSum(node, value) {
  // if (!tree || !tree.root) throw new Error('tree must be valid and non-empty');

  return findPathWithSumRecurse([], node, value);
}

function findPathWithSumRecurse(path, node, value) {
  let count = 0;
  if (node) {
    path.push(node.value);
    let sum = 0;
    for (let i = path.length - 1; i >= 0; --i) {
      sum += path[i];
      if (sum === value) {
        ++count;
      }
    }
    count += findPathWithSumRecurse(path, node.left, value) + findPathWithSumRecurse(path, node.right, value);
    path.pop();
  }
  return count;
}

const node3 = new Node(3);
const node1 = new Node(1);
const node2 = new Node(2, node1, node3);
const node5 = new Node(5);
const _root = new Node(4, node2, node5);

console.log(findPathWithSum(_root, 6));
