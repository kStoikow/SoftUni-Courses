function fillTheRoom(input) {
    let men = Number(input[0]);
    let women = Number(input[1]);
    let maximumTables = Number(input[2]);
    let takenTables = 0;
    let toPrint = "";

    for (let i = 1; i <= men; i++) {
        for (let j = 1; j <= women; j++) {
            takenTables++;

            if (takenTables > maximumTables) {
                break;
            }

            toPrint += `(${i} <-> ${j}) `;
        }
    }
    console.log(toPrint);
}