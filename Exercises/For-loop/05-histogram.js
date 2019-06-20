function histogram(input) {
    let numbersCount = Number(input[0]);
    let p1 = 0;
    let p2 = 0;
    let p3 = 0;
    let p4 = 0;
    let p5 = 0;

    for (let i = 1; i <= numbersCount; i++) {
        let nextNum = Number(input[i]);

        if (nextNum < 200) {
            p1++;
        } else if (nextNum >= 200 && nextNum < 400) {
            p2++;
        } else if (nextNum >= 400 && nextNum < 600) {
            p3++;
        } else if (nextNum >= 600 && nextNum < 800) {
            p4++;
        } else {
            p5++;
        }
    }
    
    p1 = (p1 / numbersCount) * 100;
    p2 = (p2 / numbersCount) * 100;
    p3 = (p3 / numbersCount) * 100;
    p4 = (p4 / numbersCount) * 100;
    p5 = (p5 / numbersCount) * 100;

    console.log(`${p1.toFixed(2)}%`);
    console.log(`${p2.toFixed(2)}%`);
    console.log(`${p3.toFixed(2)}%`);
    console.log(`${p4.toFixed(2)}%`);
    console.log(`${p5.toFixed(2)}%`);
}