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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    
    let ans = null
    let count = k 

    let traversal = (curr) => {
        if(ans) return 
        curr.left && traversal(curr.left)
        count --;
        if(count == 0) {
            return ans = curr.val
        }
        curr.right && traversal(curr.right)
    } 
    traversal(root);
    return ans
};