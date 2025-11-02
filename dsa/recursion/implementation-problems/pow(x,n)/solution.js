// Solution for: 
class Solution {
  myPower(x, n) {
    if (n === 0) return 1;
    const half = this.myPower(x, Math.floor(n / 2));
    return n % 2 === 0 ? half * half : half * half * x;
  }
  myPow(x, n) {
    if (n < 0) {
      x = 1 / x;
      n = -n;
    }
    return this.myPower(x, n);
  }
}
