"use strict";
//  #28: Calculate the sum of first 100 prime numbers
function sumFirstHundredNum(n) {
    let primes = [];
    let sum = 0;
    for (let i = 2; i < Infinity; i++) {
        let isPrime = true;
        for (let j = 2; j <= Math.sqrt(i); j++) {
            if (i % j === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            primes.push(i);
            sum += i;
            if (primes.length === n) {
                break;
            }
        }
    }
    //   const sum = primes.reduce((a, b) => a + b, 0);
    console.log(sum);
}
sumFirstHundredNum(10);
