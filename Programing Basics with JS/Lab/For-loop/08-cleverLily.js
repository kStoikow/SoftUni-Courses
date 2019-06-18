function areEnough(input) {
    let age = Number(input[0]);
    let laundryPrice = Number(input[1]);
    let toyPrice = Number(input[2]);

    let moneyGifted = 0;
    let toysGifted = 0;

    for (let i = 1; i <= age; i++) {

        if (i % 2 === 0) {
            moneyGifted++;
        } else {
            toysGifted++;
        }
    }

    let moneySaved = 0;

    for (let j = 1; j <= moneyGifted; j++) {
        moneySaved += 10 * j - 1;
    }

    let totalMoney = moneySaved + (toysGifted * toyPrice);
    let difference = Math.abs(totalMoney - laundryPrice).toFixed(2);

    if (totalMoney >= laundryPrice) {
        console.log(`Yes! ${difference}`);
    } else {
        console.log(`No! ${difference}`);
    }
}