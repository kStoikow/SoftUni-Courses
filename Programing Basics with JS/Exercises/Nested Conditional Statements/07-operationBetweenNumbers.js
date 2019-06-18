function operation(input) {
    let firstNumber = Number(input.shift());
    let secondNumber = Number(input.shift());
    let operator = input.shift();
    let result = 0;

    if (operator === "+") {
        result = firstNumber + secondNumber;

        if ((firstNumber + secondNumber) % 2 === 0) {
            console.log(`${firstNumber} ${operator} ${secondNumber} = ${result} - even`);
        } else {
            console.log(`${firstNumber} ${operator} ${secondNumber} = ${result} - odd`);
        }

    } else if (operator === "-") {
        result = firstNumber - secondNumber;

        if ((firstNumber - secondNumber) % 2 === 0) {
            console.log(`${firstNumber} ${operator} ${secondNumber} = ${result} - even`);
        } else {
            console.log(`${firstNumber} ${operator} ${secondNumber} = ${result} - odd`);
        }

    } else if (operator === "*") {
        result = firstNumber * secondNumber;

        if ((firstNumber * secondNumber) % 2 === 0) {
            console.log(`${firstNumber} ${operator} ${secondNumber} = ${result} - even`);
        } else {
            console.log(`${firstNumber} ${operator} ${secondNumber} = ${result} - odd`);
        }

    } else if (operator === "/") {
        result = firstNumber / secondNumber;

        if (secondNumber === 0) {
            console.log(`Cannot divide ${firstNumber} by zero`);
        } else {
            console.log(`${firstNumber} / ${secondNumber} = ${result.toFixed(2)}`);
        }

    } else if (operator === "%") {

        if (secondNumber === 0) {
            console.log(`Cannot divide ${firstNumber} by zero`);
        } else {
            result = firstNumber % secondNumber;
            console.log(`${firstNumber} ${operator} ${secondNumber} = ${result}`);
        }
    }
}