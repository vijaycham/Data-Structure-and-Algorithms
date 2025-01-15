/*
Problem: Palindrome number
Problem Link: https://takeuforward.org/plus/dsa/beginner-problem/basic-strings/reverse-a-string?tab=submissions

Description:
You are given an integer n. You need to check whether the number is a palindrome number or not. Return true if it's a palindrome number, otherwise return false.A palindrome number is a number which reads the same both left to right and right to left.

Stats:
- Success: true
- Test Cases: 112
- Time: 0.066ms
- Memory: 8024.00KB
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