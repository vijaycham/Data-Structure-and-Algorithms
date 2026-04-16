/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    let map = {};
    
    for (let ch of s) {
        map[ch] = (map[ch] || 0) + 1;
    }

    let buckets = Array(s.length + 1).fill(null).map(() => []);

    for (let ch in map) {
        buckets[map[ch]].push(ch);
    }

    let result = "";

    for (let i = buckets.length - 1; i >= 0; i--) {
        for (let ch of buckets[i]) {
            result += ch.repeat(i);
        }
    }

    return result;
};