function sales(input) {
    let computersCount = Number(input.shift());
    let averageRating = 0;
    let totalSales = 0;

    for (let i = 1; i <= computersCount; i++) {
        let rating = input.shift();
        let currentSales = 0;

        for (let j = 0; j <= rating.length - 1; j++) {
            let currentDigit = Number(rating[j]);

            if (j === rating.length - 1) {
                averageRating += currentDigit;
                currentSales = Math.trunc(Number(rating) / 10);

                if (currentDigit === 2) {
                    currentSales = 0;
                } else if (currentDigit == 3) {
                    currentSales *= 0.5;
                } else if (currentDigit == 4) {
                    currentSales *= 0.7;
                } else if (currentDigit == 5) {
                    currentSales *= 0.85;
                } else if (currentDigit == 6) {
                    currentSales *= 1;
                }

                totalSales += currentSales;
            }
        }
    }

    averageRating /= computersCount;
    console.log(totalSales.toFixed(2));
    console.log(averageRating.toFixed(2));
}