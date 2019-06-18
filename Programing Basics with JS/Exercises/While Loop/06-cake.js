function cakePieces(input) {
    let cakeWidth = Number(input.shift());
    let cakeLength = Number(input.shift());
    let wholeCake = cakeLength * cakeWidth;

    while (wholeCake >= 0) {
        let command = input.shift();

        if (command !== "STOP") {
            let piece = Number(command);

            if (piece > wholeCake) {
                console.log(`No more cake left! You need ${piece - wholeCake} pieces more.`);
                break;
            }

            wholeCake -= piece;

        } else {
            console.log(`${wholeCake} pieces are left.`);
            break;
        }
    }
}