"use strict";
// #22: Reverse an array
function reverseArr(arr) {
    const newArr = arr.reverse();
    console.log(newArr);
}
reverseArr([78, 346, 23435, 2]);
/////////////////////// ---------------------- 2nd way --------------------- ////////////////////////////
function reverseArrSecond(arr) {
    let newArr = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        newArr.push(arr[i]);
    }
    console.log(newArr);
}
reverseArrSecond([1, 1342, 34, 2]);
// #23: Reverse a string
function reverseString(name) {
    const newArr = name.split("");
    const reversedString = newArr.reverse();
    console.log(reversedString);
}
reverseString("taib");
/////////////////////// ---------------------- 2nd way --------------------- ////////////////////////////
function reverseStringSecond(name) {
    const newArr = name.split("");
    let reversedArr = [];
    for (let i = newArr.length - 1; i >= 0; i--) {
        reversedArr.push(newArr[i]);
    }
    console.log(reversedArr);
}
reverseStringSecond("dipu");
