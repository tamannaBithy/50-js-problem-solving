/// functions

const factorials = (n) => {
  let sum = 1;

  for (let i = 2; i <= n; i++) {
    sum *= i;
  }

  console.log(sum);
};

factorials(4);

// function factorial(n)
// {
//     if (n < 2)
//         {
//             return 1;
//         }

//     return n * factorial(n-1);
// }

// console.log(factorial(4));

// function getLetter(s) {
//   let letter;

//   switch (s.charAt(0)) {
//     case "a":
//     case "e":
//     case "i":
//     case "o":
//     case "u":
//       letter = "A";
//       break;

//     case "b":
//     case "c":
//     case "d":
//     case "f":
//     case "g":
//       letter = "B";
//       break;

//     case "h":
//     case "j":
//     case "k":
//     case "l":
//     case "m":
//       letter = "C";
//       break;

//     default:
//       letter = "Unknown";
//   }

//   return letter;
// }

// console.log(getLetter("mffff"));

// function vowelsAndConsonants(s) {

//   const letter = s.split("");

//   const newLetter = letter.map((item) => {
//     if (item.includes("a")) {
//       console.log(item);
//     } else if (item.includes("e")) {
//       console.log(item);
//     } else if (item.includes("i")) {
//       console.log(item);
//     } else if (item.includes("o")) {
//       console.log(item);
//     } else if (item.includes("u")) {
//       console.log(item);
//     } else {
//       console.log(item);
//     }
//   });
// }

// vowelsAndConsonants("javascriptloops");

function vowelsAndConsonants(s) {
  const vowels = new Set(["a", "e", "i", "o", "u"]);

  for (let i = 0; i < s.length; i++) {
    const element = s[i];

    if (vowels.has(element)) {
      console.log(element);
    } else {
      console.log(element);
    }
  }
}

vowelsAndConsonants("javascriptloops");

function reverseString(s) {
  const newString = s.split("").reverse().join("");
  console.log(newString);
}

reverseString("1234");

function getCount(objects) {
  let count = 0;

  const newObj = objects.map((obj) => {
    if (obj.x === obj.y) {
      count++;
    }
  });

  console.log(count);
}

getCount([
  { x: 1, y: 2 },
  { x: 4, y: 4 },
  { x: 7, y: 7 },
]);




// day- 5- template literals

function sides(strings, A, P) {
  const s1 = (P + Math.sqrt(Math.pow(P, 2) - 16 * A)) / 4;
  const s2 = (P - Math.sqrt(Math.pow(P, 2) - 16 * A)) / 4;

  const newArr = [s1, s2];
  const result = newArr.sort();

  return result;
}

const area = 140;
const perimeter = 48;
const result = sides`The area is ${area} and the perimeter is ${perimeter}.`;

console.log(result);
