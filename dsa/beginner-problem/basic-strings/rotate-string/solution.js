/*
Problem: Largest odd number in a string
Problem Link: https://takeuforward.org/plus/dsa/beginner-problem/basic-strings/rotate-string?tab=submissions

Description:
Given a string s, representing a large integer, the task is to return the largest-valued odd integer (as a string) that is a substring of the given string s.The number returned should not have leading zero's. But the given input string may have leading zero.

Stats:
- Success: true
- Test Cases: 68
- Time: 0.053ms
- Memory: 21166.00KB
*/

class Solution {
    largeOddNum(s) {
        let ind = -1;
        
        // Iterate through the string from the end to beginning
        let i;
        for (i = s.length - 1; i >= 0; i--) {
            // Break if an odd digit is found
            if ((s[i] - '0') % 2 === 1) {
                ind = i;
                break;
            }
        }
        
        // Skipping any leading zeroes
        i = 0;
        while (i <= ind && s[i] === '0') i++;
        
        // Return the largest odd number substring
        return s.substring(i, ind + 1);
} }