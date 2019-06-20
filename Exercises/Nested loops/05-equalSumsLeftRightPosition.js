function findNumbers(input) {
    let firstNumber = Number(input[0]);
    let secondNumber = Number(input[1]);
    let toPrint = "";

    for (let currentNumber = firstNumber; currentNumber <= secondNumber; currentNumber++) {
        let nextNumberInString = currentNumber + "";
        let leftSum = 0;
        let rightSum = 0;
        let holder = 0;

        for (let i = 0; i < nextNumberInString.length; i++) {
            let currentDigit = Number(nextNumberInString[i]);

            if (i < 2) {
                leftSum += currentDigit;
            } else if (i > 2) {
                rightSum += currentDigit;
            } else {
                holder += currentDigit;
            }
        }

        if (leftSum === rightSum) {
            toPrint += nextNumberInString + " ";
            continue;

        } else {
            if (leftSum < rightSum) {
                leftSum += holder;
            } else {
                rightSum += holder;
            }
        }

        if (leftSum === rightSum) {
            toPrint += nextNumberInString + " ";
        }
    }
    console.log(toPrint);
}