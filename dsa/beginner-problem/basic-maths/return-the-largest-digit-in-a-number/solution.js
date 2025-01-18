/*
Problem: Reverse a string
Problem Link: https://takeuforward.org/plus/dsa/beginner-problem/basic-maths/return-the-largest-digit-in-a-number?tab=submissions

Description:
Given an input string as an array of characters, write a function that reverses the string.

Stats:
- Success: true
- Test Cases: 14
- Time: 0.045ms
- Memory: 7700.00KB
*/

class Solution {
    reverseString(s) {
        
        const reverse = (s, left, right) => {
            // Base case
            if (left >= right) {
                return;
            }
            
            [s[left], s[right]] = [s[right], s[left]];
            
            reverse(s, left + 1, right - 1);
        };

        reverse(s, 0, s.length - 1);
        return s;
    }
}