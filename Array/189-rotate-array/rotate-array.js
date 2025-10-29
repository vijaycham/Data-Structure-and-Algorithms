/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

const rotate = function (nums, k) {
    let n = nums.length;
    k %= n;

    const reverseArray = (start, end) => {
        while (start < end) {
            [nums[start], nums[end]] = [nums[end], nums[start]];
            start++;
            end--;
        }
    };

    reverseArray(0, n - 1);
    reverseArray(0, k - 1);
    reverseArray(k, n - 1);
};