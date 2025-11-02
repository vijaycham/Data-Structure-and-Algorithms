// Solution for: 
class Solution {
  myPower(x, n) {
    if (n === 0) return 1;
    if (n === 1) return x;

    if (n % 2 === 0) {
      return this.myPower(x * x, n / 2);
    }
    return x * this.myPower(x, n - 1);
  }
  myPow(x, n) {
    if (n < 0) {
      return this.myPower(1 / x, -n);
    }
    return this.myPower(x, n);
  }
}
