function tickets(input) {
    let command = input.shift();
    let studentsTicketsPercent = 0;
    let standardTicketsPercent = 0;
    let kidsTicketsPercent = 0;
    let totalTicketsBought = 0;

    while (command !== 'Finish') {
        let movieName = (command);
        let freeSpace = Number(input.shift());
        let currentSpace = 0;
        command = input.shift();

        while (currentSpace < freeSpace && command !== 'End') {
            let ticketType = (command);

            if (ticketType === 'student') {
                studentsTicketsPercent++;
                totalTicketsBought++;
                currentSpace++;

            } else if (ticketType === 'standard') {
                standardTicketsPercent++;
                totalTicketsBought++;
                currentSpace++;

            } else {
                kidsTicketsPercent++;
                totalTicketsBought++;
                currentSpace++;
            }

            if (currentSpace === freeSpace) {
                break;
            }

            command = input.shift();
        }

        let fullRoomPercent = (currentSpace / freeSpace) * 100;
        console.log(`${movieName} - ${(fullRoomPercent).toFixed(2)}% full.`);

        command = input.shift();
    }

    if (command === 'Finish') {
        console.log(`Total tickets: ${totalTicketsBought}`);
        console.log(`${((studentsTicketsPercent / totalTicketsBought) * 100).toFixed(2)}% student tickets.`);
        console.log(`${((standardTicketsPercent / totalTicketsBought) * 100).toFixed(2)}% standard tickets.`);
        console.log(`${((kidsTicketsPercent / totalTicketsBought) * 100).toFixed(2)}% kids tickets.`);
    }
}