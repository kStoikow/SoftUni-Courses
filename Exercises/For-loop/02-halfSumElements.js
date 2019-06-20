function sumElements(input) {
    let numCount = Number(input[0]);
    let biggestNum = Number.MIN_SAFE_INTEGER;
    let numbersSum = 0;

    for (let i = 1; i <= numCount; i++) {
        let nextNum = Number(input[i]);

        if (biggestNum < nextNum) {
            biggestNum = nextNum;
        }

        numbersSum += nextNum;
    }

    let allNumbersSum = numbersSum - biggestNum;

    if (allNumbersSum === biggestNum) {
        console.log(`Yes`);
        console.log(`Sum = ${biggestNum}`);

    } else {
        let difference = Math.abs(biggestNum - allNumbersSum);
        console.log(`No`);
        console.log(`Diff = ${difference}`);
    }
}