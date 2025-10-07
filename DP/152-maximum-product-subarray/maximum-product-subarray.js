/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (arr) {
    let n = arr.length
    let maxProdSoFar = arr[0]
    let minProdSoFar = arr[0]
    let totalMax = arr[0]
    for (let i = 1; i < n; i++) {
        let maxProdSoFarCopy = maxProdSoFar
        maxProdSoFar = Math.max(arr[i], maxProdSoFar * arr[i], minProdSoFar * arr[i])
        minProdSoFar = Math.min(arr[i], maxProdSoFarCopy * arr[i], minProdSoFar * arr[i])
        totalMax = Math.max(maxProdSoFar, totalMax)
    }
    return totalMax
};