// #32. Create a function that will capitalize the first letter of each word in a text

function capitalizeWord(text) {
    const splitedWord = text.split(' ')
    let newArr = []
    
    for (let word of splitedWord) {
        const capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1)
        newArr.push(capitalizedWord);
    }

    const capitalizedText = newArr.join(' ');

    console.log(capitalizedText);
}

capitalizeWord("tamanna is a good girl");
