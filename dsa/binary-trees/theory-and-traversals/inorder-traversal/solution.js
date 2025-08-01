// Solution for: Inorder Traversal
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *      constructor(val = 0, left = null, right = null){
 *          this.data = val;
 *          this.left = null;
 *          this.right = null;
 *      }
 * }
 **/

class Solution {
    inorder(root) {
        let result = []

        function traversal(curr) {
            if(!curr) return
            traversal(curr.left)
            result.push(curr.data)
            traversal(curr.right)
        }

        traversal(root)
        return result
    }
}