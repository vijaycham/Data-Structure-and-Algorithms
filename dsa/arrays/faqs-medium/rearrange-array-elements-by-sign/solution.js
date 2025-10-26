// Solution for: 
class Solution {
  rearrangeArray(nums) {
    const n = nums.length;
    const ans = new Array(n).fill(0);

    let posIndex = 0,
      negIndex = 1;
    for (let i = 0; i < n; i++) {
      if (nums[i] < 0) {
        ans[negIndex] = nums[i];
        negIndex += 2;
      } else {
        ans[posIndex] = nums[i];
        posIndex += 2;
      }
    }
    return ans;
  }
}
