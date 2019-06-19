function possibleChanges(input) {
    let oneLeva = Number(input[0]);
    let twoLeva = Number(input[1]);
    let fiveLeva = Number(input[2]);
    let sumLeva = Number(input[3]);

    for (let i = 0; i <= oneLeva; i++) {
        for (let j = 0; j <= twoLeva; j++) {
            for (let k = 0; k <= fiveLeva; k++) {
                let currSum = i + (j * 2) + (k * 5);

                if (currSum === sumLeva) {
                    console.log(`${i} * 1 lv. + ${j} * 2 lv. + ${k} * 5 lv. = ${sumLeva} lv.`);
                }
            }
        }
    }
}