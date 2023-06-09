//Coding challenge #1. Coding challenge #1: Print numbers from 1 to 10
for (var i = 1; i <= 10; i++) {
  console.log(i);
}

//Coding challenge #2. Coding challenge #2: Print the odd numbers less than 100
for (var i = 1; i <= 100; i += 2) {
  console.log(i);
}
// Coding challenge #3: Print the multiplication table with 7
for (var i = 1; i <= 10; i++) {
  var row = "7 * " + i + " = " + 7 * i;
  console.log(row);
}

// Coding challenge #4: Print all the multiplication tables with numbers from 1 to 10
for (var i = 1; i <= 10; i++) {
  printTable(i);
  console.log("");
}

function printTable(n) {
  for (var i = 1; i <= 10; i++) {
    var row = n + " * " + i + " = " + n * i;
    console.log(row);
  }
}

// Coding challenge #5: Calculate the sum of numbers from 1 to 10
var sum = 0;

for (var i = 1; i <= 10; i++) {
  sum += i;
}

console.log(sum);

// Coding challenge #6: Calculate 10!
var prod = 1;

for (var i = 1; i <= 10; i++) {
  prod *= i;
}

console.log(prod);

// Coding challenge #7: Calculate the sum of odd numbers greater than 10 and less than 30
var sum = 0;

for (var i = 11; i <= 30; i += 2) {
  sum += i;
}

console.log(sum);

// Coding challenge #8: Create a function that will convert from Celsius to Fahrenheit
function celsiusToFahrenheit(n) {
  return n * 1.8 + 32;
}

var r = celsiusToFahrenheit(20);
console.log(r);

// Coding challenge #9: Create a function that will convert from Fahrenheit to Celsius
function fahrenheitToCelsius(n) {
  return (n - 32) / 1.8;
}

var r = fahrenheitToCelsius(68);
console.log(r);

// Coding challenge #10: Calculate the sum of numbers in an array of numbers
function sumArray(ar) {
  var sum = 0;

  for (var i = 0; i < ar.length; i++) {
    sum += ar[i];
  }

  return sum;
}

var ar = [2, 3, -1, 5, 7, 9, 10, 15, 95];
var sum = sumArray(ar);
console.log(sum);

// Coding challenge #11: Calculate the average of the numbers in an array of numbers

function averageArray(ar) {
  var n = ar.length;
  var sum = 0;

  for (var i = 0; i < n; i++) {
    sum += ar[i];
  }

  return sum / n;
}

var ar = [1, 3, 9, 15, 90];
var avg = averageArray(ar);

console.log("Average: ", avg);

// Coding challenge #12: Create a function that receives an array of numbers and returns an array containing only the positive numbers
function getPositives(ar) {
  var ar2 = [];

  for (var i = 0; i < ar.length; i++) {
    var el = ar[i];

    if (el >= 0) {
      ar2.push(el);
    }
  }

  return ar2;
}

var ar = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
var ar2 = getPositives(ar);

console.log(ar2);

// Coding challenge #12: Create a function that receives an array of numbers and returns an array containing only the positive numbers
function getPositives(ar) {
  var ar2 = [];

  for (var el of ar) {
    if (el >= 0) {
      ar2.push(el);
    }
  }

  return ar2;
}

var ar = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
var ar2 = getPositives(ar);

console.log(ar2);

// Coding challenge #12: Create a function that receives an array of numbers and returns an array containing only the positive numbers
function getPositives(ar) {
  return ar.filter((el) => el >= 0);
}

var ar = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
var ar2 = getPositives(ar);
console.log(ar2);

// Coding challenge #13: Find the maximum number in an array of numbers
function findMax(ar) {
  var max = ar[0];

  for (var i = 0; i < ar.length; i++) {
    if (ar[i] > max) {
      max = ar[i];
    }
  }

  return max;
}

var ar = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
var max = findMax(ar);
console.log("Max: ", max);
// Coding challenge #14: Print the first 10 Fibonacci numbers without recursion
var f0 = 0;
console.log(f0);

