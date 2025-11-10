// Solution for: 
class Solution {
  constructor() {
    this.ans = [];
  }

  func(ind, k, nums, candidates) {
    if (k === 0) {
      this.ans.push([...nums]);
      return;
    }

    if (k < 0 || ind === candidates.length) return;

    nums.push(candidates[ind]);
    this.func(ind + 1, k - candidates[ind], nums, candidates);
    nums.pop();

    for (let i = ind + 1; i < candidates.length; i++) {
      if (candidates[i] !== candidates[ind]) {
        this.func(i, k, nums, candidates);
        break;
      }
    }
  }
  combinationSum2(candidates, target) {
    candidates.sort((a, b) => a - b);
    this.ans = [];
    this.func(0, target, [], candidates);
    return this.ans;
  }
}
