function divide(input) {
    let numbersCount = Number(input[0]);
    let p1 = 0;
    let p2 = 0;
    let p3 = 0;

    for (let i = 1; i <= numbersCount; i++) {
        let nextNum = Number(input[i]);

        if (nextNum % 2 === 0) {
            p1++;
        }

        if (nextNum % 3 === 0) {
            p2++;
        }

        if (nextNum % 4 === 0) {
            p3++;
        }
    }

    p1 = (p1 / numbersCount) * 100;
    p2 = (p2 / numbersCount) * 100;
    p3 = (p3 / numbersCount) * 100;

    console.log(`${p1.toFixed(2)}%`);
    console.log(`${p2.toFixed(2)}%`);
    console.log(`${p3.toFixed(2)}%`);
}