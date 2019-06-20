function subscription(input) {
    let subscribedPeriod = input.shift();
    let subscriptionType = input.shift();
    let isDesert = input.shift();
    let monthsToPay = Number(input.shift());
    let totalSum = 0;
    let monthlyPrice = 0;

    if (subscribedPeriod === "one") {

        if (subscriptionType === "Small") {
            monthlyPrice = 9.98;
        } else if (subscriptionType === "Middle") {
            monthlyPrice = 18.99;
        } else if (subscriptionType === "Large") {
            monthlyPrice = 25.98;
        } else {
            monthlyPrice = 35.99;
        }

        if (isDesert === "yes" && subscriptionType === "Small") {
            monthlyPrice += 5.5;
        } else if (isDesert === "yes" && (subscriptionType === "Middle" || subscriptionType === "Large")) {
            monthlyPrice += 4.35;
        } else if (isDesert === "yes" && subscriptionType === "ExtraLarge") {
            monthlyPrice += 3.85;
        }

    } else if (subscribedPeriod === "two") {
        if (subscriptionType === "Small") {
            monthlyPrice = 8.58;
        } else if (subscriptionType === "Middle") {
            monthlyPrice = 17.09;
        } else if (subscriptionType === "Large") {
            monthlyPrice = 23.59;
        } else {
            monthlyPrice = 31.79;
        }

        if (isDesert === "yes" && subscriptionType === "Small") {
            monthlyPrice += 5.5;
        } else if (isDesert === "yes" && (subscriptionType === "Middle" || subscriptionType === "Large")) {
            monthlyPrice += 4.35;
        } else if (isDesert === "yes" && subscriptionType === "ExtraLarge") {
            monthlyPrice += 3.85;
        }
    }

    totalSum = monthlyPrice * monthsToPay;

    if (subscribedPeriod === "two") {
        totalSum *= 0.9625;
    }

    console.log(`${totalSum.toFixed(2)} lv.`);
}