/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
    let n = nums.length;

        // Return 0 if array is empty
        if (n === 0) return 0; 

        nums.sort((a, b) => a - b);

        // Track last smaller element
        let lastSmaller = -Infinity; 
        // Count current sequence length
        let cnt = 0; 
        // Track longest sequence length
        let longest = 1; 

        for (let i = 0; i < n; i++) {
            // If consecutive number exists
            if (nums[i] - 1 === lastSmaller) {
                // Increment sequence count
                cnt += 1; 
                // Update last smaller element
                lastSmaller = nums[i]; 
            } 
            // If consecutive number doesn't exist
            else if (nums[i] !== lastSmaller) {
                // Reset count for new sequence
                cnt = 1; 
                // Update last smaller element
                lastSmaller = nums[i]; 
            }
            // Update longest if needed
            longest = Math.max(longest, cnt); 
        }
        return longest;
};