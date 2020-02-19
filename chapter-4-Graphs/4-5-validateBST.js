/*  Implement a function to check if a binary tree is a binary search tree.
 */

class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

// function validateBST(graph) {
//   const arrayBST = [];
//   const root = graph;
//   inOrder(root, arrayBST);

//   return isSorted(arrayBST);
// }

// function inOrder(node, array) {
//   if (node.left) {
//     inOrder(node.left, array);
//   }

//   array.push(node.value);

//   if (node.right) {
//     inOrder(node.right, array);
//   }
// }

// function isSorted(array) {
//   for (let i = 1; i < array.length; i++) {
//     if (array[i - 1] > array[i]) return false;
//     return true;
//   }
// }

function isBSTUtil(root, prev) {
  if (root) {
    if (isBSTUtil(root.left, prev) === false) {
      return false;
    }

    if (prev && prev.value >= root.value) {
      return false;
    }
    prev = root;
    return isBSTUtil(root.right, prev);
  }
  return true;
}

function isBST(root) {
  prev = null;
  return isBSTUtil(root, null);
}

/* 
Given binary tree [3,9,20,null,null,15,7],
    3
   / \
  9  20
    /  \
   15   7
*/

const node7 = new Node(7);
const node15 = new Node(15);
const node20 = new Node(20, node15, node7);
const node9 = new Node(9);
const root_1 = new Node(3, node9, node20);

console.log(isBST(root_1));

const node3 = new Node(3);
const node1 = new Node(1);
const node2 = new Node(2, node1, node3);
const node5 = new Node(5);
const root_2 = new Node(4, node2, node5);

console.log(isBST(root_2));
