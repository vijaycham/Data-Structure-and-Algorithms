/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (val) {
    let n = val.length
    if (n == 1) return val[0]
    let p1 = Math.max(val[0], val[1])
    let p2 = val[0]
    //let dp = [val[0], Math.max(val[0], val[1])];
    for (let i = 2; i < n; i++) {
        curr = Math.max(val[i] + p2, p1);
        let temp = p1
        p1 = curr
        p2 = temp
        curr++
    }
    return p1
};