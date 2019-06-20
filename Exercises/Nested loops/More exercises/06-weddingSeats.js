function reserveSeats(input) {
    let lastSector = input.shift();
    let firstSectorRows = Number(input.shift());
    let oddSeats = Number(input.shift());
    let lastSeat = "a".charCodeAt(0) + oddSeats;
    let sectorCounter = 0;
    let seats = 0;

    for (let i = "A".charCodeAt(0); i <= lastSector.charCodeAt(0); i++) {
        for (let j = 1; j <= firstSectorRows + sectorCounter; j++) {

            if (j % 2 == 0) {
                lastSeat += 2;
            }

            for (let k = "a".charCodeAt(0); k < lastSeat; k++) {
                let toPrint = "";
                seats++;

                let firstSeat = String.fromCharCode(i);
                let lastSeat = String.fromCharCode(k);
                toPrint = `${firstSeat}${j}${lastSeat}`;
                console.log(toPrint);
            }

            lastSeat = "a".charCodeAt(0) + oddSeats;
        }

        sectorCounter++;
    }
    console.log(seats);
}