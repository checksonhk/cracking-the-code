/*
Given an infinite number of quarters (25 cents), dimes (10 cents), nickels (5 cents), and
pennies (1 cent), write code to calculate the number of ways of representing n cents. 
*/

// recursive way
function _count(n, coinsIdx, coins) {
  if (n === 0) return 1;
  if (n < 0) return 0;

  let ways = 0;
  for (let coin = coinsIdx; coin < coins.length; coin++) {
    ways += _count(n - coins[coin], coin, coins);
  }
  return ways;
}

function count(n) {
  const coins = [1, 2, 5];
  return _count(n, 0, coins);
}

console.log(count(5));
// DP way
function _cents(n, coins) {
  // init dp matrix
  const dp = Array(coins.length + 1)
    .fill(null)
    .map(() => Array(n + 1).fill(null));

  // max ways to make change for 0 will be 1, doing nothing
  dp[0][0] = 1;

  // interate through coins
  for (let i = 1; i <= coins.length; i++) {
    dp[i][0] = 1;
    for (let j = 1; j <= n; j++) {
      const currentCoin = coins[i - 1];
      /*
       * dp[i][j] will be the sum of the ways to make change not considering this coin
       * (dp[i-1][j]) and the ways to make change considering this coin (dp[i][j] -
       * currentCoinValue] ONLY if currentCoinValue <= j, otherwise this coin can not
       * contribute to the total # of ways to make change at this sub problem target
       * amount)
       */
      const waysWithoutCoin = dp[i - 1][j];
      const waysWithCoin = currentCoin <= j ? dp[i][j - currentCoin] : 0;

      dp[i][j] = waysWithCoin + waysWithoutCoin;
    }
  }
  return dp[coins.length][n];
}

function cents(n) {
  const coins = [1, 2, 5];
  return _cents(n, coins);
}

// console.log(cents(5));
