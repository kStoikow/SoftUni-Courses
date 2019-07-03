function solve(input) {
    let number = input.shift();
    number = number + '';

    for (let i = 1; i <= number[2]; i++) {
        for (let j = 1; j <= number[1]; j++) {
            for (let k = 1; k <= number[0]; k++) {
                console.log(`${i} * ${j} * ${k} = ${i * j * k};`);
            }
        }
    }
}