class Node {
  constructor(value, adjacencyList = null) {
    this.value = value;
    this.adjacencyList = adjacencyList || [];
    this.shortestPath = [];
  }

  addEdgeTo(node) {
    this.adjacencyList.push(node);
  }
}

class Queue {
  constructor(data = []) {
    this.data = [];
  }

  enqueue(item) {
    return this.data.push(item);
  }

  dequeue() {
    return this.data.shift();
  }
}

function searchBFS(node) {
  if (!node) {
    return;
  }
  const queue = new Queue();
  queue.enqueue(node);
  while (queue.data.length > 0) {
    let currentNode = queue.dequeue();
    node.shortestPath.push(currentNode.value);
    currentNode.adjacencyList.forEach(node => {
      queue.enqueue(node);
    });
  }

  return node.shortestPath;
}

const node3 = new Node(3, []);
const node2 = new Node(2, [node3]);
const node1 = new Node(1, [node3]);
const node0 = new Node(0, [node1, node2]);

console.log(searchBFS(node0));
/* 
Input: [[1,2], [3], [3], []] 
Output: [[0,1,3],[0,2,3]] 
*/
