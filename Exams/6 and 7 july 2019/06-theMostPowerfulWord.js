function wordPower(input) {
    let command = input.shift();
    let mostPowerfulWord = '';
    let wordPower = 0;

    while (command != 'End of words') {
        let compare = command.toLowerCase();
        let currentPower = 0;
        let currentTotalPower = 0;

        if (compare.startsWith('a') || compare.startsWith('e') || compare.startsWith('i') || compare.startsWith('o') || compare.startsWith('u') || compare.startsWith('y')) {
            for (let i = 0; i < command.length; i++) {
                currentPower += command.charCodeAt(i);
                currentTotalPower = currentPower * command.length;
            }

        } else {
            for (let i = 0; i < command.length; i++) {
                currentPower += command.charCodeAt(i);
                currentTotalPower = Math.floor(currentPower / command.length);
            }
        }

        if (currentTotalPower > wordPower) {
            wordPower = currentTotalPower;
            mostPowerfulWord = command;
        }

        command = input.shift();
    }

    console.log(`The most powerful word is ${mostPowerfulWord} - ${wordPower}`);
}