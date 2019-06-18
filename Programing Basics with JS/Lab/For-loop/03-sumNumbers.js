function sumNumbers(input) {
    let letterCount = Number(input[0]);
    let sum = 0;

    for (let i = 1; i <= letterCount; i++) {
        let numberToGet = Number(input[i]);
        sum += numberToGet;
}

console.log(sum);
}