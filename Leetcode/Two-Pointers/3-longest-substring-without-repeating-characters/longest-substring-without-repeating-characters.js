/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let n = s.length

    let maxLen = 0
    for (let i = 0; i < n; i++) {
        let hash = new Array(256).fill(0)

        for (let j = i; j < n; j++) {

            if (hash[s.charCodeAt(j)] === 1) break;

            hash[s.charCodeAt(j)] = 1

            let len = j - i + 1

            maxLen = Math.max(len, maxLen)
        }
    }
    return maxLen
};