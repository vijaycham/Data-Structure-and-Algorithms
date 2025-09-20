// Solution for: 
class Solution {
    insertNewInterval(arr, newInterval) {
        // Step 1: Add the new interval
        arr.push(newInterval);

        // Step 2: Sort intervals by start time
        arr.sort((a, b) => a[0] - b[0]);

        // Step 3: Merge
        let ans = [arr[0]];

        for (let i = 1; i < arr.length; i++) {
            if (arr[i][0] <= ans[ans.length - 1][1]) {
                ans[ans.length - 1][1] = Math.max(
                    ans[ans.length - 1][1],
                    arr[i][1]
                );
            } else {
                ans.push(arr[i]);
            }
        }

        return ans;
    }
}
