// 1) You are given an integer n. You need to return the number of digits in the number.
// The number will have no leading zeroes, except when the number is 0 itself.
// Example 1
// Input: n = 4
// Output: 1
// Explanation: There is only 1 digit in 4.
// Example 2
// Input: n = 14
// Output: 2
// Explanation: There are 2 digits in 14.
// Example 3
// Input: n = 234
// Output:
// 3
// Constraints:
// 0 <= n <= 5000
// n will contain no leading zeroes except when it is 0 itself.

class Solution {
  countDigit(n) {
    if (n === 0) return 1;
    let count = Math.floor(Math.log10(n) + 1);
    return count;
  }
}

class SolutionAlt {
  countDigit(n) {
    if (n === 0) return 1;

    let count = 0;
    while (n > 0) {
      n = Math.floor(n / 10);
      count++;
    }
    return count;
  }
}

const solution = new Solution();
console.log("Logarithmic count:", solution.countDigit(234123456));

const solutionAlt = new SolutionAlt();
console.log("Loop-based count:", solutionAlt.countDigit(234));

// Intuition:
// Given a number, all the digits in the number can be counted by counting one by one every digit which can be done by extracting the last digit successively from the right until there are no more digits left to extract.

// Approach:
// The last digit of the given number can be found by using the modulus operator (used to find the remainder for any division) with the number 10.
// Initialise a counter to keep the count of digits in the number. Keep dividing the number by 10 until no more digits are left to extract.
// For every digit extracted from the number, increment the counter by 1. Once the iterations are over, the number of digits is stored in the counter.
// Edge Case:
// What if the given number is zero?
// Return 1, because the number of digits in zero is 1.
// Complexity Analysis:
// Time Complexity: O(log10(N)) – In every iteration we are dividing N by 10.
// Space Complexity: O(1) – Using a couple of variables i.e., constant space
