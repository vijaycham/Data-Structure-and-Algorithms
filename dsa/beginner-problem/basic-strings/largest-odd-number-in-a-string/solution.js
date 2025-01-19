/*
Problem: Return the largest digit in a number
Problem Link: https://takeuforward.org/plus/dsa/beginner-problem/basic-strings/largest-odd-number-in-a-string?tab=submissions

Description:
You are given an integer n. Return the largest digit present in the number.

Stats:
- Success: true
- Test Cases: 117
- Time: 0.046ms
- Memory: 7520.00KB
*/

class Solution {
    largestDigit(n) {
             let largestDigit = 0;
        while (n > 0) {
            let lastDigit = n % 10;
            if (lastDigit > largestDigit) {
                largestDigit = lastDigit;
            }

            n = Math.floor(n / 10);
        }

        return largestDigit;
    }
}