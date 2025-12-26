/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function (nums) {

     let n = nums.length;
    let result = [];
    let map = new Map();
    let mini = Math.floor(n / 3) + 1;

    for (let i = 0; i < n; i++) {
      let num = nums[i];
      if (!map.has(num)) {
        map.set(num, 0);
      }
      map.set(num, map.get(num) + 1);

      if (map.get(num) === mini) {
        result.push(num);
      }
      if (result.length === 2) {
        break;
      }
    }
    return result;
}
