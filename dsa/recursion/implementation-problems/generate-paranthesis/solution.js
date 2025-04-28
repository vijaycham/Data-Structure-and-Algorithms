// Solution for: Sum of Array Elements
class Solution {
    
    power(x,n) {

        if(n===0) return 1.0;

        if(n===1) return x

        if(n%2 === 1) {
             return x* this.power(x, n-1)
        }
        return this.power(x*x, Math.floor(n/2))

    }

    myPow(x, n) {
         if (n < 0) {
            return 1.0/ this.power(x, -n);
         }

         return this.power(x,n)

    }
}