/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
    let n = nums.length
    let sum = (n*(n+1))/2
    let givenSum = 0
    for (let i = 0; i < n; i++) {
        givenSum += nums[i]
    }
    return sum - givenSum
};