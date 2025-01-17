/*
Problem: 
Problem Link: https://takeuforward.org/plus/dsa/beginner-problem/basic-recursion/reverse-a-string?tab=submissions

Description:


Stats:
- Success: true
- Test Cases: 112
- Time: 0.048ms
- Memory: 8094.00KB
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