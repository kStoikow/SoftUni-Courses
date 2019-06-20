function trip(input) {
    let daysToStay = Number(input.shift());
    let room = input.shift();
    let rate = input.shift();
    let nights = daysToStay - 1;
    let roomPrice = 0;
    let discountPercent = 0;

    if (room === "apartment") {
        roomPrice = 25.00;
        let wholePrice = roomPrice * nights;

        if (nights < 10) {
            discountPercent = 70 / 100;
        } else if (nights >= 10 && nights <= 15) {
            discountPercent = 65 / 100;
        } else {
            discountPercent = 50 / 100;
        }

        if (rate === "positive") {
            console.log(((wholePrice * discountPercent) * 1.25).toFixed(2));
        } else {
            console.log(((wholePrice * discountPercent) * 0.90).toFixed(2));
        }


    } else if (room === "president apartment") {
        roomPrice = 35.00;
        let wholePrice = roomPrice * nights;

        if (nights < 10) {
            discountPercent = 90 / 100;
        } else if (nights >= 10 && nights <= 15) {
            discountPercent = 85 / 100;
        } else {
            discountPercent = 80 / 100;
        }

        if (rate === "positive") {
            console.log(((wholePrice * discountPercent) * 1.25).toFixed(2));
        } else {
            console.log(((wholePrice * discountPercent) * 0.90).toFixed(2));
        }

    } else {
        roomPrice = 18.00;
        let wholePrice = roomPrice * nights;

        if (rate === "positive") {
            console.log((wholePrice * 1.25).toFixed(2));
        } else {
            console.log((wholePrice * 0.9).toFixed(2));
        }
    }

}