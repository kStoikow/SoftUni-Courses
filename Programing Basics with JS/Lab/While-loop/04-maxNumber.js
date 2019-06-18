function biggest(input) {
    let numbersCount = Number(input.shift());
    let counter = 0;
    let maxNum = Number.MIN_SAFE_INTEGER;

    while (counter < numbersCount) {
        let nextNum = Number(input.shift());
        counter++;

        if (nextNum > maxNum) {
            maxNum = nextNum;
        }
    }
    console.log(maxNum);
}