// Solution for: Sum of first N numbers
class Solution {
    NnumbersSum(N) {
       if(N == 0) 
       return 0;

       return this.NnumbersSum(N-1) + N;

    }
}