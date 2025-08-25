/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxPathSum = function (root) {
    let maxSumPath = -Infinity
    let currSum = 0
    let traversal = (curr) => {
        if (!curr) return 0
        let maxLeft = Math.max(0, traversal(curr.left))
        let maxRight = Math.max(0, traversal(curr.right))

        currSum = curr.val + maxLeft + maxRight
        maxSumPath = Math.max(currSum, maxSumPath)

        return curr.val + Math.max(maxLeft, maxRight)
    }
    traversal(root)
    return maxSumPath
};