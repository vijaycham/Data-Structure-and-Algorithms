/**
 * @param {number[]} code
 * @param {number} k
 * @return {number[]}
 */
var decrypt = function(code, k) {
    let n = code.length;
    let result = new Array(n).fill(0);

    if (k === 0) return result;

    for (let i = 0; i < n; i++) {
        let sum = 0;

        for (let j = 1; j <= Math.abs(k); j++) {
            if (k > 0) {
                sum += code[(i + j) % n];
            } else {
                sum += code[(i - j + n) % n];
            }
        }

        result[i] = sum;
    }

    return result;
};