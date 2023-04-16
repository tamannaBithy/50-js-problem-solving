"use strict";
// Coding challenge #24: Create a function that will merge two arrays and return the result as a new array
function mergeTwoArrays(arr1, arr2) {
    const newArr = arr1.concat(arr2);
    return newArr;
}
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
console.log(mergeTwoArrays(array1, array2));
/////////// ----------------------------------- 2nd way ------------- ////////////////////
function mergeNewArrays(arr3, arr4) {
    for (let i = 0; i < arr4.length; i++) {
        arr3.push(arr4[i]);
    }
}
const array3 = [1, 2, 3];
const array4 = [4, 5, 6];
mergeNewArrays(array3, array4);
console.log(array3);
/////////// ----------------------------------- 3rd way ------------- /////////////////////
function mergeArrThirdWay(arr5, arr6) {
    const newArr = [];
    for (let el of arr5) {
        newArr.push(el);
    }
    for (let el of arr6) {
        newArr.push(el);
    }
    return newArr;
}
const array5 = [1, 2, 3];
const array6 = [4, 5, 6];
console.log(mergeArrThirdWay(array5, array6));
// there are so many ways to solve this problem you will find it in freeCodCamp. i tried just 3 ways. using concat will return a new array but push method of js will modify the main arr. https://www.freecodecamp.org/news/how-to-merge-arrays-in-javascript-array-concatenation-in-js/
