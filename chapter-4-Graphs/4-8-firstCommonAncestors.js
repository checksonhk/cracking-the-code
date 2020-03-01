/*
 Design an algorithm and write code to find the first common ancestor
of two nodes in a binary tree. Avoid storing additional nodes in a data structure. NOTE: This is not
necessarily a binary search tree. 
*/
class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

// IF binary Search Tree  - O(h) time & space complexity, h is the height of the tree, O(h) required for the recursive call stack
function findLCA(node, n1, n2) {
  if (!node) {
    return;
  }

  if (node.value > n1 && node.value > n2) {
    return findLCA(node.left, n1, n2);
  }

  if (node.value < n1 && node.value < n2) {
    return findLCA(node.right, n1, n2);
  }

  return node.value;
}

const node3 = new Node(3);
const node1 = new Node(1);
const node2 = new Node(2, node1, node3);
const node5 = new Node(5);
const root_2 = new Node(4, node2, node5);

/*
     4
   /  \
  2    5
/ \    
1  3   
*/

console.log(findLCA(root_2, 1, 5));

/*
- DFS approach ?
- check if node has child, if no children return (implies were at a leaf), set as LCA
- have two pointers one for left, one for right
- check if left is target, same for right, if both values meet requirements then return LCA node
- recursively check every node
*/
