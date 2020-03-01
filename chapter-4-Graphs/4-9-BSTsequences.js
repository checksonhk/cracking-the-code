/* 
 A binary search tree was created by traversing through an array from left to right
and inserting each element. Given a binary search tree with distinct elements, print all possible
arrays that could have led to this tree. 

INPUT: 
  2
 / \
1   3

OUTPUT: 
[2,1,3] or [2,3,1]
*/

class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

/* STEPS 
  - start with root node
  - for each of the current avaiable nodes:
    - remove one of the nodes, add its children to the array of avaliable nodes
    - recursively find all the solutions for the new array of avaliable nodes
    - once there is no more children, implies a full sequence
*/
function bstSequences(node) {
  const sequences = [];

  const findSequences = function(nodes, travelled) {
    let noChild = true;

    nodes.forEach(node => {
      if (node.left && !travelled[node.left.value]) {
        noChild = false;
        travelled[node.left.value] = true;
        findSequences(nodes.concat([node.left]), travelled);
        delete travelled[node.left.value];
      }
      if (node.right && !travelled[node.right.value]) {
        noChild = false;
        travelled[node.right.value] = true;
        findSequences(nodes.concat([node.right]), travelled);
        delete travelled[node.right.value];
      }
    });

    if (noChild) {
      sequences.push(nodes.map(node => node.value));
    }
  };
  const startTravelled = {};
  startTravelled[node] = true;
  findSequences([node], startTravelled);
  return sequences;
}

const node3 = new Node(3);
const node1 = new Node(1);
const node2 = new Node(2, node1, node3);
const node5 = new Node(5);
const root_2 = new Node(4, node2, node5);

console.log(bstSequences(root_2));
