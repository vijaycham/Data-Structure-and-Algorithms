/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
    let n = nums.length
    let first = -Infinity
    let second = -Infinity
    let third = -Infinity
    for (let i = 0; i < n; i++) {
        if (nums[i] === first || nums[i] === second || nums[i] === third) continue;
        if (nums[i] > first) {
            third = second
            second = first
            first = nums[i]
        } else if (nums[i] > second) {
            third = second
            second = nums[i]
        } else if (nums[i] > third) {
            third = nums[i]
        }

    }
    return third === -Infinity ? first : third;
}