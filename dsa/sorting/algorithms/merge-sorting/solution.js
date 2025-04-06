// Solution for: Merge Sorting
class Solution {
  reverse(arr, n) {
    let reversed = [];
    for (let i = n - 1; i >= 0; i--) {
      reversed.push(arr[i]);
    }
      for(let i = 0; i<n ; i++) {
        arr[i] = reversed[i];
      }
    }
  }

