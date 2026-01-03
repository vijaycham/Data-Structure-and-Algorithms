/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
    let n = nums.length;
    // If the array is empty
    if (n === 0) return 0;
    // Initialize the longest sequence length
    let longest = 1;
    let st = new Set();
    // Put all the array elements into the set
    for (let i = 0; i < n; i++) {
        st.add(nums[i]);
    }
    // Traverse the set to find the longest sequence
    for (let it of st) {
        // Check if 'it' is a starting number of a sequence
        if (!st.has(it - 1)) {
            // Initialize the count of the current sequence
            let cnt = 1;
            // Starting element of the sequence
            let x = it;
            // Find consecutive numbers in the set
            while (st.has(x + 1)) {
                // Move to the next element in the sequence
                x = x + 1;
                // Increment the count of the sequence
                cnt = cnt + 1;
            }
            // Update the longest sequence length
            longest = Math.max(longest, cnt);
        }
    }
    return longest;
};