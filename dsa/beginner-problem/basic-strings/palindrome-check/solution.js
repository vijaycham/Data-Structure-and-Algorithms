/*
Problem: Reverse a string
Problem Link: https://takeuforward.org/plus/dsa/beginner-problem/basic-strings/palindrome-check?tab=submissions

Description:
Given a string, the task is to reverse it. The string is represented by an array of characters s. Perform the reversal in place with O(1) extra memory.

Stats:
- Success: true
- Test Cases: 113
- Time: 0.062ms
- Memory: 7316.00KB
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