function solve(input) {
    let firstLetter = input.shift();
    let letterFromFirstToZ = input.shift();
    let letterToPass = input.shift();

    let counter = 0;
    let toPrint = "";

    for (let i = firstLetter.charCodeAt(0); i <= letterFromFirstToZ.charCodeAt(0); i++) {
        for (let j = firstLetter.charCodeAt(0); j <= letterFromFirstToZ.charCodeAt(0); j++) {
            for (let k = firstLetter.charCodeAt(0); k <= letterFromFirstToZ.charCodeAt(0); k++) {
                if (i !== letterToPass.charCodeAt(0) && j !== letterToPass.charCodeAt(0) && k !== letterToPass.charCodeAt(0)) {
                    counter++;
                    toPrint += String.fromCharCode(i) + String.fromCharCode(j) + String.fromCharCode(k) + " ";
                }
            }
        }
    }
    console.log(`${toPrint}${counter}`);
}