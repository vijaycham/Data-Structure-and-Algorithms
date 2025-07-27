// Solution for: Longest Substring Without Repeating Characters
class Solution {
  longestNonRepeatingSubstring(s) {
    let n = s.length;
    let l = 0,
      r = 0,
      maxLen = 0;
      let hash = new Array(256).fill(-1)

    while (r < n) {
      if (hash[s.charCodeAt(r)] != -1) {
        l = Math.max(hash[s.charCodeAt(r)] + 1, l);
      }

      let len = r - l + 1;

      maxLen = Math.max(len, maxLen);
      hash[s.charCodeAt(r)] = r;
      r++;
    }
    return maxLen;
  }
}
