/*
Problem: Pattern 18
Problem Link: https://takeuforward.org/plus/dsa/beginner-problem/patterns/pattern-18?tab=submissions

Description:
Given an integer n. You need to recreate the pattern given below for any value of N. Let's say for N = 5, the pattern should look like as below:E D E C D E B C D E A B C D EPrint the pattern in the function given to you.

Stats:
- Success: true
- Test Cases: 22
- Time: 0.080ms
- Memory: 8884.00KB
*/

class Solution {
    pattern17(n) {
for (let i = 0; i < n; i++) {
            
            for (let j = 0; j < n - i - 1; j++) {
                process.stdout.write(" ");
            }
            let ch = 'A';
            let breakpoint = Math.floor((2 * i + 1) / 2);
            for (let j = 1; j <= 2 * i + 1; j++) {
                process.stdout.write(ch);
                if (j <= breakpoint)
                    ch = String.fromCharCode(ch.charCodeAt(0) + 1);
                else
                    ch = String.fromCharCode(ch.charCodeAt(0) - 1);
            }

           
            for (let j = 0; j < n - i - 1; j++) {
                process.stdout.write(" ");
            }

           
            console.log();
        }
    }
}