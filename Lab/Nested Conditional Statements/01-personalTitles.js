function titles(input) {
    let age = Number(input.shift());
    let sex = input.shift();

    if (sex === "m") {
        if (age < 16) {
            console.log(`Master`);
        } else {
            console.log(`Mr.`);
        }
    } else {
        if (age < 16) {
            console.log(`Miss`);
        } else {
            console.log("Ms.");
        }
    }

}