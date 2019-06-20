function sequence(input) {
    let numbers = Number(input.shift());
    let toPrint = 1;

    while (toPrint <= numbers) {
        console.log(toPrint);
        toPrint = (toPrint * 2) + 1;
    }
}