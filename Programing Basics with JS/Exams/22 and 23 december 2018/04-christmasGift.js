function gifts(input) {
    let command = input.shift();
    let kids = 0;
    let adults = 0;
    let toys = 0;
    let sweaters = 0;

    while (command !== "Christmas") {
        let age = Number(command);

        if (age <= 16) {
            kids++;
            toys++;
        } else {
            adults++;
            sweaters++;
        }

        command = input.shift();
    }

    let toysPrice = toys * 5;
    let sweatersPrice = sweaters * 15;
    console.log(`Number of adults: ${adults}`);
    console.log(`Number of kids: ${kids}`);
    console.log(`Money for toys: ${toysPrice}`);
    console.log(`Money for sweaters: ${sweatersPrice}`);
}