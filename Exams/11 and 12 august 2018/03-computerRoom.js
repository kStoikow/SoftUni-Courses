function prices(input) {
    let month = input.shift();
    let hoursPlayed = Number(input.shift());
    let people = Number(input.shift());
    let daytime = input.shift();
    let price = 0;

    if (month === "march" || month === "april" || month === "may") {
        if (daytime === "day") {
            price = 10.5;
        } else {
            price = 8.4;
        }

    } else if ((month === "june" || month === "july" || month === "august")) {
        if (daytime === "day") {
            price = 12.6;
        } else {
            price = 10.2;
        }
    }

    if (people >= 4) {
        price *= 0.9;
    }

    if (hoursPlayed >= 5) {
        price *= 0.5;
    }

    console.log(`Price per person for one hour: ${price.toFixed(2)}`);
    console.log(`Total cost of the visit: ${((hoursPlayed * price) * people).toFixed(2)}`);
}