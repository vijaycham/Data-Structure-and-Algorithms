# Two Sum II - Input Array Is Sorted

## Problem Information
- **Platform:** Leetcode
- **Difficulty:** Medium
- **URL:** https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/submissions/2043649676/
- **Date:** 2026-06-23

## Solution

```javascript
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
    let left = 0
    let right = numbers.length - 1
    while (left < right) {
        let currentSum = numbers[left] + numbers[right]
        if (currentSum === target) return [left + 1, right + 1]
        else if (currentSum > target) right--
        else left++
    }
};
```

---
*Generated automatically by LeetFeedback Extension*
