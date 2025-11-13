/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(arr) {
    let result = [];
    arr.sort((a, b) => a - b);  // sort to group duplicates

    let backtrack = (path, start) => {
        result.push([...path]);

        for (let i = start; i < arr.length; i++) {
            // skip duplicates
            if (i > start && arr[i] === arr[i - 1]) continue;

            path.push(arr[i]);
            backtrack(path, i + 1);
            path.pop();
        }
    };

    backtrack([], 0);
    return result;
};