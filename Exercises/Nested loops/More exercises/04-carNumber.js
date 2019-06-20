function specialNumbers(input) {
    let first = Number(input[0]);
    let last = Number(input[1]);
    let toPrint = "";

    for (let i = first; i <= last; i++) {
        for (let j = first; j <= last; j++) {
            for (let k = first; k <= last; k++) {
                for (let l = first; l <= last; l++) {
                    if (((i % 2 === 0 && l % 2 !== 0) || (i % 2 !== 0 && l % 2 === 0)) && i > l && ((j + k) % 2 === 0)) {
                        toPrint += i + "" + j + "" + k + "" + l + " ";
                    }
                }
            }
        }
    }
console.log(toPrint);
}