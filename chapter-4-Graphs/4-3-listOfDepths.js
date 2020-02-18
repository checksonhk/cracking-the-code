/*
 Given a binary tree, design an algorithm which creates a linked list of all the nodes
at each depth (e.g., if you have a tree with depth D, you'll have D linked lists). 

Given binary tree [3,9,20,null,null,15,7],
    3
   / \
  9  20
    /  \
   15   7

return its level order traversal as:
[
  [3],
  [9,20],
  [15,7]
]
*/

class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.right = right;
    this.left = left;
  }
}

function levelOrder(root) {
  const output = [];
  const temp = [];
  let level = 0;
  temp.push(root);
  while (temp.length > 0) {
    output.push(temp.slice());
    temp.length = 0;
    output[level].forEach(node => {
      if (!node.left || !node.right) return;
      temp.push(node.left);
      temp.push(node.right);
    });
    level++;
  }

  return output;
}

// const BST = [3, 9, 20, null, null, 15, 7];
const node7 = new Node(7);
const node15 = new Node(15);
const node20 = new Node(20, node15, node7);
const node9 = new Node(9);
const root = new Node(3, node9, node20);

console.log(levelOrder(root));
