function library(input) {
    let lookFor = input.shift();
    let quantityOfBooks = Number(input.shift());
    let command = input.shift();
    let searches = 0;

    while (searches < quantityOfBooks) {
        if (command !== lookFor) {
            searches++;
            command = input.shift();
        }

        if (command == lookFor || searches == quantityOfBooks) {
            break;
        }
    }

    if (command !== lookFor) {
        console.log(`The book you search is not here!`);
        console.log(`You checked ${searches} books.`);
    } else {
        console.log(`You checked ${searches} books and found it.`);
    }
}