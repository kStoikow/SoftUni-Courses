function areOddsEqualToEvens(input) {
    let numbersCount = Number(input[0]);
    let sumOdd = 0;
    let sumEven = 0;

    for (let i = 1; i <= numbersCount; i += 2) {
        let nextEvenNum = Number(input[i]);
        sumEven += nextEvenNum;
    }

    for (let i = 2; i <= numbersCount; i += 2) {
        let nextOddNum = Number(input[i]);
        sumOdd += nextOddNum;
    }

    if (sumEven === sumOdd) {
        console.log(`Yes`);
        console.log(`Sum = ${sumEven}`);
    } else {
        console.log(`No`);
        console.log(`Diff = ${Math.abs(sumEven - sumOdd)}`);
    }
}