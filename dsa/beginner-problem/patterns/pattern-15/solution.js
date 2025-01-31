/*
Problem: Pattern 14
Problem Link: https://takeuforward.org/plus/dsa/beginner-problem/patterns/pattern-15?tab=submissions

Description:
Given an integer n. You need to recreate the pattern given below for any value of N. Let's say for N = 5, the pattern should look like as below:AABABCABCDABCDEPrint the pattern in the function given to you.

Stats:
- Success: true
- Test Cases: 22
- Time: 0.051ms
- Memory: 8248.00KB
*/

class Solution {
    pattern14(n) {
         for (let i = 0; i < n; i++) {
            let ch = 'A';

            for (let j = 0; j <= i; j++) {
                process.stdout.write(ch);
                ch = String.fromCharCode(ch.charCodeAt(0) + 1);
            }
            console.log();
        }

    }
}