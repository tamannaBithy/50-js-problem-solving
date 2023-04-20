"use strict";
// #6: Calculate 10!
function tenFactorial() {
    let newFactorial = 1;
    for (let i = 1; i <= 10; i++) {
        newFactorial *= i;
    }
    console.log(newFactorial);
}
tenFactorial();
