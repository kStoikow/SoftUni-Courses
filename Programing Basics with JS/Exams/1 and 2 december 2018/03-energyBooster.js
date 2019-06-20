function price(input) {
    let taste = input.shift();
    let size = input.shift();
    let quantity = Number(input.shift());
    let price = 0;

    if (size === "small") {
        if (taste === "Watermelon") {
            price = 56;
        } else if (taste === "Mango") {
            price = 36.66;
        } else if (taste === "Pineapple") {
            price = 42.1;
        } else {
            price = 20;
        }

    } else {
        if (taste === "Watermelon") {
            price = 28.7;
        } else if (taste === "Mango") {
            price = 19.6;
        } else if (taste === "Pineapple") {
            price = 24.8;
        } else {
            price = 15.20;
        }
    }

    if (size === "small") {
        price *= 2;
    } else {
        price *= 5;
    }

    let totalPrice = price * quantity;

    if (totalPrice >= 400 && totalPrice <= 1000) {
        totalPrice *= 0.85;
    } else if (totalPrice > 1000) {
        totalPrice *= 0.5;
    }
    console.log(`${totalPrice.toFixed(2)} lv.`);
}