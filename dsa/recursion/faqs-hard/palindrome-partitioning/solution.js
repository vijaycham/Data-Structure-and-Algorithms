// Solution for: 
class Solution {
  partition(s) {
    const res = [];
    const path = [];
    this.dfs(0, s, path, res);
    return res;
  }

  dfs(index, s, path, res) {
    if (index === s.length) {
      res.push([...path]);
      return;
    }

    for (let j = index; j < s.length; j++) {
      if (this.isPalindrome(s, index, j)) {
        path.push(s.substring(index, j + 1));
        this.dfs(j + 1, s, path, res);
        path.pop();
      }
    }
  }
  isPalindrome(s, start, end) {
    while (start <= end) {
      if (s[start++] != s[end--]) {
        return false;
      }
    }
    return true;
  }
}
