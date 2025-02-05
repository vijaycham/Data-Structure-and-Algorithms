/*
Problem: Pattern 16
Problem Link: https://takeuforward.org/plus/dsa/beginner-problem/patterns/pattern-17?tab=submissions

Description:
Given an integer n. You need to recreate the pattern given below for any value of N. Let's say for N = 5, the pattern should look like as below:ABBCCCDDDDEEEEEPrint the pattern in the function given to you.

Stats:
- Success: true
- Test Cases: 22
- Time: 0.115ms
- Memory: 12784.00KB
*/

class Solution {
    pattern16(n) {
for (let i = 0; i < n; i++) {
            
            let ch = String.fromCharCode('A'.charCodeAt(0) + i);
            for (let j = 0; j <= i; j++) {
                
            
                process.stdout.write(ch);
            }
            console.log();
        }
    }
}