// #18: Print the first 100 prime numbers

function hundredPrimeNumbers(n: number) {
  let primes = [];

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
      if (primes.length === n) {
        break;
      }
    }
  }

  console.log(primes);
}

hundredPrimeNumbers(100);
