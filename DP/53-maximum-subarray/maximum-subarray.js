/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(arr) {
    let currSum = arr[0]
    let maxSum = arr[0]
    for(let i=1; i<arr.length; i++) {
        currSum = Math.max(currSum + arr[i], arr[i])
        maxSum = Math.max(currSum, maxSum); 
    }
    return maxSum
    
};