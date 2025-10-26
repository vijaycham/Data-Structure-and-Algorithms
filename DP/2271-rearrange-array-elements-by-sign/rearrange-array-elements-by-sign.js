/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function (nums) {
    let n = nums.length
    let ans = new Array(n).fill(0)

    let posIndex = 0
    let negIndex = 1
    // single pass
    for (let i = 0; i < n; i++) {
        if (nums[i] < 0) {
            ans[negIndex] = nums[i]
            negIndex += 2;
        } else {
            ans[posIndex] = nums[i]
            posIndex += 2;
        }
    }
    return ans
};