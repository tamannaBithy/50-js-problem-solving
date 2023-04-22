// #11: Calculate the average of the numbers in an array of numbers

function averageArray(arr: number[]) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  const average = sum / arr.length;
  console.log(average);
}

averageArray([1, 2, 3]);
