/*
Problem: Pattern 12
Problem Link: https://takeuforward.org/plus/dsa/beginner-problem/patterns/pattern-13?tab=submissions

Description:
Given an integer n. You need to recreate the pattern given below for any value of N. Let's say for N = 5, the pattern should look like as below:1        1
12      21
123    321
1234  4321
1234554321
Print the pattern in the function given to you.

Stats:
- Success: true
- Test Cases: 22
- Time: 0.061ms
- Memory: 9300.00KB
*/

class Solution {
    pattern12(n) {
     let spaces = 2*(n-1);

     for (let i=1; i <= n; i++) {

        for(let j=1; j<=i; j++) {
            process.stdout.write(j.toString());
        }

        for(let j=1; j <= spaces; j++ ) {
            process.stdout.write(" ");
        }
        for (let j=i; j >= 1; j--) {
            process.stdout.write(j.toString());
        }
        console.log();
        spaces -=2;
     }
    }
}