// Solution for: 
class Solution {
    backtrack(index,n,nums,current,ans){
        if(index===n) {
            ans.push([...current]);
            return;
        }
        this.backtrack(index+1,n,nums,current,ans);
        current.push(nums[index])
        this.backtrack(index+1,n,nums,current,ans);
        current.pop()
    }
    powerSet(nums) {
        
        const ans = []
        const current =[]
        this.backtrack(0, nums.length, nums, current, ans)
        return ans;
    }
}