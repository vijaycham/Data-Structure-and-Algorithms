// Solution for: 
class Solution {
  subsetSums(nums) {
    function func(ind, sum, nums, ans) {
      if (ind === nums.length) {
        ans.push(sum);
        return;
      }
      func(ind + 1, sum + nums[ind], nums, ans);
      func(ind + 1, sum, nums, ans);
    }

    let ans = [];
    func(0, 0, nums, ans);
    return ans;
  }
}