var f1 = 1;
console.log(f1);

for (var i = 2; i < 10; i++) {
  var fi = f1 + f0;
  console.log(fi);

  f0 = f1;
  f1 = fi;
}

// Coding challenge #15: Create a function that will find the nth Fibonacci number using recursion
function findFibonacci(n) {
  if (n == 0) return 0;

  if (n == 1) return 1;

  return findFibonacci(n - 1) + findFibonacci(n - 2);
}

var n = findFibonacci(10);
console.log(n);

// Coding challenge #16: Create a function that will return a Boolean specifying if a number is prime
function isPrime(n) {
  if (n < 2) return false;

  if (n == 2) return true;

  var maxDiv = Math.sqrt(n);

  for (var i = 2; i <= maxDiv; i++) {
    if (n % i == 0) {
      return false;
    }
  }

  return true;
}

console.log(2, " is prime? ", isPrime(2));
console.log(3, " is prime? ", isPrime(3));
console.log(4, " is prime? ", isPrime(4));
console.log(5, " is prime? ", isPrime(5));
console.log(9, " is prime? ", isPrime(9));

// Coding challenge #17: Calculate the sum of digits of a positive integer number
function sumDigits(n) {
  var s = n.toString();
  var sum = 0;

  for (var char of s) {
    var digit = parseInt(char);
    sum += digit;
  }

  return sum;
}

var sum = sumDigits(1235231);
console.log("Sum: ", sum);

// Coding challenge #18: Print the first 100 prime numbers
printPrimes(100);

// Function prints the first nPrimes numbers
function printPrimes(nPrimes) {
  var n = 0;
  var i = 2;

  while (n < nPrimes) {
    if (isPrime(i)) {
      console.log(n, " --> ", i);
      n++;
    }

    i++;
  }
}

// Returns true if a number is prime
function isPrime(n) {
  if (n < 2) return false;

  if (n == 2) return true;

  var maxDiv = Math.sqrt(n);

  for (var i = 2; i <= maxDiv; i++) {
    if (n % i == 0) {
      return false;
    }
  }

  return true;
}
// Coding challenge #19: Create a function that will return in an array the first "nPrimes" prime numbers greater than a particular number "startAt"
console.log(getPrimes(10, 100));

function getPrimes(nPrimes, startAt) {
  var ar = [];

  var i = startAt;

  while (ar.length < nPrimes) {
    if (isPrime(i)) {
      ar.push(i);
    }

    i++;
  }

  return ar;
}

// Returns true if a number is prime
function isPrime(n) {
  if (n < 2) return false;

  if (n == 2) return true;

  var maxDiv = Math.sqrt(n);

  for (var i = 2; i <= maxDiv; i++) {
    if (n % i == 0) {
      return false;
    }
  }

  return true;
}

// Coding challenge #20: Rotate an array to the left 1 position
var ar = [1, 2, 3];
rotateLeft(ar);
console.log(ar);

function rotateLeft(ar) {
  var first = ar.shift();
  ar.push(first);
}

// Coding challenge #21: Rotate an array to the right 1 position
var ar = [1, 2, 3];
rotateRight(ar);
console.log(ar);

function rotateRight(ar) {
  var last = ar.pop();
  ar.unshift(last);
}
// Coding challenge #22: Reverse an array
var ar = [1, 2, 3];
var ar2 = reverseArray(ar);
console.log(ar2);

function reverseArray(ar) {
  var ar2 = [];

  for (var i = ar.length - 1; i >= 0; i--) {
    ar2.push(ar[i]);
  }

  return ar2;
}
// Coding challenge #23: Reverse a string
var s = reverseString("JavaScript");
console.log(s);

function reverseString(s) {
  var s2 = "";

  for (var i = s.length - 1; i >= 0; i--) {
    var char = s[i];
    s2 += char;
  }

  return s2;
}

