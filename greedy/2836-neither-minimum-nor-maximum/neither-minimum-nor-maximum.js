/**
 * @param {number[]} nums
 * @return {number}
 */
var findNonMinOrMax = function (nums) {
    let n = nums.length
    if (n <= 2) return -1
    let [a, b, c] = [nums[0], nums[1], nums[2]]
    return a+b+c - Math.max(a,b,c) - Math.min(a,b,c)
};