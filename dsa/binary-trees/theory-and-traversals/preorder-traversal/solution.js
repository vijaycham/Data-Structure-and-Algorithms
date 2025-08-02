// Solution for: Preorder Traversal
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
  preorder(root) {
    if (!root) return [];
    let ans = [];
    let stack = [root];

    while (stack.length) {
      let curr = stack.pop();
      ans.push(curr.data);
      curr.right && stack.push(curr.right);
      curr.left && stack.push(curr.left);
    }
    return ans;
  }
}
