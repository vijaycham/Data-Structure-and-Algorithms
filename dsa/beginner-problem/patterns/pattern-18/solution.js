/*
Problem: Pattern 18
Problem Link: https://takeuforward.org/plus/dsa/beginner-problem/patterns/pattern-18?tab=submissions

Description:
Given an integer n. You need to recreate the pattern given below for any value of N. Let's say for N = 5, the pattern should look like as below:E D E C D E B C D E A B C D EPrint the pattern in the function given to you.

Stats:
- Success: true
- Test Cases: 22
- Time: 0.044ms
- Memory: 7288.00KB
*/

class Solution {
    pattern18(n) {
             // Outer loop for the number of rows.
        for (let i = 0; i < n; i++) {
            
            /* Inner loop for printing alphabets 
            from 'A' + n - 1 - i to 'A' + n - 1.*/
            for (let ch = 'A'.charCodeAt(0) + n - 1 - i; ch <= 'A'.charCodeAt(0) + n - 1; ch++) {
                process.stdout.write(String.fromCharCode(ch) + " ");
            }
            
            // Move to the next line for the next row.
            console.log();
        }
    }
}