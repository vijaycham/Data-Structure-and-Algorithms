/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
    const ans = []
    // sort
    candidates.sort((a, b) => (a - b));
    // initail call
    func(0, target, [], candidates, ans)
    // helper function
    function func(ind, k, nums, c, ans) {
        // base case to add the subsequence to ans 
        if (k === 0) {
            ans.push([...nums])
            return
        }
        // base case to not explore further 
        if (k < 0 || ind === candidates.length) return
        // include the current elemnt in nums
        nums.push(c[ind]);
        // include calling
        func(ind + 1, k - c[ind], nums, c, ans);
        nums.pop()
        // skipping duplicate a nd calling 
        for (let i = ind + 1; i < candidates.length; i++) {
            if (c[i] !== c[ind]) {
                func(i, k, nums, c, ans);
                break
            }
        }
    }
    return ans
};