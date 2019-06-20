function generate(input) {
    let firstSymbol = Number(input.shift());
    let secondSymbol = Number(input.shift());
    let maxPasswords = Number(input.shift());
    let toPrint = "";
    let counter = 0;
    let i = 35;
    let j = 64;

    for (let k = 1; k <= firstSymbol; k++) {
        for (let l = 1; l <= secondSymbol; l++) {
            if (counter >= maxPasswords) {
                break;
            }

            if (i > 55) {
                i = 35;
            }

            if (j > 96) {
                j = 64;
            }

            let p = String.fromCharCode(i);
            let w = String.fromCharCode(j);

            toPrint += `${p}${w}${k}${l}${w}${p}|`;
            counter++;
            i++;
            j++;
        }
    }
    console.log(toPrint);
}