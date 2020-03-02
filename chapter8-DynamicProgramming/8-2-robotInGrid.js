/*
 Imagine a robot sitting on the upper left corner of grid with r rows and c columns.
The robot can only move in two directions, right and down, but certain cells are "off limits" such that
the robot cannot step on them. Design an algorithm to find a path for the robot from the top left to
the bottom right. 
*/

// solve recursively
// count paths(r,c) = paths(r-1,c) + paths(r, c-1)

const countPath = function(grid, r, c) {
  if (grid[r][c] === 'wall') return 0;
  if ((grid[r][c] = 2)) return 1;
  return countPath(grid, r + 1, c) + countPath(grid, r, c + 1);
};

const countRobotInGridD = function(r, c) {
  const dpMatrix = Array(c)
    .fill(null)
    .map(() => Array(r).fill(0));

  // fills edges with 1 way of getting to each 'node'
  for (let i = 0; i < c; i++) {
    dpMatrix[i][0] = 1;
  }
  for (let i = 0; i < r; i++) {
    dpMatrix[0][i] = 1;
  }

  for (let i = 1; i < c; i++) {
    for (let j = 1; j < r; j++) {
      // current node paths equal sum of paths from left and up
      dpMatrix[i][j] = dpMatrix[i - 1][j] + dpMatrix[i][j - 1];
    }
  }

  return dpMatrix[c - 1][r - 1];
};

console.log(robotInGridD(3, 2));
