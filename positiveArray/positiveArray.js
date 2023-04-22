"use strict";
// #12: Create a function that receives an array of numbers and returns an array containing only the positive numbers
function positiveArray(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= 0) {
            newArr.push(arr[i]);
        }
    }
    console.log(newArr);
}
positiveArray([1, -2, 3, 4, -10, -566, 45.67, 0]);
