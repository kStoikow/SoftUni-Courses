function numbers(input) {
    let num = Number(input.shift());

    while (num <= 0 || num > 100) {
        console.log(`Invalid number!`);
        num = Number(input.shift());
    }

    console.log(`The number is ${num}`);
}