/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
    // create map
    let map = {}
    for (let i = 0; i < nums.length; i++) {
        if (!map[nums[i]]) map[nums[i]] = 0;
        map[nums[i]]++
    }

    //Add element to pq znd rextric to k 
    let pq = new MinPriorityQueue(x => x.freq)
    for (let [num, freq] of Object.entries(map)) {
        pq.enqueue({ val: Number(num), freq })
        if (pq.size() > k) {
            pq.dequeue()
        }
    }

    // return the numbers in arr
    return pq.toArray().map(x => (x.val))
};