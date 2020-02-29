class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

/* If BINARY TREE IS A BST
EXAMPLE: 
- given BST of = [1,2,3,4,5,6,7]
- LCA(4,5) = 2
- LCA(6,7) = 3
- LCA(2,4) = 2
*/

// This method requires 3 traversals
// - once to find path of left
// - once to find path of right
// - once to find difference
function findPath(node, path, target) {
  if (!node) {
    return false;
  }

  path.push(node.value);

  if (node.value === target) {
    // reached path to target
    return true;
  }
  if ((node.left && findPath(node.left, path, target)) || (node.right && findPath(node.right, path, target))) {
    // path is fonud in child nodes
    return true;
  }
  // if target is not present in subtree, remove from node from path
  path.pop();
  return false;
}

function LCABT(node, target1, target2) {
  let path1 = [];
  let path2 = [];
  if (!findPath(node, path1, target1) || !findPath(node, path2, target2)) {
    // O(h)
    // if target isnt in the path, its not in the subtree
    return -1;
  }
  console.log('path1', path1);
  console.log('path2', path2);
  // find first different value
  let i = 0;

  while (i < path1.length && i < path2.length) {
    if (path1[i] !== path2[i]) {
      break;
    }
    i++;
  }
  // O(n)
  return path1[i - 1];
}

// this method only requires one traversal - O(n)
function findLCA(node, target1, target2) {
  if (!node) {
    return;
  }
  if (node.value === target1 || node.value === target2) {
    return node.value;
  }

  const leftLCA = findLCA(node.left, target1, target2);
  const rightLCA = findLCA(node.right, target1, target2);

  // if both values return non-null implies one target is in one tree and other target is in the other
  // meaning current node is LCA
  if (leftLCA && rightLCA) {
    return node.value;
  }

  return leftLCA ? leftLCA : rightLCA;
}

const node7 = new Node(7);
const node6 = new Node(6);
const node5 = new Node(5);
const node4 = new Node(4);
const node3 = new Node(3, node6, node7);
const node2 = new Node(2, node4, node5);
const node1 = new Node(1, node2, node3);

// console.log(LCABT(node1, 2, 4));

console.log(findLCA(node1, 2, 4));
