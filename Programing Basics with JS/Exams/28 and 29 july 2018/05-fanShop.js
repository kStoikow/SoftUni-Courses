function isEnough(input) {
    let budget = Number(input.shift());
    let souvenirQuantity = Number(input.shift());
    let command = input.shift();
    let counter = 1;
    let price = 0;
    let totalPrice = 0;

    while (counter <= souvenirQuantity) {
        switch (command) {
            case "hoodie": price = 30;
                break;
            case "keychain": price = 4;
                break;
            case "T-shirt": price = 20;
                break;
            case "flag": price = 15;
                break;
            case "sticker": price = 1;
                break;
        }

        totalPrice += price;
        counter++;

        command = input.shift();
    }

    if (budget >= totalPrice) {
        console.log(`You bought ${souvenirQuantity} items and left with ${budget - totalPrice} lv.`);
    } else {
        console.log(`Not enough money, you need ${totalPrice - budget} more lv.`);
    }
}