// Solution for: 
class Solution {
    func(sum,last, nums,k,ans) {
        if(sum===0&& nums.length ===k) {
            ans.push([...nums]);
            return;
        }
        if(sum <=0 || nums.length >k) return;

        for(let i=last;i<=9;i++) {
            if(i<=sum) {
                nums.push(i);
                this.func(sum-i,i+1,nums,k,ans);
                nums.pop()
            }else {
                break
            }
        }
    }
    combinationSum3(k, n) {
        let ans = []
        let nums = []
        this.func(n,1,nums,k,ans)
        return ans 
    }
}