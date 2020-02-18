// Given a directed graph, design an algorithm to find out whether there is a route between two nodes.
/* Example
INPUT : [[1,2], [3], [3], []]
OUTPUT : [[0,1,3], [0,2,3]]
*/
function findPath(graph) {
  const result = [];
  const temp = [];
  temp.push(0);
  helper(result, graph, 0, temp);
  return result;
}

function helper(result, graph, current, temp) {
  // if this is the last node, return path
  if (current === graph.length - 1) {
    result.push(temp.slice());
    return;
  }
  graph[current].forEach(node => {
    temp.push(node);
    helper(result, graph, node, temp);
    temp.pop();
  });
}

console.log(findPath([[1, 2], [3], [3], []])); // RETURN [[0,1,3],[0,2,3]]
