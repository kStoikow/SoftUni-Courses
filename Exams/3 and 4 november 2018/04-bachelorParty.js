function bachelorParty(input) {
    let singerPrice = Number(input.shift());
    let command = input.shift();
    let guestsCounter = 0;
    let income = 0;

    while (command !== "The restaurant is full") {
        let groupGuests = Number([command]);
        guestsCounter += groupGuests;
        let couvertPrice = 0;

        if (groupGuests < 5) {
            couvertPrice = groupGuests * 100;
        } else {
            couvertPrice = groupGuests * 70;
        }
        income += couvertPrice;
        command = input.shift();
    }

    if (income >= singerPrice) {
        console.log(`You have ${guestsCounter} guests and ${income - singerPrice} leva left.`);
    } else {
        console.log(`You have ${guestsCounter} guests and ${income} leva income, but no singer.`);
    }
}