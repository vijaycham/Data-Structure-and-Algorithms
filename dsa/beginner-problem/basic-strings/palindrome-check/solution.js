/*
Problem: 
Problem Link: https://takeuforward.org/plus/dsa/beginner-problem/basic-strings/palindrome-check?tab=submissions

Description:


Stats:
- Success: true
- Test Cases: 113
- Time: 0.065ms
- Memory: 7356.00KB
*/

class Solution {
    palindromeCheck(s) {
        let left = 0;
        let right = s.length -1

        while(left <right ){
            if (s[left] !== s[right]) {
                return false;
            }
            left++;
            right--;
        }
        return true
    }
}