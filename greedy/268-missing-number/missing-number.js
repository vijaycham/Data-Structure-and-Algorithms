/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
     let N = nums.length;

    let sum1 = (N * (N + 1)) / 2;

    let sum2 = nums.reduce((acc, num) => acc + num, 0);

    let missingNum = sum1 - sum2;

    return missingNum;
};