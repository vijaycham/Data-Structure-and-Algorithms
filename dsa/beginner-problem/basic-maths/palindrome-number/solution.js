/*
Problem: 
Problem Link: https://takeuforward.org/plus/dsa/beginner-problem/basic-maths/palindrome-number?tab=submissions

Description:


Stats:
- Success: true
- Test Cases: 14
- Time: 0.060ms
- Memory: 7260.00KB
*/

class Solution {
    isPalindrome(n) {

        let copy = n;

        let revNum=0;

        while(n>0) {
            let lastDigit = n% 10;

            revNum = (revNum*10) + lastDigit;
            n = Math.floor(n/10);

        }
         return revNum === copy;
    }
}