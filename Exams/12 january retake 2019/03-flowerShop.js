function bouquetPrice(input) {
    let chrysantheniumQuantity = Number(input.shift());
    let rosesQuantity = Number(input.shift());
    let tulipQuantity = Number(input.shift());
    let season = input.shift();
    let isHoliday = input.shift();
    let chrysantheniumPrice = 0;
    let rosesPrice = 0;
    let tulipPrice = 0;

    if (season === "Spring" || season === "Summer") {
        chrysantheniumPrice = 2;
        rosesPrice = 4.1;
        tulipPrice = 2.5;

    } else {
        chrysantheniumPrice = 3.75;
        rosesPrice = 4.5;
        tulipPrice = 4.15;
    }

    let chrysantheniumTotalPrice = chrysantheniumPrice * chrysantheniumQuantity;
    let rosesTotalPrice = rosesQuantity * rosesPrice;
    let tulipTotalPrice = tulipQuantity * tulipPrice;
    let bouquetPrice = (chrysantheniumTotalPrice + rosesTotalPrice + tulipTotalPrice);

    if (isHoliday === "Y") {
        bouquetPrice *= 1.15;
    }

    if (season === "Spring" && tulipQuantity > 7) {
        bouquetPrice *= 0.95;
    }

    if (season === "Winter" && rosesQuantity >= 10) {
        bouquetPrice *= 0.9;
    }

    if ((chrysantheniumQuantity + rosesQuantity + tulipQuantity) > 20) {
        bouquetPrice *= 0.8;
    }
    bouquetPrice += 2;
    console.log(bouquetPrice.toFixed(2));
}