/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let s = new Set()

    for(let val of nums) {
        s.add(val)
    }
    let j = 0
    for(let val of s) {
             nums[j++] = val
    }
    return j 
};