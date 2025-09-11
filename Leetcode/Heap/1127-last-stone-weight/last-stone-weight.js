/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
    let pq = MaxPriorityQueue.fromArray(stones)

    while(pq.size() > 1) {
     let y = pq.pop()
     let x = pq.pop()
     if(y-x > 0) {
        pq.push(y-x)
     }
    }
    return pq.size() === 0 ? 0 : pq.front();

};