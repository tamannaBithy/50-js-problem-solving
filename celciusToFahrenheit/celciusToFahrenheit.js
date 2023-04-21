"use strict";
// #8: Create a function that will convert from Celsius to Fahrenheit
function convertToFahrenheit(n) {
    const fahrenheit = (n * 9) / 5 + 32;
    console.log(fahrenheit);
}
convertToFahrenheit(40);
// #9: Create a function that will convert from Fahrenheit to Celsius
function convertToCelsius(n) {
    const celsius = (n - 32) * 5 / 9;
    console.log(celsius);
}
convertToCelsius(37);
