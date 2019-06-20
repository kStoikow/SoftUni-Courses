function traveling(input) {
    let budget = Number(input.shift());
    let season = input.shift();
    let tripTo = "";
    let whereToStay = "";
    let moneySpend = 0;

    if (budget <= 100) {
        tripTo = "Bulgaria";

        if (season === "summer") {
            whereToStay = "Camp";
            moneySpend = budget * 0.3;

        } else {
            whereToStay = "Hotel";
            moneySpend = budget * 0.7;
        }

    } else if (budget <= 1000) {
        tripTo = "Balkans";

        if (season === "summer") {
            whereToStay = "Camp";
            moneySpend = budget * 0.4;

        } else {
            whereToStay = "Hotel";
            moneySpend = budget * 0.8;
        }

    } else {
        tripTo = "Europe";
        whereToStay = "Hotel";
        moneySpend = budget * 0.9;
    }

    console.log(`Somewhere in ${tripTo}`);
    console.log(`${whereToStay} - ${moneySpend.toFixed(2)}`);
}