/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function (nums) {

    let n = nums.length;
    let result = [];

    for (let i = 0; i < n; i++) {
        if (result.includes(nums[i])) continue;

        let count = 0;
        for (let j = 0; j < n; j++) {
            if (nums[j] === nums[i]) {
                count++;
            }
        }
        if (count > Math.floor(n / 3)) {
            result.push(nums[i]);
        }
        if (result.length === 2) {
            break;
        }
    }
    return result;
}
