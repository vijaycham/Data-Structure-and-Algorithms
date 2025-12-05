/**
 * @param {number[]} nums
 * @return {number}
 */
var countPartitions = function(nums) {
    let total = 0;
    for (let x of nums) total += x;
    let left = 0, ans = 0;
    for (let i = 0; i < nums.length - 1; i++) {
        left += nums[i];
        let right = total - left;
        if (((left - right) & 1) === 0) ans++;
    }
    return ans;
};