/* Minimal Tree: Given a sorted (increasing order) array with unique integer elements, write an algorithm to create a binary search tree with minimal height. */
/* 
Given the sorted array: [-10,-3,0,5,9],
One possible answer is: [0,-3,9,-10,null,5], which represents the following height balanced BST:

      0
     / \
   -3   9
   /   /
 -10  5
 */

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

function minimalTree(sortedArray) {
  if (!sortedArray.length) {
    return;
  }

  let midPt = Math.floor(sortedArray.length / 2);

  const root = new Node(sortedArray[midPt]);
  root.left = minimalTree(sortedArray.slice(0, midPt));
  root.right = minimalTree(sortedArray.slice(midPt + 1, sortedArray.length));
  return root;
}

function preOrder(node, array) {
  if (!node) {
    return;
  }
  array.push(node.data);
  preOrder(node.left, array);
  preOrder(node.right, array);
}

function printBST(root) {
  const output = [];
  preOrder(root, output);
  console.log(output);
}
const testArray = [-10, -3, 0, 5, 9];
const root = minimalTree(testArray);
printBST(root);
