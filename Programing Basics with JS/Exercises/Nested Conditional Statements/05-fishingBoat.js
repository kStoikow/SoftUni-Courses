function canTheyBuy(input) {
    let budget = Number(input.shift());
    let season = input.shift();
    let fishersCount = Number(input.shift());
    let price = 0;

    switch (season) {

        case "Spring":
            price = 3000;
            if (fishersCount <= 6) {
                price *= 0.9;
            } else if (fishersCount > 6 && fishersCount <= 11) {
                price *= 0.85;
            } else {
                price *= 0.75;
            }
            break;

        case "Summer":
            price = 4200;
            if (fishersCount <= 6) {
                price *= 0.90;
            } else if (fishersCount > 6 && fishersCount <= 11) {
                price *= 0.85;
            } else {
                price *= 0.75;
            }
            break;

        case "Autumn":
            price = 4200;
            if (fishersCount <= 6) {
                price *= 0.9;
            } else if (fishersCount > 6 && fishersCount <= 11) {
                price *= 0.85;
            } else {
                price *= 0.75;
            }
            break;


        case "Winter":
            price = 2600;
            if (fishersCount <= 6) {
                price *= 0.9;
            } else if (fishersCount > 6 && fishersCount <= 11) {
                price *= 0.85;
            } else {
                price *= 0.75;
            }
            break;
    }

    if (fishersCount % 2 === 0 && season !== "Autumn") {
        price *= 0.95;
    }

    let moneyLeft = Math.abs(budget - price).toFixed(2);

    if (budget >= price) {
        console.log(`Yes! You have ${moneyLeft} leva left.`);
    } else {
        console.log(`Not enough money! You need ${moneyLeft} leva.`);
    }
}