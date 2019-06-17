function equalWords(input) {
    let firstWord = input.shift();
    let secondWord = input.shift();
    firstWord = firstWord.toUpperCase();
    secondWord = secondWord.toUpperCase();
    if (firstWord === secondWord) {
        console.log("yes");
    } else {
        console.log("no");
    }

}