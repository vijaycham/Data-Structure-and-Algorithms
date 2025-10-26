/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function (nums) {
    const pos = [];
    const neg = [];

    nums.forEach((num) => {
        if (num > 0) pos.push(num);
        else neg.push(num)
    })

    
    for (let i = 0; i < pos.length; i++) {
        nums[2*i] = pos[i];
        nums[2*i+1] = neg[i]
    }

    return nums;
};