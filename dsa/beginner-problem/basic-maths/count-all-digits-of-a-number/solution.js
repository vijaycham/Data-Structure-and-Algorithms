/*
Problem: 
Problem Link: https://takeuforward.org/plus/dsa/beginner-problem/basic-maths/count-all-digits-of-a-number?tab=submissions

Description:


Stats:
- Success: true
- Test Cases: 13
- Time: 0.056ms
- Memory: 7160.00KB
*/

class Solution {
    countDigit(n) {
        if(n === 0) return 1;
        let count = Math.floor(Math.log10(n) + 1);
        return count;
    }
}
