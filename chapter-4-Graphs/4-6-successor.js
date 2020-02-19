/*
 Write an algorithm to find the "next" node (i.e., in-order successor) of a given node in a
binary search tree. You may assume that each node has a link to its parent. 

1) If right subtree of node is not NULL, then succ lies in right subtree. Do following.
  - Go to right subtree and return the node with minimum key value in right subtree.
2) If right sbtree of node is NULL, then succ is one of the ancestors. Do following.
  - Travel up using the parent pointer until you see a node which is left child of it’s parent. The parent of such a node is the succ.

*/

class Node {
  constructor(value, left = null, right = null, parent = null) {
    this.value = value;
    this.left = left;
    this.right = right;
    this.parent = parent;
  }
}

// function inOrder(node, array) {
//   if (node.left) {
//     inOrder(node.left, array);
//   }
//   array.push(node.value);
//   if (node.right) {
//     inOrder(node.right, array);
//   }
// }

// function successor(graph, target) {
//   const arrayBST = [];
//   inOrder(graph, arrayBST);
//   for (let i = 0; i < arrayBST.length; i++) {
//     if (arrayBST[i] === target) {
//       return arrayBST[i + 1];
//     }
//   }
// }

function successor(node, root) {
  if (node.right) {
    return findMin(node.right);
  }
  while (node.parent) {
    if (node.parent.left.value === node.value) return node.parent.value;
    node = node.parent;
  }
  return 'not successor';
}

function findMin(node) {
  if (node.left) {
    findMin(node.left);
  }
  return node;
}

const node3 = new Node(3);
const node1 = new Node(1);
const node2 = new Node(2, node1, node3);
const node5 = new Node(5);
const root_2 = new Node(4, node2, node5);

console.log(successor(root_2, 3));
