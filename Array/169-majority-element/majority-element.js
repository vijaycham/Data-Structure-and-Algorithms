/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    let n = nums.length
    let map = new Map()
    for (let num of nums) {
        map.set(num, (map.get(num) || 0) + 1)
    }

    for (let [key, values] of map.entries()) {
        if (values > n / 2) {
            return key
        }
    }
    return -1
};