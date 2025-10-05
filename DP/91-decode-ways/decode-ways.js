/**
 * @param {string} s
 * @return {number}
 */
function numDecodings(s) {
    const dp = {};
    const fn = (remS) => {
        if (remS === '') return 1;
        if (remS === "0") return 0;
        if (remS in dp) return dp[remS]
        const n = remS.length;
        const oneDigit = remS.substring(n - 1);
        const twoDigit = remS.substring(n - 2);

        let ans = 0;
        if (oneDigit != 0) {
            ans += fn(remS.substring(0, n - 1));
        }

        if (twoDigit >= 10 && twoDigit <= 26) {
            ans += fn(remS.substring(0, n - 2));
        }
        dp[remS] = ans
        return ans;
    };

    return fn(s);
}