function movieIncome(input) {
    let movieName = input.shift();
    let hallCategory = input.shift();
    let ticketsQuantity = Number(input.shift());
    let ticketPrice = 0;

    if (movieName === 'A Star Is Born') {
        if (hallCategory === 'normal') {
            ticketPrice = 7.5;
        } else if (hallCategory === 'luxury') {
            ticketPrice = 10.5;
        } else {
            ticketPrice = 13.5;
        }

    } else if (movieName === 'Bohemian Rhapsody') {
        if (hallCategory === 'normal') {
            ticketPrice = 7.35;
        } else if (hallCategory === 'luxury') {
            ticketPrice = 9.45;
        } else {
            ticketPrice = 12.75;
        }

    } else if (movieName === 'Green Book') {
        if (hallCategory === 'normal') {
            ticketPrice = 8.15;
        } else if (hallCategory === 'luxury') {
            ticketPrice = 10.25;
        } else {
            ticketPrice = 13.25;
        }

    } else {
        if (hallCategory === 'normal') {
            ticketPrice = 8.75;
        } else if (hallCategory === 'luxury') {
            ticketPrice = 11.55;
        } else {
            ticketPrice = 13.95;
        }
    }
    let totalSum = (ticketPrice * ticketsQuantity).toFixed(2);
    console.log(`${movieName} -> ${totalSum} lv.`);
}