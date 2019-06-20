function parkingPrice(input) {
    let days = Number(input[0]);
    let hours = Number(input[1]);
    let price = 0;
    let wholePrice = 0;
    let dayCounter = 0;

    for (let i = 1; i <= days; i++) {
        let dailyPrice = 0;
        dayCounter++;

        for (let j = 1; j <= hours; j++) {

            if (i % 2 === 0 && j % 2 !== 0) {
                price = 2.5;
            } else if (i % 2 !== 0 && j % 2 === 0) {
                price = 1.25;
            } else {
                price = 1;
            }

            dailyPrice += price;
        }

        wholePrice += dailyPrice;
        console.log(`Day: ${dayCounter} - ${dailyPrice.toFixed(2)} leva`);
    }
    console.log(`Total: ${wholePrice.toFixed(2)} leva`);
}