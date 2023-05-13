"use strict";
//  #19: Create a function that will return in an array the first "nPrimes" prime numbers greater than a particular number "startAt"
function getNPrimesNum(nPrimes, startAt) {
    let primes = [];
    for (let i = startAt + 1; i < Infinity; i++) {
        let isPrime = true;
        for (let j = 2; j <= Math.sqrt(i); j++) {
            if (i % j === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            primes.push(i);
            if (primes.length === nPrimes) {
                break;
            }
        }
    }
    return primes;
}
console.log(getNPrimesNum(9, 200));
