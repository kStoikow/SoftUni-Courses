function solveNumbers(input) {
    let command = input.shift();
    let nonPrimeSum = 0;
    let primeSum = 0;

    while (command !== "stop") {
        let nextNumber = Number(command);

        if (nextNumber < 0) {
            console.log(`Number is negative.`);
            command = input.shift();
            continue;
        }

        let counter = 0;

        for (let i = 1; i <= nextNumber; i++) {
            if (nextNumber % i === 0) {
                counter++;
            }

        }
        if (counter === 2) {
            primeSum += nextNumber;
        } else {
            nonPrimeSum += nextNumber;
        }

        counter = 0;
        command = input.shift();
    }
    console.log(`Sum of all prime numbers is: ${primeSum}`);
    console.log(`Sum of all non prime numbers is: ${nonPrimeSum}`);
}