/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    
    let ans = 1;
    if (n === 0 || x === 1) return 1;

    if (n < 0) {
      x = 1 / x;
      n = -n;
    }

    while (n > 0) {
      if (n % 2) {
        ans = ans * x;
        n = n - 1;
      } else {
        x *= x;
        n = n / 2;
      }
    }
    return ans;

};