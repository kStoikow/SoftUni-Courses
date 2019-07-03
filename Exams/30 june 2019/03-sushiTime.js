function price(input) {
    let sushiType = input.shift();
    let restaurant = input.shift();
    let portions = Number(input.shift());
    let isDelivery = input.shift();
    let price = 0;
    let totalSum = 0;

    if (restaurant === 'Sushi Zone') {
        if (sushiType === 'sashimi') {
            price = 4.99;
        } else if (sushiType === 'maki') {
            price = 5.29;
        } else if (sushiType === 'uramaki') {
            price = 5.99;
        } else {
            price = 4.29;
        }

    } else if (restaurant === 'Sushi Time') {
        if (sushiType === 'sashimi') {
            price = 5.49;
        } else if (sushiType === 'maki') {
            price = 4.69;
        } else if (sushiType === 'uramaki') {
            price = 4.49;
        } else {
            price = 5.19;
        }

    } else if (restaurant === 'Sushi Bar') {
        if (sushiType === 'sashimi') {
            price = 5.25;
        } else if (sushiType === 'maki') {
            price = 5.55;
        } else if (sushiType === 'uramaki') {
            price = 6.25;
        } else {
            price = 4.75;
        }

    } else if (restaurant === 'Asian Pub') {
        if (sushiType === 'sashimi') {
            price = 4.50;
        } else if (sushiType === 'maki') {
            price = 4.80;
        } else if (sushiType === 'uramaki') {
            price = 5.50;
        } else {
            price = 5.5;
        }

    } else {
        console.log(`${restaurant} is invalid restaurant!`);
    }

    totalSum = price * portions;
    if (isDelivery === 'Y') {
        totalSum *= 1.2;
    }

    if (totalSum !== 0) {
        console.log(`Total price: ${Math.ceil(totalSum)} lv.`);
    }
}