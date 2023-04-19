// #7: Calculate the sum of odd numbers greater than 10 and less than 30

function sumOddNumber() {
    let sum : number = 0;
    for (let i = 11; i < 30; i += 2){
        sum += i
    }

    console.log(sum);
}

sumOddNumber();