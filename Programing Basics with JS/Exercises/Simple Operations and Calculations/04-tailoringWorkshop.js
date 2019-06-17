function tailor(input) {
    let tables = Number(input.shift());
    let tableLenght = Number(input.shift());
    let tableWidth = Number(input.shift());

    let coversArea = tables * (tableLenght + 2 * 0.30) * (tableWidth + 2 * 0.30);
    let squaresArea = tables * (tableLenght / 2) * (tableLenght / 2);

    let priceUsd = coversArea * 7 + squaresArea * 9;
    let priceBgn = priceUsd * 1.85;

    console.log(`${priceUsd.toFixed(2)} USD`);
    console.log(`${priceBgn.toFixed(2)} BGN`);
}