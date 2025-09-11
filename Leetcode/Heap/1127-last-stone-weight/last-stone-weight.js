/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
    while (stones.length > 1) {
        // sort descending to get heaviest stones
        stones.sort((a, b) => b - a);

        // take two heaviest
        let y = stones[0];
        let x = stones[1];

        // remove them
        stones.splice(0, 2);

        // if not equal, push the difference back
        if (y !== x) {
            stones.push(y - x);
        }
    }

    return stones.length === 0 ? 0 : stones[0];
};
