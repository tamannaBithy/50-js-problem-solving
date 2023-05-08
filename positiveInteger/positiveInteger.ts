// #17: Calculate the sum of digits of a positive integer number

function positiveInteger(n: number) {
  let sum = 0;

  if (Number.isInteger(n) && n > 0) {
    const newString = n.toString();
    for (var char of newString) {
      sum += parseInt(char);
    }
    console.log(sum);
  }
  else {
    console.log("not a positive integer");
  }
}

positiveInteger(1236);
