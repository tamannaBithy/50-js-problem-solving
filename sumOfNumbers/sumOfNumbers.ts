// #5: Calculate the sum of numbers from 1 to 10

function sumOfNumbers() {
  let newArr = [];
  for (let i = 1; i <= 10; i++) {
    newArr.push(i);
  }
  const sum = newArr.reduce((a, b) => a + b, 0);
  console.log(sum);
}

sumOfNumbers();

///////////////// ---------------- 2nd way ---------------------- /////////////////////

function sumTheNumbers() {
  let sum = 0;
  for (let i = 0; i <= 10; i++) {
    sum += i;
  }

  console.log(sum);
}

sumTheNumbers();
