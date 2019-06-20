function moneyToPay(input) {
    let dessert = input.shift();
    let sweetsQuantity = Number(input.shift());
    let day = Number(input.shift());
    let price = 0;

    if (day <= 15) {
        if (dessert === "Cake") {
            price = 24;
        } else if (dessert === "Souffle") {
            price = 6.66;
        } else {
            price = 12.6;
        }

    } else {
        if (dessert === "Cake") {
            price = 28.7;
        } else if (dessert === "Souffle") {
            price = 9.8;
        } else {
            price = 16.98;
        }
    }

    let totalSum = price * sweetsQuantity;

    if (day <= 22 && (totalSum > 99 && totalSum <= 200)) {
        totalSum *= 0.85;
    } else if (day <= 22 && totalSum > 200) {
        totalSum *= 0.75;
    }

    if (day <= 15) {
        totalSum *= 0.9;
    }

    console.log(`${totalSum.toFixed(2)}`);
}