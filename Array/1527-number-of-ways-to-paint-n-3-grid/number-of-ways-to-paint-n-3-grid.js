/**
 * @param {number} n
 * @return {number}
 */
var numOfWays = function(n) {
    const MOD = 1e9 + 7;

    let diff = 6; // all different
    let same = 6; // first and third same

    for (let i = 2; i <= n; i++) {
        let newDiff = (diff * 2 + same * 2) % MOD;
        let newSame = (diff * 2 + same * 3) % MOD;

        diff = newDiff;
        same = newSame;
    }

    return (diff + same) % MOD;
};
