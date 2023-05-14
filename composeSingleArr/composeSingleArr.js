"use strict";
// #25: Create a function that will receive two arrays of numbers as arguments and return an array composed of all the numbers that are either in the first array or second array but not in both
function composeNewArr(arr1, arr2) {
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
// #26: Create a function that will receive two arrays and will return an array with elements that are in the first array but not in the second
function composeSingleArr(arr1, arr2) {
    let newArr = [];
    for (let el of arr1) {
        if (!arr2.includes(el))
            newArr.push(el);
    }
    console.log(newArr);
}
composeSingleArr([1, 2, 4, 78, 322], [564, 90, 2, 78, 5]);
