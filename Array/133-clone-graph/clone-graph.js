/**
 * // Definition for a _Node.
 * function _Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {_Node} node
 * @return {_Node}
 */

var cloneGraph = function(root) {
    if (!root) return null;

    const stack = [root];
    const visited = new Map();
    const cloneRoot = new Node(root.val);
    visited.set(root, cloneRoot);

    while (stack.length) {
        const curr = stack.shift();
        const cloneCurr = visited.get(curr);

        for (const n of curr.neighbors) {
            if (!visited.has(n)) {
                visited.set(n, new Node(n.val));
                stack.push(n);
            }
            cloneCurr.neighbors.push(visited.get(n));
        }
    }
    return cloneRoot;
};