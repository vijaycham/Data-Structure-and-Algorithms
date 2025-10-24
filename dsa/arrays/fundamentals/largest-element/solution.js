// Solution for: 
class Solution {
  largestElement(nums) {
    let n = nums.length;
    let largest = -Infinity;

    for (let i = 0; i < n; i++) {
      if (largest < nums[i]) {
        largest = nums[i];
      }
    } return largest
  } 
}
