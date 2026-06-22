# Check if the Array is Sorted I

## Problem Information
- **Platform:** Takeuforward
- **Difficulty:** Unknown
- **URL:** https://takeuforward.org/plus/dsa/problems/check-if-the-array-is-sorted-i
- **Date:** 2026-06-22

## Solution

```javascript
class Solution {
    arraySortedOrNot(arr, n) {
         for (let i = 1; i <n ; i++) {
             if(arr[i] < arr[i-1]) return 
             false
         } return true
    }
}
```

---
*Generated automatically by LeetFeedback Extension*
