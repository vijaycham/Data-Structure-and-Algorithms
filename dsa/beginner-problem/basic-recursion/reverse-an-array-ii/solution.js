// Solution for: Check if a Number is Prime or Not
class Solution {
    checkPrime(num) {
     if(num <=1) return false
           return this.prime(2, num)
    }

    prime(i, num) {
        if(i*i >= num ) return true

        if(num %i === 0) return false 

        return this.prime(i+1, num)
    }
}