/**
 * @param {number[]} cost
 * @return {number}
 */
var minimumCost = function (cost) {
    cost.sort((a, b) => b - a);
    let total = 0;
    let len = cost.length;
    for (let i = 0; i < len; i += 3) {
        total += cost[i];
        if (i + 1 < len) {
            total += cost[i + 1];
        }
    }
    return total;
};