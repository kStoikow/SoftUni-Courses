function areEqual(input) {
    let numbersToGet = Number(input[0]);
    let numCount = numbersToGet * 2;
    let leftSum = 0;
    let rightSum = 0;

    for (let i = 1; i <= numCount; i++) {
        let nextNum = Number(input[i]);

        if (i <= numbersToGet) {
            leftSum += nextNum;
        } else {
            rightSum += nextNum;
        }
    }

    if (leftSum === rightSum) {
        console.log(`Yes, sum = ${rightSum}`);
    } else {
        console.log(`No, diff = ${Math.abs(rightSum - leftSum)}`);
    }
}