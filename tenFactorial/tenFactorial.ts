// #6: Calculate 10!

function tenFactorial() {
  let newFactorial: number = 1;
  for (let i = 1; i <= 10; i++) {
    newFactorial *= i;
  }

  console.log(newFactorial);
}

tenFactorial();