// Coding challenge #24: Create a function that will merge two arrays and return the result as a new array
var ar1 = [1, 2, 3];
var ar2 = [4, 5, 6];

var ar = mergeArrays(ar1, ar2);
console.log(ar);

function mergeArrays(ar1, ar2) {
  var ar = [];

  for (let el of ar1) {
    ar.push(el);
  }

  for (let el of ar2) {
    ar.push(el);
  }

  return ar;
}

// Coding challenge #25: Create a function that will receive two arrays of numbers as arguments and return an array composed of all the numbers that are either in the first array or second array but not in both
var ar1 = [1, 2, 3, 10, 5, 3, 14];
var ar2 = [1, 4, 5, 6, 14];

var ar = mergeExclusive(ar1, ar2);
console.log(ar);

function mergeExclusive(ar1, ar2) {
  var ar = [];

  for (let el of ar1) {
    if (!ar2.includes(el)) {
      ar.push(el);
    }
  }

  for (let el of ar2) {
    if (!ar1.includes(el)) {
      ar.push(el);
    }
  }

  return ar;
}

// Coding challenge #26: Create a function that will receive two arrays and will return an array with elements that are in the first array but not in the second
var ar1 = [1, 2, 3, 10, 5, 3, 14];
var ar2 = [-1, 4, 5, 6, 14];

var ar = mergeLeft(ar1, ar2);
console.log(ar);

function mergeLeft(ar1, ar2) {
  var ar = [];

  for (let el of ar1) {
    if (!ar2.includes(el)) {
      ar.push(el);
    }
  }

  return ar;
}
// Coding challenge #27: Create a function that will receive an array of numbers as argument and will return a new array with distinct elements
// Solution 1
var ar = getDistinctElements([1, 2, 3, 6, -1, 2, 9, 7, 10, -1, 100]);
console.log(ar);

function getDistinctElements(ar) {
  var ar2 = [];

  for (let i = 0; i < ar.length; i++) {
    if (!isInArray(ar[i], ar2)) {
      ar2.push(ar[i]);
    }
  }

  return ar2;
}

function isInArray(n, ar) {
  for (let i = 0; i < ar.length; i++) {
    if (ar[i] === n) return true;
  }

  return false;
}

// Solution 2
var ar = getDistinctElements([1, 2, 3, 6, -1, 2, 9, 7, 10, -1, 100]);
console.log(ar);

function getDistinctElements(ar) {
  var ar2 = [];

  var lastIndex = ar.length - 1;

  for (let i = 0; i <= lastIndex; i++) {
    if (!isInArray(ar[i], ar, i + 1, lastIndex)) {
      ar2.push(ar[i]);
    }
  }

  return ar2;
}

function isInArray(n, ar, fromIndex, toIndex) {
  for (var i = fromIndex; i <= toIndex; i++) {
    if (ar[i] === n) return true;
  }

  return false;
}

// Coding challenge #28: Calculate the sum of first 100 prime numbers
var n = 10;
console.log("Sum of first ", n, " primes is ", sumPrimes(10));

function sumPrimes(n) {
  var foundPrimes = 0;
  var i = 2;
  var sum = 0;

  while (foundPrimes < n) {
    if (isPrime(i)) {
      foundPrimes++;
      sum += i;
    }

    i++;
  }

  return sum;
}

