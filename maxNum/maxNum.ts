// #13: Find the maximum number in an array of numbers

function maxNumber(arr: number[]) {
  let maxNumber = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (maxNumber < arr[i]) {
      maxNumber = arr[i];
    }
  }

  console.log(maxNumber);
}

maxNumber([45, 76, 12, -43, 145.78]);

///////////////////// ------------------ 2nd way ---------------- //////////////////////////

const newArr = [1, 2, 67, -90, 4567];

const maxNum = Math.max(...newArr);

console.log(maxNum);


//////////////////// ---------------- 3rd way ---------------------- ////////////////////////


function newArray(arr: number[]) {
    const maxArray = arr.reduce((a, b) => a > b ? a : b, 0);
    console.log(maxArray);
}


newArray([-89, 100, 11, 67, 4567, -300])
