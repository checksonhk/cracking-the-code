/*
T1 and T2 are two very large binary trees, with T1 much bigger than T2. Create an
algorithm to determine if 12 is a subtree ofTl .
A tree T2 is a subtree of T1 if there exists a node n in T1 such that the subtree of n is identical to 12,
That is, if you cut off the tree at node n, the two trees would be identical. 
*/

class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

function postOrderTraversal(node, array = []) {
  if (!node) {
    array.push(null);
    return;
  }

  if (node.left) postOrderTraversal(node.left, array);
  if (node.right) postOrderTraversal(node.right, array);
  array.push(node.value);

  return array;
}

const node3 = new Node(3);
const node1 = new Node(1);
const node2 = new Node(2, node1, node3);
const node5 = new Node(5);
const _root = new Node(4, node2, node5);

function isSubTree(tree, subTree) {
  const treeArr = postOrderTraversal(tree);
  const subTreeArr = postOrderTraversal(subTree);

  for (let i = 0; i < subTreeArr.length; i++) {
    if (treeArr[i] !== subTreeArr[i]) return false;
  }

  return true;
}

console.log(isSubTree(_root, node2));
