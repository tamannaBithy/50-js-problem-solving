"use strict";
// #14: Print the first 10 Fibonacci numbers without recursion
var f0 = 0;
console.log("f0", f0);
var f1 = 1;
console.log("f1", f1);
for (var i = 2; i < 10; i++) {
    var fi = f1 + f0;
    console.log("fiii", fi);
    f0 = f1;
    f1 = fi;
}
////////////////// ---------------------------- 2nd way ---------------------- /////////////////////////
let fibonacci = [0, 1];
for (let i = 2; i < 10; i++) {
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
}
console.log(fibonacci);
// #15: Create a function that will find the nth Fibonacci number using recursion
function nthFibonacci(n) {
    if (n <= 1) {
        return n;
    }
    else {
        return nthFibonacci(n - 1) + nthFibonacci(n - 2);
    }
}
console.log(nthFibonacci(10));
