function garden(input) {
    let flowersType = input.shift();
    let flowersCount = Number(input.shift());
    let budget = Number(input.shift());
    let flowerPrice = 0;
    let totalSum = 0;

    if (flowersType === "Roses") {
        flowerPrice = 5;
        totalSum = flowerPrice * flowersCount;

        if (flowersCount > 80) {
            totalSum *= 0.9;
        }

    } else if (flowersType === "Dahlias") {
        flowerPrice = 3.80;
        totalSum = flowerPrice * flowersCount;

        if (flowersCount > 90) {
            totalSum *= 0.85;
        }

    } else if (flowersType === "Tulips") {
        flowerPrice = 2.80;
        totalSum = flowerPrice * flowersCount;

        if (flowersCount > 80) {
            totalSum *= 0.85;
        }

    } else if (flowersType === "Narcissus") {
        flowerPrice = 3;
        totalSum = flowerPrice * flowersCount;

        if (flowersCount < 120) {
            totalSum *= 1.15;
        }

    } else {
        flowerPrice = 2.5;
        totalSum = flowerPrice * flowersCount;

        if (flowersCount < 80) {
            totalSum *= 1.20;
        }
    }

    let moneyLeft = Math.abs(budget - totalSum).toFixed(2);
    if (budget >= totalSum) {
        console.log(`Hey, you have a great garden with ${flowersCount} ${flowersType} and ${moneyLeft} leva left.`);
    } else {
        console.log(`Not enough money, you need ${moneyLeft} leva more.`);
    }

}