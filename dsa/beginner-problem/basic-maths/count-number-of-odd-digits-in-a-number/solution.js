/*
Problem: Reverse a number
Problem Link: https://takeuforward.org/plus/dsa/beginner-problem/basic-maths/count-number-of-odd-digits-in-a-number?tab=submissions

Description:
You are given an integer n. Return the integer formed by placing the digits of n in reverse order.

Stats:
- Success: true
- Test Cases: 13
- Time: 0.044ms
- Memory: 7468.00KB
*/

class Solution {
    countOddDigit(n) {
        /* Counter to store the 
        number of odd digits */
        let oddDigits = 0;

        // Iterate till there are digits left
        while (n > 0) {
            // Extract last digit
            let lastDigit = n % 10;
            
            // Check if digit is odd
            if (lastDigit % 2 !== 0) {
                // Increment counter
                oddDigits = oddDigits + 1;
            }
            n = Math.floor(n / 10);
        }

        return oddDigits;
    }
}