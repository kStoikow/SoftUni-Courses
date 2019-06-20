function priceToPay(input) {
    let stage = input.shift();
    let ticketType = input.shift();
    let ticketCount = Number(input.shift());
    let trophyPicture = input.shift();
    let price = 0;

    if (stage === 'Quarter final') {

        if (ticketType === 'Standard') {
            price = 55.5;
        } else if (ticketType === 'Premium') {
            price = 105.2;
        } else {
            price = 118.9;
        }

    } else if (stage === 'Semi final') {

        if (ticketType === 'Standard') {
            price = 75.88;
        } else if (ticketType === 'Premium') {
            price = 125.22;
        } else {
            price = 300.4;
        }

    } else {

        if (ticketType === 'Standard') {
            price = 110.1;
        } else if (ticketType === 'Premium') {
            price = 160.66;
        } else {
            price = 400;
        }
    }

    let totalTicketsPrice = price * ticketCount;
    let afterDiscount = (totalTicketsPrice);

    if (totalTicketsPrice > 4000) {
        afterDiscount = totalTicketsPrice * 0.75;
    } else if (totalTicketsPrice > 2500) {
        afterDiscount = totalTicketsPrice * 0.9;
    }

    if (trophyPicture === 'Y' && totalTicketsPrice <= 4000) {
        afterDiscount += (ticketCount * 40);
    }

    console.log(afterDiscount.toFixed(2));
}