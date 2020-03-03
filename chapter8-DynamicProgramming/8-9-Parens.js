/*
implement an algorithm to print all valid (e.g., properly opened and closed) combinations
of n pairs of parentheses. 

Keep track of counts of open and close brackets.

Initialize these counts as 0.

Recursively call the _printParenthesis() function until open bracket count is less than the given n.

If open bracket count becomes more than the close bracket count, then put a closing bracket and recursively call for the remaining brackets.

If open bracket count is less than n, then put an opening bracket and call _printParenthesis() for the remaining brackets.
*/

function parentheses(n) {
  if (n < 0) return;
  _parentheses(Array(2 * n), 0, n, 0, 0);
  return;
}

function _parentheses(str, idx, n, open, close) {
  if (close === n) {
    console.log(str.join(''));
    return;
  } else {
    if (open > close) {
      str[idx] = ')';
      _parentheses(str, idx + 1, n, open, close + 1);
    }
    if (open < n) {
      str[idx] = '(';
      _parentheses(str, idx + 1, n, open + 1, close);
    }
  }
}

parentheses(3);
