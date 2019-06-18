function lowestAndBigest(input) {
    let numbersData = Number(input[0]);
    let maxNumber = Number.MIN_SAFE_INTEGER;
    let minNumber = Number.MAX_SAFE_INTEGER;

    for (let i = 1; i <= numbersData; i++) {
        let nextNumber = Number(input[i])

        if (maxNumber < nextNumber) {
            maxNumber = nextNumber;
        }

        if (minNumber > nextNumber) {
            minNumber = nextNumber;
        }
    }

    console.log(`Max number: ${maxNumber}`);
    console.log(`Min number: ${minNumber}`);
}
