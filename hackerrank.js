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
