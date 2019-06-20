function solve(input) {
    let projectionType = input.shift();
    let rows = Number(input.shift());
    let columns = Number(input.shift());
    let price = 0;
    let result = 0;

    if (projectionType === "Premiere") {
        price = 12.00;
        result = (rows * columns * price).toFixed(2);
        console.log(result);

    } else if (projectionType === "Normal") {
        price = 7.50;
        result = (rows * columns * price).toFixed(2);
        console.log(result);

    } else {
        price = 5.00;
        result = (rows * columns * price).toFixed(2);
        console.log(result);
    }

}