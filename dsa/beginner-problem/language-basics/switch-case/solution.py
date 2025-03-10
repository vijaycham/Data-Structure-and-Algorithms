/*
Problem: 
Problem Link: https://takeuforward.org/plus/dsa/beginner-problem/language-basics/switch-case?tab=submissions

Description:


Stats:
- Success: true
- Test Cases: 13
- Time: 0.950ms
- Memory: 52872.00KB
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