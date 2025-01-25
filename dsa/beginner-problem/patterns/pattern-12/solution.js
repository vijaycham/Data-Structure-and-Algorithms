/*
Problem: Check if the number is armstrong
Problem Link: https://takeuforward.org/plus/dsa/beginner-problem/patterns/pattern-12?tab=submissions

Description:
You are given an integer n. You need to check whether it is an armstrong number or not. Return true if it is an armstrong number, otherwise return false.An armstrong number is a number which is equal to the sum of the digits of the number, raised to the power of the number of digits.

Stats:
- Success: true
- Test Cases: 22
- Time: 0.176ms
- Memory: 12452.00KB
*/

class Solution {
    countDigit(n) {
        let count = Math.floor(Math.log10(n)) + 1;
        return count;
    }
    isArmstrong(n) {

     let count = this.countDigit(n);
        
        // Variable to store the sum
        let sum = 0;
        
        // Variable to store the copy
        let copy = n;
        
        /* Iterate through each
        digit of the number */
        while (n > 0) {
            
            // Extract the last digit
            let lastDigit = n % 10;
            
            // Update sum
            sum += Math.pow(lastDigit, count);
            
            /* Remove the last digit
             from the number */
            n = Math.floor(n / 10);
        }
        
        /* Check if the sum of digits raised to the
        power of k equals the original number */
        if (sum == copy) return true;
        return false;
    }
}