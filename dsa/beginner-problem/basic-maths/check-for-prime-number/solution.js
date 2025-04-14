// Solution for: Sum of array elements
class Solution {
    arraySum(nums) {
       
       return this.sum(nums,0);
}
    sum(nums, i) {
        if( i >= nums.length) {
            return 0;
        }

        return nums[i] + this.sum(nums, i+1)
    }
    
}