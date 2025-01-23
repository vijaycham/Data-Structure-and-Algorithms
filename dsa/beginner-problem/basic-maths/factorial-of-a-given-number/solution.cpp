/*
Problem: 
Problem Link: https://takeuforward.org/plus/dsa/beginner-problem/basic-maths/factorial-of-a-given-number?tab=submissions

Description:


Stats:
- Success: true
- Test Cases: 13
- Time: 0.064ms
- Memory: 7540.00KB
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
