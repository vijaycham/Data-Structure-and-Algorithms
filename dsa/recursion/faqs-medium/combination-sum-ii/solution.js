// Solution for: 
class Solution {

  func(ind, k, nums, candidates, ans) {
    if (k === 0) {
      ans.push([...nums]);
      return;
    }

    if (k < 0 || ind === candidates.length) return;

    nums.push(candidates[ind]);
    this.func(ind + 1, k - candidates[ind], nums, candidates , ans);
    nums.pop();

    for (let i = ind + 1; i < candidates.length; i++) {
      if (candidates[i] !== candidates[ind]) {
        this.func(i, k, nums, candidates, ans);
        break;
      }
    }
  }
  combinationSum2(candidates, target) {
    candidates.sort((a, b) => a - b);
    const ans = [];
    this.func(0, target, [], candidates , ans );
    return ans;
  }
}
