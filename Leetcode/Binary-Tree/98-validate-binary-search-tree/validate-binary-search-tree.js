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
 * @return {boolean}
 */
var isValidBST = function (root) {

    let isBST = (curr, low, high) => {
        if (!curr) return true
        if (curr.val <= low || curr.val >= high) return false;

        return isBST(curr.left, low, curr.val) && isBST(curr.right, curr.val, high)
    }
    return isBST(root, -Infinity, Infinity)

};