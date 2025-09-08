/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
   // Sort the array in descending order
   let newArr = nums.sort((a, b) => b - a); 
   return newArr[k-1]; 
};