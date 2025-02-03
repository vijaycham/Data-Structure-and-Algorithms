/*
Problem: Pattern 15
Problem Link: https://takeuforward.org/plus/dsa/beginner-problem/patterns/pattern-16?tab=submissions

Description:
Given an integer n. You need to recreate the pattern given below for any value of N. Let's say for N = 5, the pattern should look like as below:ABCDEABCDABCABAPrint the pattern in the function given to you.

Stats:
- Success: true
- Test Cases: 22
- Time: 0.093ms
- Memory: 8812.00KB
*/

class Solution {
    pattern15(n) {
        for (let i = 0; i < n; i++) {
            let row = "";
            for (let j = 0; j < (n - i); j++) {
                row += String.fromCharCode(65 + j); // 'A' = 65 in ASCII
            }
            console.log(row);
        }
    }
}

