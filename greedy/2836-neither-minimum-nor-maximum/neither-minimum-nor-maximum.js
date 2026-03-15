/**
 * @param {number[]} nums
 * @return {number}
 */
var findNonMinOrMax = function (nums) {
    let n = nums.length
    if (n <= 2) return -1
    let min = Infinity
    let max = -Infinity
    for (let i = 0; i < n; i++) {
        if (nums[i] > max) {
            max = nums[i]
        }
        if (nums[i] < min) {
            min = nums[i]
        }
    }
    for (let i = 0; i < n; i++) {
        if (nums[i] !== max && nums[i] !== min) {
            return nums[i]
        }
    }
};