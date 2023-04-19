"use strict";
// #4: Print all the multiplication tables with numbers from 1 to 10
function allMultiplyTab() {
    for (let i = 1; i <= 10; i++) {
        console.log(`multiplication table for ${i} :`);
        for (let j = 1; j <= 10; j++) {
            const result = i * j;
            console.log(`${i} * ${j} = ${result}`);
        }
        console.log("----------------------");
    }
}
allMultiplyTab();
