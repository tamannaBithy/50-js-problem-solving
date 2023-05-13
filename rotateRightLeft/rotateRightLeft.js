"use strict";
//  #20: Rotate an array to the left 1 position
function rotateLeft(arr) {
    const first = arr.shift();
    arr.push(first);
    console.log(arr);
}
rotateLeft([2, 6, 7, 3]);
//  #21: Rotate an array to the right 1 position
function rotateRight(arr) {
    const last = arr.pop();
    arr.unshift(last);
    console.log(arr);
}
rotateRight([2, 6, 7, 3]);
