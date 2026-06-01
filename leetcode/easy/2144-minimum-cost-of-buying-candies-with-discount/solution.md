# Minimum Cost of Buying Candies With Discount

## Problem Information
- **Platform:** Leetcode
- **Difficulty:** Easy
- **URL:** https://leetcode.com/problems/minimum-cost-of-buying-candies-with-discount/submissions/2019438836/
- **Date:** 2026-06-01

## Solution

```javascript
/**
 * @param {number[]} cost
 * @return {number}
 */
var minimumCost = function (cost) {
    cost.sort((a, b) => b - a);
    let total = 0;
    let len = cost.length;
    for (let i = 0; i < len; i += 3) {
        total += cost[i];
        if (i + 1 < len) {
            total += cost[i + 1];
        }
    }
    return total;
};
```

---
*Generated automatically by LeetFeedback Extension*
