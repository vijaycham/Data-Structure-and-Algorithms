// Solution for: 
class Solution {
  rearrangeArray(nums) {
    let pos = [];
    let neg = [];

    nums.forEach((num) => {
      if (num > 0) pos.push(num);
      else neg.push(num);
    });

    for(let i =0; i< nums.length/2; i++) {
        nums[2 * i] = pos[i];
        nums[2* i+1] = neg[i]
    }
    return nums
  }
}
