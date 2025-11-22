/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
    const res = [];
    const path = [];

    // is Palindrome
    const isPalindrome = (s, start, end) => {
        while (start <= end) {
            if (s[start++] != s[end--]) {
                return false;
            }
        }
        return true;
    }
    // backtracking
    const dfs = (index) => {
        if (index === s.length) {
            res.push([...path]);
            return;
        }

        for (let j = index; j < s.length; j++) {
            if (isPalindrome(s, index, j)) {
                path.push(s.substring(index, j + 1));
                dfs(j + 1);
                path.pop();
            }
        }
    }
    dfs(0);
    return res;
};

