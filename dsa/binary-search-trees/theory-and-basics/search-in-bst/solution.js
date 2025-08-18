// Solution for: 
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
    searchBST(root, val) {
        while(root !== null && root.data !== val) {
            root = (root.data > val) ? root.left : root.right
        }
        return root 
    }
}