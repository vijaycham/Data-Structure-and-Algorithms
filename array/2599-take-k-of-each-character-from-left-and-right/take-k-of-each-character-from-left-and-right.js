/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var takeCharacters = function(s, k) {
     if (k === 0) return 0;

    let n = s.length;
    let total = { a: 0, b: 0, c: 0 };

    // Count total
    for (let ch of s) total[ch]++;

    // If impossible
    if (total.a < k || total.b < k || total.c < k) return -1;

    let maxWindow = 0;
    let left = 0;
    let window = { a: 0, b: 0, c: 0 };

    for (let right = 0; right < n; right++) {
        window[s[right]]++;

        // Shrink if invalid
        while (
            window.a > total.a - k ||
            window.b > total.b - k ||
            window.c > total.c - k
        ) {
            window[s[left]]--;
            left++;
        }

        maxWindow = Math.max(maxWindow, right - left + 1);
    }

    return n - maxWindow;
};