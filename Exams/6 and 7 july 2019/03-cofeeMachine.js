function drinksPrice(input) {
    let whatDrink = input.shift();
    let howMuchSugar = input.shift();
    let drinksCount = Number(input.shift());
    let totalSum = 0;
    let price = 0;

    if (whatDrink === 'Espresso') {
        switch (howMuchSugar) {
            case "Without": price = 0.9;
                break;
            case "Normal": price = 1;
                break;
            case "Extra": price = 1.2;
                break;
        }

    } else if (whatDrink === 'Cappuccino') {
        switch (howMuchSugar) {
            case "Without": price = 1;
                break;
            case "Normal": price = 1.2;
                break;
            case "Extra": price = 1.6;
                break;
        }

    } else {
        switch (howMuchSugar) {
            case "Without": price = 0.5;
                break;
            case "Normal": price = 0.6;
                break;
            case "Extra": price = 0.7;
                break;
        }
    }

    totalSum = price * drinksCount;
    if (howMuchSugar == 'Without') {
        totalSum *= 0.65;
    }

    if (whatDrink === 'Espresso' && drinksCount >= 5) {
        totalSum *= 0.75;
    }

    if (totalSum > 15) {
        totalSum *= 0.8;
    }

    console.log(`You bought ${drinksCount} cups of ${whatDrink} for ${totalSum.toFixed(2)} lv.`);
}