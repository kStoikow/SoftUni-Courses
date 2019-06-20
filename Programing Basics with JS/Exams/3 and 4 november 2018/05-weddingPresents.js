function solve(input) {
    let guests = Number(input.shift());
    let presents = Number(input.shift());
    let giftsCounter = 0;
    let moneyGifts = 0;
    let electricApplianesGifts = 0;
    let voucherGifts = 0;
    let otherGifts = 0;

    while (giftsCounter < presents) {
        giftsCounter++;
        let category = input.shift();

        if (category === "A") {
            moneyGifts++;

        } else if (category === "B") {
            electricApplianesGifts++;

        } else if (category === "V") {
            voucherGifts++;

        } else {
            otherGifts++;
        }
    }

    let moneyPercent = (moneyGifts / presents) * 100;
    let electricPercent = (electricApplianesGifts / presents) * 100;
    let voucherPercent = (voucherGifts / presents) * 100;
    let otherPercent = (otherGifts / presents) * 100;
    let allGiftsPercent = (presents / guests) * 100;
    console.log(`${moneyPercent.toFixed(2)}%`);
    console.log(`${electricPercent.toFixed(2)}%`);
    console.log(`${voucherPercent.toFixed(2)}%`);
    console.log(`${otherPercent.toFixed(2)}%`);
    console.log(`${allGiftsPercent.toFixed(2)}%`);
}