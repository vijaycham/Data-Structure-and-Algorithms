// Solution for: 
class Solution {
  func(ind, curr, nums, ans) {
    if (ind === nums.length) {
      ans.push([...curr]);
      return;
    }

    // Include
    curr.push(nums[ind]);
    this.func(ind + 1, curr, nums, ans);
    curr.pop();
    //skip duplicates and exclude function
    for (let i = ind + 1; i < nums.length; i++) {
      if (nums[i] !== nums[ind]) {
        this.func(i, curr, nums, ans);
        return;
      }
    }
    this.func(nums.length, curr, nums, ans);
  }

  subsetsWithDup(nums) {
    const ans = [];
    const curr = [];
    nums.sort((a, b) => a - b);
    this.func(0, curr, nums, ans);
    return ans;
  }
}
