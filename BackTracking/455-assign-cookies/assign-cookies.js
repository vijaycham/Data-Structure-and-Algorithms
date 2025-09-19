/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
    g.sort((a, b) => (a - b))
    s.sort((a, b) => (a - b))

    let children = 0
    let i = 0
    while (i < s.length) {
        if (s[i] >= g[children]) {
            children++
        }
        i++;
    }
return children;
}