// #27: Create a function that will receive an array of numbers as argument and will return a new array with distinct elements
// distinct means unique

function distinctElementArr(arr: number[]) {
  let distinctArr: number[] = [];

  for (let i = 0; i < arr.length; i++) {
    // const singleNumber = arr[i];
    // const index = arr.indexOf(singleNumber);
    // if (index === i) {
    //   distinctArr.push(singleNumber);
    //   }

    //easy way
    if (!distinctArr.includes(arr[i])) {
      distinctArr.push(arr[i]);
    }
  }

  console.log(distinctArr);

  //2nd way
  const newArr = [...new Set(arr)];
  console.log(newArr);

  // 3rd way
  const uniqueArr = arr.filter(
    (value, index, currentArr) => currentArr.indexOf(value) === index
  );
  console.log(uniqueArr);
}

distinctElementArr([23, 56, 789, 3, 56]);
