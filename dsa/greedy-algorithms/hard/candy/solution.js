// Solution for: 
class Solution {
  candy(arr) {
     let n = arr.length
    let ans = n
    let i = 1

    while (i < n) {
        while (arr[i] === arr[i - 1]) {
            i++
            continue
        }
        let up = 0
        while (i < n && arr[i] > arr[i - 1]) {
            up++
            ans += up
            i++
        }
        let down = 0
        while (i < n && arr[i] < arr[i - 1]) {
            down++
            ans += down
            i++
        }
        // Removing space 
        ans = ans - Math.min(up, down)

    }

    return ans
  }
}
