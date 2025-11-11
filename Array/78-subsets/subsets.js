/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
    function func(ind, sum, nums, ans) {
        if (ind === nums.length) {
            ans.push([...sum]);
            return;
        }
        sum.push(nums[ind]);
        func(ind + 1, sum, nums, ans);
        sum.pop()
        func(ind + 1, sum, nums, ans);
    }

    let ans = [];
    func(0, [], nums, ans);
    return ans;

};