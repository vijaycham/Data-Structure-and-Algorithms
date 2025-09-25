/**
 * @param {number} n
 * @return {number}
 */
let store = {}
var climbStairs = function (n) {
    if (n <= 2) return n
    if (!store[n]) {
        store[n] = climbStairs(n - 2) + climbStairs(n - 1)
    }
    return store[n]

};