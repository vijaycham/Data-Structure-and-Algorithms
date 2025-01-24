/*
Problem: Check if the number is armstrong
Problem Link: https://takeuforward.org/plus/dsa/beginner-problem/basic-maths/check-if-the-number-if-armstrong?tab=submissions

Description:
You are given an integer n. You need to check whether it is an armstrong number or not. Return true if it is an armstrong number, otherwise return false.An armstrong number is a number which is equal to the sum of the digits of the number, raised to the power of the number of digits.

Stats:
- Success: true
- Test Cases: 14
- Time: 0.064ms
- Memory: 7172.00KB
*/

class Solution {
public:
    int factorial( n) {
        let fact = 1;

        for(let i = 1; i<n; i++) {
            fact = fact * i
        }
        return fact
    }
};
