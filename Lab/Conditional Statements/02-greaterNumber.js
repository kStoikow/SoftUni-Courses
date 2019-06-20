function greaterNum(input) {
    let numOne = Number(input.shift());
    let numTwo = Number(input.shift());

    if (numOne > numTwo) {
        console.log(`${numOne} `);

    } else {
        console.log(`${numTwo}`);
    }

}