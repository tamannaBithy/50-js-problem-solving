// Coding challenge #24: Create a function that will merge two arrays and return the result as a new array

function mergeTwoArrays(arr1: any[], arr2: any[]) {
  const newArr = arr1.concat(arr2);

  return newArr;
}

const array1: number[] = [1, 2, 3];
const array2: number[] = [4, 5, 6];

console.log(mergeTwoArrays(array1, array2));

/////////// ----------------------------------- 2nd way ------------- ////////////////

function mergeNewArrays(arr3: any[], arr4: any[]) {
  for (let i = 0; i < arr4.length; i++) {
    arr3.push(arr4[i]);
  }
}

const array3: number[] = [1, 2, 3];
const array4: number[] = [4, 5, 6];

mergeNewArrays(array3, array4);
console.log(array3);


// there are so many ways to solve this problem you will find it in freeCodCamp. i tried just 2 ways. using concat will return a new array but push method of js will modify the main arr. https://www.freecodecamp.org/news/how-to-merge-arrays-in-javascript-array-concatenation-in-js/