function numbers(input) {
    let numbersCount = Number(input[0]);

    for (let i = 0; i <= numbersCount; i++) {

        if (i % 2 === 0) {
            console.log(Math.pow(2, i));
        }
    }
}