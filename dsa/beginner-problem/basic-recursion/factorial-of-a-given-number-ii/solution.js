// Solution for: 
class Solution {
  func(v, i, sum, v2, ans) {
    if (sum === 0) {
      ans.push([...v2]);
      return;
    }
    if (sum < 0 || i < 0) {
      return;
    }

    this.func(v, i - 1, sum, v2, ans);
    v2.push(v[i]);
    this.func(v, i, sum - v[i], v2, ans);
    v2.pop();
    
  }
    

  combinationSum(candidates, target) {
    const ans = [];
    const v2 = [];
    this.func(candidates, candidates.length - 1, target, v2, ans);
    return ans 
  }
}
