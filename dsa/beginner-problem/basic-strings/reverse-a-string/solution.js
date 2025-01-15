/*
Problem: 
Problem Link: https://takeuforward.org/plus/dsa/beginner-problem/basic-strings/reverse-a-string?tab=submissions

Description:


Stats:
- Success: true
- Test Cases: 112
- Time: 0.069ms
- Memory: 8082.00KB
*/

class Solution {
    reverseString(s) {
        let i =0 ;
        let j = s.length -1;

        while (i < j) {
            [s[i], s[j]] = [s[j], s[i]];
            i++,
            j--;
        } return s ;
    }
}