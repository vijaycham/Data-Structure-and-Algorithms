// Solution for: 
class Solution {
    func(i, k, nums) {
            if(k === 0) return 1;
            if(k <0 || i === nums.length) return 0

            return this.func(i+1, k-nums[i], nums) + this.func(i+1, k, nums)

        }


    countSubsequenceWithTargetSum(nums, k) {
        return this.func(0, k, nums )
    }
}