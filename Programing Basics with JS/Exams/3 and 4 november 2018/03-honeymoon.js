function tripPrice(input) {
    let budget = Number(input[0]);
    let destination = input[1];
    let nightsToStay = Number(input[2]);
    let roomPrice = 0;
    let tickets = 0;

    switch (destination) {
        case "Cairo":
            roomPrice = 250 * 2;
            tickets = 600;
            break;

        case "Paris":
            roomPrice = 150 * 2;
            tickets = 350;
            break;

        case "Lima":
            roomPrice = 400 * 2;
            tickets = 850;
            break;

        case "New York":
            roomPrice = 300 * 2;
            tickets = 650;
            break;

        case "Tokyo":
            roomPrice = 350 * 2;
            tickets = 700;
            break;
    }

    let tripPrice = (roomPrice * nightsToStay) + tickets;

    if ((nightsToStay <= 4) && (destination == "Cairo" || destination == "New York")) {
        tripPrice *= 0.97;
    }

    if ((nightsToStay >= 5 && nightsToStay <= 9) && (destination === "Cairo" || destination === "New York")) {
        tripPrice *= 0.95;
    } else if ((nightsToStay >= 5 && nightsToStay <= 9) && destination === "Paris") {
        tripPrice *= 0.93;
    }

    if ((nightsToStay >= 10 && nightsToStay <= 24) && (destination === "Paris" || destination === "New York" || destination === "Tokyo")) {
        tripPrice *= 0.88;
    } else if ((nightsToStay >= 10 && nightsToStay <= 24) && destination === "Cairo") {
        tripPrice *= 0.9;
    }

    if ((nightsToStay >= 25 && nightsToStay < 50) && (destination === "Tokyo" || destination === "Cairo")) {
        tripPrice *= 0.83;
    } else if ((nightsToStay >= 25 && nightsToStay < 50) && (destination === "New York" || destination === "Lima")) {
        tripPrice *= 0.81;
    } else if ((nightsToStay >= 25 && nightsToStay < 50) && destination === "Paris") {
        tripPrice *= 0.78;
    }

    if (nightsToStay >= 50) {
        tripPrice *= 0.7;
    }

    if (budget >= tripPrice) {
        console.log(`Yes! You have ${(budget - tripPrice).toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money! You need ${(tripPrice - budget).toFixed(2)} leva.`);
    }
}