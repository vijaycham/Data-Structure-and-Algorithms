/*
Problem: Sum of first last element in array
Problem Link: https://takeuforward.org/plus/dsa/beginner-problem/language-basics/print-x-n-numbers-of-times

Description:
Given an integer array nums, return the sum of the 1st and last element of the array.

Stats:
- Success: true
- Test Cases: 26
- Time: 0.992ms
- Memory: 52284.00KB
*/

class Solution:
    def whichWeekDay(self, day):

        if day <1 or day> 7 : print("invalid")
        return

        if day == 1 : print("Monday")
        elif day == 2: print("Tuesday")
        elif day == 3: print("Wednesday")
        elif day == 4: print("Thursday")
        elif day == 5: print("Friday")
        elif day == 6: print("Saturday")
        elif day == 7: print("Sunday")