/* 
Implement a function to check if a binary tree is balanced. For the purposes of
this question, a balanced tree is defined to be a tree such that the heights of the two subtrees of any
node never differ by more than one. 

Given the following tree [3,9,20,null,null,15,7]:

    3
   / \
  9  20
    /  \
   15   7

Return true.

The tree [1,2,2,3,3,null,null,4,4] 

       1
      / \
     2   2
    / \
   3   3
  / \
 4   4

returns false.
*/

class Node {
  constructor(value, right = null, left = null) {
    this.value = value;
    this.right = right;
    this.left = left;
  }
}

function checkBalance(root) {
  let rightLevel = 0;
  let leftLevel = 0;
  let left = root;
  let right = root;
  while (left.left) {
    leftLevel++;
    left = left.left;
  }
  while (right.right) {
    rightLevel++;
    right = right.right;
  }

  return differenceOf(leftLevel, rightLevel, 1) ? true : false;
}

function differenceOf(value1, value2, diffence) {
  return value1 == value2 + diffence || value1 + diffence == value2 ? true : false;
}

const node7 = new Node(7);
const node15 = new Node(15);
const node20 = new Node(20, node15, node7);
const node9 = new Node(9);
const root_1 = new Node(3, node9, node20);

const node6 = new Node(6);
const node5 = new Node(3);
const node4 = new Node(3, node6);
const node3 = new Node(2, node4, node5);
const node2 = new Node(2);
const root_2 = new Node(1, node3, node2);
console.log(checkBalance(root_1));
console.log(checkBalance(root_2));
