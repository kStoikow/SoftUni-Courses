function roomTypes(input) {
    let floorsCount = Number(input[0]);
    let roomsCount = Number(input[1]);

    for (let currentFloor = floorsCount; currentFloor > 0; currentFloor--) {
        let toPrint = "";

        for (let currentRoom = 0; currentRoom < roomsCount; currentRoom++) {

            if (currentFloor === floorsCount) {
                toPrint += `L${currentFloor}${currentRoom} `;
                continue;
            }

            if (currentFloor % 2 === 0) {
                toPrint += `O${currentFloor}${currentRoom} `;
            } else {
                toPrint += `A${currentFloor}${currentRoom} `;
            }
        }

        console.log(toPrint);
    }
}