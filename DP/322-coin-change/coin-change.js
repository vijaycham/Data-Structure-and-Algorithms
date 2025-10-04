/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    let n = coins.length;
    let dp = new Array(amount + 1).fill(Infinity);
    dp[0] = 0;

    for (let rem = 1; rem <= amount; rem++) {
        for (let j = 0; j < n; j++) {
            let remainingAmount = rem - coins[j];
            if (remainingAmount >= 0) {
                dp[rem] = Math.min(dp[rem], 1 + dp[remainingAmount]);
            }
        }
    }
    return dp[amount] === Infinity ? -1 : dp[amount];
};