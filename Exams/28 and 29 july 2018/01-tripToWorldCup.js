function prices(input) {
    let ticketForGoingPrice = Number(input[0]);
    let ticketForBackPrice = Number(input[1]);
    let matchPrice = Number(input[2]);
    let matchesCount = Number(input[3]);
    let percentDiscount = Number(input[4]);
    let discount = (6 * (ticketForGoingPrice + ticketForBackPrice)) * (percentDiscount / 100);
    let afterDiscount = (6 * (ticketForGoingPrice + ticketForBackPrice)) - discount;
    let wholeSum = afterDiscount + ((matchesCount * matchPrice) * 6);
    console.log(`Total sum: ${wholeSum.toFixed(2)} lv.`);
    console.log(`Each friend has to pay ${(wholeSum / 6).toFixed(2)} lv.`);
}
