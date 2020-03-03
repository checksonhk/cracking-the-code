/*
Paint Fill: Implement the "paint fill"function that one might see on many image editing programs.
That is, given a screen (represented by a two-dimensional array of colors), a point, and a new color,
fill in the surrounding area until the color changes from the original cofor. 

use BFS to find all the surrounding pixels with original color, then change the color to the new color
*/
// matrix [][], point [x,y], color #eeeeee
function paintFill(matrix, point, newColor) {
  _bfs(matrix, point, newColor);
  return matrix;
}

function getNeighbors(matrix, point, color) {
  const neighbours = [];
  // up
  if (matrix[point.x - 1][point.y] && point.x - 1 > 0) {
    neighbours.push(matrix[point.x - 1][point.y]);
  }
  // down
  if (matrix[point.x + 1][point.y] && point.x - 1 < matrix.length) {
    neighbours.push(matrix[point.x + 1][point.y]);
  }
  // right
  if (matrix[point.x][point.y + 1] && point.y + 1 < matrix[0].length) {
    neighbours.push(matrix[point.x][point.y + 1]);
  }
  // left
  if (matrix[point.x][point.y - 1] && point.y - 1 > 0) {
    neighbours.push(matrix[point.x][point.y - 1]);
  }
  // return neighbors with only the same color as current point
  return neighbours.filter(neighbour => neighbour.color === color);
}

function _bfs(matrix, point, newColor) {
  let start = matrix[(point.x, point.y)];
  const queue = [start];
  const seen = {};

  while (queue.length) {
    let current = queue.shift();
    const neighbours = getNeighbors(matrix, current, current.color);
    // change the color & mark as seen
    current.color = newColor;
    seen[current] = true;
    neighbours.forEach(neighbour => {
      if (!seen[neighbour]) {
        queue.push(neighbour);
      }
    });
  }
}

console.log(paintFill());
