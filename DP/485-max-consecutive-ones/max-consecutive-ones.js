/**
 * @param {number[]} nums
 * @return {number}
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
    let n = nums.length
    let count = 0
    let max = 0

    for (let i = 0; i < n; i++) {
        if (nums[i] === 1) {
            count++
            if (count > max) {
                max = count
            }

        } else {
            count = 0
        }

    } return max
};