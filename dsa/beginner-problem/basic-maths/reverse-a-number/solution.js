/*
Problem: 
Problem Link: https://takeuforward.org/plus/dsa/beginner-problem/basic-maths/reverse-a-number?tab=submissions

Description:


Stats:
- Success: true
- Test Cases: 13
- Time: 0.044ms
- Memory: 7268.00KB
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