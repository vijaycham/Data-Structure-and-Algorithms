// Solution for: 
class Solution {
  constructor() {
    this.store = {};
  }

  climbStairs(n) {
    if (n <= 2) return n;
    if (!this.store[n]) {
      this.store[n] = this.climbStairs(n - 2) + this.climbStairs(n - 1);
    }
    return this.store[n];
  }
}
