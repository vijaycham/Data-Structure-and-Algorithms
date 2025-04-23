// Solution for: Fibonacci Number
class Solution {
  sum(n) {
    if (n === 0) return 0;  // Base case: return 0 when the number is 0
    return (n % 10) + this.sum(Math.floor(n / 10));  // Sum digits recursively
  }

  addDigits(num) {
    if (num < 10) return num;  // Base case: if num is a single digit, return it

    let sumOfDigits = this.sum(num);  // Sum the digits of num
    if (sumOfDigits < 10) return sumOfDigits;  // If sum is already a single digit, return it
    return this.addDigits(sumOfDigits);  // Otherwise, recursively reduce the sum
  }
}
