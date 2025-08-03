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
 * @return {number[]}
 */
var postorderTraversal = function (root) {
    let curr = root
    let stack = []
    let ans = []
    let visitedNode = null

    while (stack.length || curr) {
        while (curr) {
            stack.push(curr)
            curr = curr.left
        }
        let peekNode = stack[stack.length - 1]
        if (peekNode.right && peekNode.right != visitedNode) {
            curr = peekNode.right
        } else {
            ans.push(peekNode.val)
            visitedNode = stack.pop()
        }
    } return ans

}