// Returns true if number n is prime
function isPrime(n) {
  if (n < 2) return false;

  if (n == 2) return true;

  var maxDiv = Math.sqrt(n);

  for (var i = 2; i <= maxDiv; i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}

// Coding challenge #29: Print the distance between the first 100 prime numbers
printDistances(100);

// Print distances between the first n prime numbers
function printDistances(n) {
  var lastPrime = 2;
  var i = lastPrime + 1;
  var foundPrimes = 1;

  while (foundPrimes < n) {
    if (isPrime(i)) {
      console.log(i - lastPrime, "\t", i, " - ", lastPrime);

      foundPrimes++;
      lastPrime = i;
    }

    i++;
  }
}

// Returns true if number n is prime
function isPrime(n) {
  if (n < 2) return false;

  if (n == 2) return true;

  var maxDiv = Math.sqrt(n);

  for (var i = 2; i <= maxDiv; i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}

// Coding challenge #30-a: Create a function that will add two positive numbers of indefinite size. The numbers are received as strings and the result should be also provided as string.
// Solution 1
var n1 = "2909034221912398942349";
var n2 = "1290923909029309499";
var sum = add(n1, n2);

console.log(n1, "\n", n2, "\n", sum);

function add(sNumber1, sNumber2) {
  var s = "";
  var carry = 0;

  var maxSize = Math.max(sNumber1.length, sNumber2.length);

  for (var i = 0; i < maxSize; i++) {
    var digit1 = digitFromRight(sNumber1, i);
    var digit2 = digitFromRight(sNumber2, i);

    var sum = digit1 + digit2 + carry;
    var digitSum = sum % 10;
    carry = sum >= 10 ? 1 : 0;

    s = digitSum.toString() + s;
  }

  if (carry > 0) s = carry + s;

  return s;
}

function digitFromRight(s, digitNo) {
  if (digitNo >= s.length) return 0;

  var char = s[s.length - 1 - digitNo];
  return parseInt(char);
}

// Solution 2

var n1 = "2909034221912398942349";
var n2 = "1290923909029309499";
var sum = add(n1, n2);

console.log(n1);
console.log(n2);
console.log(sum);

function add(sNumber1, sNumber2) {
  var maxSize = Math.max(sNumber1.length, sNumber2.length);

  var s1 = sNumber1.padStart(maxSize, "0");
  var s2 = sNumber2.padStart(maxSize, "0");

  var s = "";
  var carry = 0;

  for (var i = maxSize - 1; i >= 0; i--) {
    var digit1 = parseInt(s1[i]);
    var digit2 = parseInt(s2[i]);

    var sum = digit1 + digit2 + carry;
    var digitSum = sum % 10;
    carry = sum >= 10 ? 1 : 0;

    s = digitSum.toString() + s;
  }

  if (carry > 0) s = carry + s;

  return s;
}

// Coding challenge #31a. Create a function that will return the number of words in a text
// Solution 1
function countWords(text) {
  var wasSeparator = true;
  var words = 0;

  for (var c of text) {
    // if current character is separator then advance and
    // set that the previous character was separator
    if (isSeparator(c)) {
      wasSeparator = true;
      continue;
    }

    // if current character is not separator
    // ... but if previous was separator...
    if (wasSeparator) {
      words++;
      wasSeparator = false;
    }
  }

  return words;
}

function isSeparator(c) {
  var separators = [" ", "\t", "\n", "\r", ",", ";", ".", "!", "?"];
  return separators.includes(c);
}

console.log(countWords(""));
console.log(countWords("            "));
console.log(countWords("JavaScript!!!   "));
console.log(countWords("     JavaScript"));
console.log(countWords("    JavaScript is cool      "));
console.log(countWords("I like to learn JavaScript with Lead Educare"));

// Solution 2

function countWords(text) {
  var words = 0;

  if (text.length > 0 && !isSeparator(text[0])) words++;

  for (var i = 1; i < text.length; i++) {
    var currChr = text[i];
    var prevChr = text[i - 1];

    if (!isSeparator(currChr) && isSeparator(prevChr)) {
      words++;
    }
  }

  return words;
}

function isSeparator(c) {
  var separators = [" ", "\t", "\n", "\r", ",", ";", ".", "!", "?"];
  return separators.includes(c);
}

console.log(countWords(""));
console.log(countWords("            "));
console.log(countWords("JavaScript!!!   "));
console.log(countWords("     JavaScript"));
console.log(countWords("    JavaScript is cool      "));
console.log(countWords("I like to learn JavaScript with Lead Educare"));

// Coding challenge #32. Create a function that will capitalize the first letter of each word in a text

console.log(
  captializeWords(
    "Create a function that will capitalize the first letter of each word in a text"
  )
);

function captializeWords(text) {
  var text2 = "";

  for (var i = 0; i < text.length; i++) {
    var currChr = text[i];
    var prevChr = i > 0 ? text[i - 1] : " ";

    if (!isSeparator(currChr) && isSeparator(prevChr)) {
      currChr = currChr.toUpperCase();
    }

    text2 += currChr;
  }

  return text2;
}

function isSeparator(c) {
  var separators = [" ", "\t", "\n", "\r", ",", ";", ".", "!", "?"];
  return separators.includes(c);
}

// Coding challenge #33. Calculate the sum of numbers received in a comma delimited string
console.log(sumCSV("1.5, 2.3, 3.1, 4, 5.5, 6, 7, 8, 9, 10.9"));

function sumCSV(s) {
  var ar = s.split(",");

  var sum = 0;

  for (var n of ar) {
    sum += parseFloat(n);
  }

  return sum;
}

// Coding challenge #34. Create a function that will return an array with words inside a text

var text =
  "Create a function, that will return an array (of string), with the words inside the text";

console.log(getWords(text));

function getWords(text) {
  let startWord = -1;
  let ar = [];

  for (let i = 0; i <= text.length; i++) {
    let c = i < text.length ? text[i] : " ";

    if (!isSeparator(c) && startWord < 0) {
      startWord = i;
    }

    if (isSeparator(c) && startWord >= 0) {
      let word = text.substring(startWord, i);
      ar.push(word);

      startWord = -1;
    }
  }

  return ar;
}

function isSeparator(c) {
  var separators = [" ", "\t", "\n", "\r", ",", ";", ".", "!", "?", "(", ")"];
  return separators.includes(c);
}

// Coding challenge #35. Create a function to convert a CSV text to a “bi-dimensional” array

var data =
  "John;Smith;954-000-0000\nMich;Tiger;305-000-0000\nMonique;Vasquez;103-000-0000";

var ar = csvToArray(data);
console.log(JSON.stringify(ar));

function csvToArray(data) {
  var arLines = data.split("\n");

  for (var i = 0; i < arLines.length; i++) {
    var arLine = arLines[i].split(";");
    arLines[i] = arLine;
  }

  return arLines;
}
// Coding challenge #36. Create a function that converts a string to an array of characters
console.log(getChars("I like JavaScript"));

function getChars(s) {
  return Array.from(s);
}

// Coding challenge #37. Create a function that will convert a string in an array containing the ASCII codes of each character
console.log(getCharCodes("I like JavaScript"));

function getCharCodes(s) {
  var ar = [];

  for (var i = 0; i < s.length; i++) {
    var code = s.charCodeAt(i);
    ar.push(code);
  }

  return ar;
}
// Coding challenge #38. Create a function that will convert an array containing ASCII codes in a string
console.log(
  codesToString([
    73, 32, 108, 105, 107, 101, 32, 74, 97, 118, 97, 83, 99, 114, 105, 112, 116,
  ])
);

function codesToString(ar) {
  return String.fromCharCode(...ar);
}

// Coding challenge #39. Implement the Caesar cypher
var text = "I LOVE JAVASCRIPT";
var textEnc = encrypt(text, 13);
var textDec = decrypt(textEnc, 13);

console.log(text);
console.log(textEnc);
console.log(textDec);

// Decrypt a message by using the same encrypt function
// ... but using the inverse of the key (e.g. rotate in the other direction)
function decrypt(msg, key) {
  return encrypt(msg, key * -1);
}

// Function will implement Caesar Cipher to
// encrypt / decrypt the msg by shifting the letters
// of the message acording to the key
function encrypt(msg, key) {
  var encMsg = "";

  for (var i = 0; i < msg.length; i++) {
    var code = msg.charCodeAt(i);

    // Encrypt only letters in 'A' ... 'Z' interval
    if (code >= 65 && code <= 65 + 26 - 1) {
      code -= 65;
      code = mod(code + key, 26);
      code += 65;
    }

    encMsg += String.fromCharCode(code);
  }

  return encMsg;
}

// Modulo function: n mod p
function mod(n, p) {
  if (n < 0) n = p - (Math.abs(n) % p);

  return n % p;
}

// Coding challenge #40. Implement the bubble sort algorithm for an array of numbers
var ar = [23, 1000, 1, -1, 8, 3];
console.log(ar);
bubbleSort(ar);
console.log(ar);

function bubbleSort(ar) {
  var shouldSort = true;
  var length = ar.length;

  while (shouldSort) {
    shouldSort = false;
    length--;

    for (var i = 0; i < length; i++) {
      var a = ar[i];
      if (a > ar[i + 1]) {
        ar[i] = ar[i + 1];
        ar[i + 1] = a;
        shouldSort = true;
      }
    }
  }
}
// Coding challenge #41. Create a function to calculate the distance between two points defined by their x, y coordinates
console.log(getDistance(100, 100, 400, 300));

function getDistance(x1, y1, x2, y2) {
  var l1 = x2 - x1;
  var l2 = y2 - y1;

  return Math.sqrt(l1 * l1 + l2 * l2);
}

// Coding challenge #42. Create a function that will return a Boolean value indicating if two circles defined by center coordinates and radius are intersecting
console.log(collisionCircleCircle(200, 200, 100, 300, 300, 50));

function collisionCircleCircle(
  circle1X,
  circle1Y,
  circle1R,
  circle2X,
  circle2Y,
  circle2R
) {
  return (
    getDistance(circle1X, circle1Y, circle2X, circle2Y) <= circle1R + circle2R
  );
}

// Calculate the distance between the two specified points
function getDistance(x1, y1, x2, y2) {
  var l1 = x2 - x1;
  var l2 = y2 - y1;

  return Math.sqrt(l1 * l1 + l2 * l2);
}

// Coding challenge 43. Create a function that will receive a bi-dimensional array as argument and a number and will extract as a unidimensional array the column specified by the number
var ar = [
  ["John", 120],
  ["Jane", 115],
  ["Thomas", 123],
  ["Mel", 112],
  ["Charley", 122],
];

var numbers = extractCol(ar, 1);
console.log(numbers);

function extractCol(ar, colNo) {
  var arCol = [];

  for (var i = 0; i < ar.length; i++) {
    arCol.push(ar[i][colNo]);
  }

  return arCol;
}
// Coding challenge #44. Create a function that will convert a string containing a binary number into a number
console.log(binaryToNumber("11111111"));

function binaryToNumber(sBinary) {
  return parseInt(sBinary, 2);
}
// Coding challenge #45. Create a function to calculate the sum of all the numbers in a jagged array (array contains numbers or other arrays of numbers on an unlimited number of levels)
var ar = [1, 2, [15, [23], [5, 12]], [100]];

console.log(sumArray(ar));

function sumArray(ar) {
  var sum = 0;

  for (var el of ar) {
    if (Array.isArray(el)) {
      el = sumArray(el);
    }

    sum += el;
  }

  return sum;
}

// Coding challenge #46-a. Find the maximum number in a jagged array of numbers or array of numbers
// Solution 1

var ar = [2, 4, 10, [12, 4, [100, 99], 4], [3, 2, 99], 0];

var max = findMax(ar);
console.log("Max  = ", max);

// Use recursion to find the maximum numeric value in an array of arrays
function findMax(ar) {
  var max = -Infinity;

  // Cycle through all the elements of the array
  for (var i = 0; i < ar.length; i++) {
    var el = ar[i];

    // If an element is of type array then invoke the same function
    // to find out the maximum element of that subarray
    if (Array.isArray(el)) {
      el = findMax(el);
    }

    if (el > max) {
      max = el;
    }
  }
  return max;
}

// Solution 2

var ar = [2, 4, 10, [12, 4, [100, 99], 4], [3, 2, 99], 0];

var max = findMax(ar);
console.log("Max  = ", max);

// Use a stack to find the maximum numeric value in an array of arrays
function findMax(arElements) {
  var max = -Infinity;

  // This is the stack on which will put the first array and then
  // all the other sub-arrays that we find as we traverse an array
  var arrays = [];

  arrays.push(arElements);

  // Loop as long as are arrays added to the stack for processing
  while (arrays.length > 0) {
    // Extract an array from the stack
    ar = arrays.pop();

    // ... and loop through its elements
    for (var i = 0; i < ar.length; i++) {
      var el = ar[i];

      // If an element is of type array, we'll add it to stack
      // to be processed later
      if (Array.isArray(el)) {
        arrays.push(el);
        continue;
      }

      if (el > max) {
        max = el;
      }
    }
  }

  return max;
}

// Coding challenge #47. Deep copy a jagged array with numbers or other arrays in a new array
var ar1 = [2, 4, 10, [12, 4, [100, 99], 4], [3, 2, 99], 0];
var ar2 = copyArray(ar1);

console.log(ar2);

function copyArray(ar) {
  var ar2 = [];

  for (var el of ar) {
    if (Array.isArray(el)) {
      el = copyArray(el);
    }

    ar2.push(el);
  }

  return ar2;
}

// Coding challenge #48. Create a function to return the longest word(s) in a string

var text = "Create a function to return the longest word(s) in a sentance.";

console.log(getLongestWords(text));

function getLongestWords(text) {
  var words = getWords(text);

  var maxSize = 0;
  var maxPositions = [];

  for (var i = 0; i < words.length; i++) {
    var currWordSize = words[i].length;

    if (currWordSize > maxSize) {
      maxSize = currWordSize;
      maxPositions = [i];
    } else if (currWordSize === maxSize) {
      maxPositions.push(i);
    }
  }

  return getElements(words, maxPositions);
}

// Get only the elements from specified positions from the array
function getElements(ar, arPositions) {
  var arNew = [];

  for (var pos of arPositions) {
    arNew.push(ar[pos]);
  }

  return arNew;
}

// Returns an array with the words from specified text
function getWords(text) {
  let startWord = -1;
  let ar = [];

  for (let i = 0; i <= text.length; i++) {
    let c = i < text.length ? text[i] : " ";

    if (!isSeparator(c) && startWord < 0) {
      startWord = i;
    }

    if (isSeparator(c) && startWord >= 0) {
      let word = text.substring(startWord, i);
      ar.push(word);

      startWord = -1;
    }
  }

  return ar;
}

function isSeparator(c) {
  var separators = [" ", "\t", "\n", "\r", ",", ";", ".", "!", "?", "(", ")"];
  return separators.includes(c);
}

// Coding challenge #49. Shuffle an array of strings
var ar = ["Shuffle", "an", "array", "of", "strings"];

console.log(shuffleArray(ar));

// Shuffle array implemented using Fisher–Yates shuffle algorithm
function shuffleArray(ar) {
  for (var i = ar.length - 1; i > 0; i--) {
    var j = randomInt(0, i - 1);

    var t = ar[i];
    ar[i] = ar[j];
    ar[j] = t;
  }

  return ar;
}

// Get a random int between min and max (both included)
function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Coding challenge #50. Create a function that will receive n as argument and return an array of n unique random numbers from 1 to n.
console.log(getRandomNumbers(10));

function getRandomNumbers(n) {
  var ar = [];

  for (var i = 1; i <= n; i++) {
    ar.push(i);
  }

  shuffleArray(ar);

  return ar;
}

// Shuffle array implemented using Fisher–Yates shuffle algorithm
function shuffleArray(ar) {
  for (var i = ar.length - 1; i > 0; i--) {
    var j = randomInt(0, i - 1);

    var t = ar[i];
    ar[i] = ar[j];
    ar[j] = t;
  }

  return ar;
}

// Get a random int between min and max (both included)
function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Coding challenge #51. Find the frequency of characters inside a string. Return the result as an array of objects. Each object has 2 fields: character and number of occurrences.

var ar = getCharFrequency("Find the frequency of characters inside a string");
console.log(JSON.stringify(ar));

function getCharFrequency(text) {
  var ar = [];

  for (var chr of text) {
    updateFrequency(ar, chr);
  }

  return ar;
}

function updateFrequency(ar, chr) {
  for (var el of ar) {
    if (el.chr === chr) {
      el.count++;
    }
  }

  ar.push({ chr: chr, count: 1 });
}

// Coding challenge #52. Calculate Fibonacci(500) with high precision (all decimals)
console.log(fibonacci(500));

function fibonacci(n) {
  if (n === 0) return "0";

  if (n === 1) return "1";

  var n1 = "0";
  var n2 = "1";

  for (var i = 2; i <= n; i++) {
    var sum = add(n1, n2);

    n1 = n2;
    n2 = sum;
  }

  return n2;
}

function add(sNumber1, sNumber2) {
  var maxSize = Math.max(sNumber1.length, sNumber2.length);

  var s1 = sNumber1.padStart(maxSize, "0");
  var s2 = sNumber2.padStart(maxSize, "0");

  var s = "";
  var carry = 0;

  for (var i = maxSize - 1; i >= 0; i--) {
    var digit1 = parseInt(s1[i]);
    var digit2 = parseInt(s2[i]);

    var sum = digit1 + digit2 + carry;
    var digitSum = sum % 10;
    carry = sum >= 10 ? 1 : 0;

    s = digitSum.toString() + s;
  }

  if (carry > 0) s = carry + s;

  return s;
}
// Coding challenge #53. Calculate 70! with high precision (all digits)
console.log(factorial(70));

// Calculate factorial(n) ... using big number calculations
function factorial(n) {
  var prod = "1";

  for (var i = 2; i <= n; i++) {
    prod = mult(prod, i.toString());
  }

  return prod;
}

// Multiplies sNumber1 * sNumber2
// Each number is provided as string
function mult(sNumber1, sNumber2) {
  // Calculate partial results according to multiplication algorithm
  var partialResults = [];

  for (var i = sNumber2.length - 1; i >= 0; i--) {
    var digit = parseInt(sNumber2[i]);

    var partialResult = multDigit(sNumber1, digit);
    partialResult += "0".repeat(partialResults.length);

    partialResults.push(partialResult);
  }

  // Sum partial results to obtain the product
  var sum = "";

  for (var r of partialResults) {
    sum = add(sum, r);
  }

  return sum;
}

// Multiplies number sNumber (as string) with a single digit number
function multDigit(sNumber, digit) {
  var p = "";
  var carry = 0;

  for (var i = sNumber.length - 1; i >= 0; i--) {
    var numberDigit = parseInt(sNumber[i]);

    var prod = digit * numberDigit + carry;
    var prodDigit = prod % 10;
    carry = Math.floor(prod / 10);

    p = prodDigit.toString() + p;
  }

  if (carry > 0) p = carry + p;

  return p;
}

function add(sNumber1, sNumber2) {
  var maxSize = Math.max(sNumber1.length, sNumber2.length);

  var s1 = sNumber1.padStart(maxSize, "0");
  var s2 = sNumber2.padStart(maxSize, "0");

  var s = "";
  var carry = 0;

  for (var i = maxSize - 1; i >= 0; i--) {
    var digit1 = parseInt(s1[i]);
    var digit2 = parseInt(s2[i]);

    var sum = digit1 + digit2 + carry;
    var digitSum = sum % 10;
    carry = sum >= 10 ? 1 : 0;

    s = digitSum.toString() + s;
  }

  if (carry > 0) s = carry + s;

  return s;
}
