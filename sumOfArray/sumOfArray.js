"use strict";
// #10: Calculate the sum of numbers in an array of numbers
function sumOfArray(arr) {
    const result = arr.reduce((a, b) => a + b, 0);
    console.log(result);
}
sumOfArray([1, 2, 3]);
///////////////// ------------------------ 2nd way ------------------------ //////////////////////////
function sumInSecondWay(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    console.log(sum);
}
sumInSecondWay([1, 2, 3, -4]);
