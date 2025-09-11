/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    let removeDuplicate = new Set(nums)
    let unique = [...removeDuplicate]
    let sorted = unique.sort((a,b) => b-a)
    return sorted.length >= 3 ? sorted[2] : sorted[0]
}
