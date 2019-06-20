function minimum(input) {
    let numbersCount = Number(input.shift());
    let counter = 0;
    let minNum = Number.MAX_SAFE_INTEGER;

    while (counter < numbersCount) {
        let nextNum = Number(input.shift());
        counter++;

        if (nextNum < minNum) {
            minNum = nextNum;
        }
    }
    console.log(minNum);
}