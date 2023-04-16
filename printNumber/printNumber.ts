// #1. Coding challenge #1: Print numbers from 1 to 10

function printNumber() {
  let finalArray = [];
  for (let i = 1; i <= 10; i++) {
    // console.log(i)
    finalArray.push(i);
  }
  return finalArray;
}

console.log(printNumber());
