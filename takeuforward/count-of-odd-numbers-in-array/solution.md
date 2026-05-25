# Count of odd numbers in array

## Problem Information
- **Platform:** Takeuforward
- **Difficulty:** Unknown
- **URL:** https://takeuforward.org/plus/dsa/problems/count-of-odd-numbers-in-array
- **Date:** 2026-05-25

## Solution

```javascript
class Solution {
    countOdd(arr, n) {
        let count = 0
        for(let i=0 ; i < n; i++ ) {
            if(arr[i] % 2 !== 0) {
                count++
            } 
        } return count
    }
}
```

---
*Generated automatically by LeetFeedback Extension*
