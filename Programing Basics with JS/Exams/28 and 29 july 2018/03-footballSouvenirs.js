function price(input) {
    let team = input.shift();
    let souvenirType = input.shift();
    let souvenirQuantity = Number(input.shift());
    let price = 0;

    if (team === "Argentina") {
        switch (souvenirType) {
            case "flags": price = 3.25;
                break;
            case "caps": price = 7.2;
                break;
            case "posters": price = 5.1;
                break;
            case "stickers": price = 1.25;
                break;
        }

    } else if (team === "Brazil") {
        switch (souvenirType) {
            case "flags": price = 4.2;
                break;
            case "caps": price = 8.5;
                break;
            case "posters": price = 5.35;
                break;
            case "stickers": price = 1.20;
                break;
        }

    } else if (team === "Croatia") {
        switch (souvenirType) {
            case "flags": price = 2.75;
                break;
            case "caps": price = 6.9;
                break;
            case "posters": price = 4.95;
                break;
            case "stickers": price = 1.1;
                break;
        }

    } else if (team === "Denmark") {
        switch (souvenirType) {
            case "flags": price = 3.1;
                break;
            case "caps": price = 6.5;
                break;
            case "posters": price = 4.8;
                break;
            case "stickers": price = 0.9;
                break;
        }
    }

    let totalSum = price * souvenirQuantity;
    if ((team === "Argentina" || team === "Brazil" || team === "Croatia" || team === "Denmark") && (souvenirType === "flags" || souvenirType === "caps" || souvenirType === "posters" || souvenirType === "stickers")) {
        console.log(`Pepi bought ${souvenirQuantity} ${souvenirType} of ${team} for ${totalSum.toFixed(2)} lv.`);

    } else if (team !== "Argentina" && team !== "Brazil" && team !== "Croatia" && team !== "Denmark") {
        console.log(`Invalid country!`);

    } else {
        console.log(`Invalid stock!`);
    }
}