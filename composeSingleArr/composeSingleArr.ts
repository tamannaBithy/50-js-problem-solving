// #25: Create a function that will receive two arrays of numbers as arguments and return an array composed of all the numbers that are either in the first array or second array but not in both

function composeNewArr(arr1: number[], arr2: number[]) {
  let newArr = [];

  for (let i = 0; i < arr1.length; i++) {
    const numb1 = arr1[i];
    if (!arr2.includes(numb1)) {
      newArr.push(numb1);
    }
  }

  for (let j = 0; j < arr2.length; j++) {
    const numb2 = arr2[j];
    if (!arr1.includes(numb2)) {
      newArr.push(numb2);
    }
  }

  console.log(newArr);
}

composeNewArr([1, 2, 4, 78, 322], [564, 90, 2, 78, 5]);
