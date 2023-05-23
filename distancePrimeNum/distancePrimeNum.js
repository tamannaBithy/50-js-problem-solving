// #29: Print the distance between the first 100 prime numbers

function printDistance(n) {
  const primes = [];
  const distances = [];

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

  for (let i = 1; i < primes.length; i++) {
    distances.push(primes[i] - primes[i - 1]);
  }

  console.log(distances);
}

printDistance(100);
