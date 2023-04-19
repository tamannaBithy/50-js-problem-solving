"use strict";
// #3: Print the multiplication table with 7
function multiplicationTable(n) {
    for (let i = 1; i <= 10; i++) {
        const result = i * n;
        console.log(`${n} * ${i} = ${result}`);
    }
}
multiplicationTable(7);
/////////////// ------------------- using recursive function ------------------- /////////////
function recursiveMultiplication(n, i = 1) {
    if (i === 11)
        return; //base case
    console.log(n * i);
    i++; // increment
    recursiveMultiplication(n, i);
}
recursiveMultiplication(7);
/*
Recursion is when a function calls itself until someone stops it.
If no one stops it then it'll recurse (call itself) forever.
*/ 
