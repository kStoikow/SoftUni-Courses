function pyramid(input) {
    let number = Number(input[0]);
    let counter = 1;
    let toPrint = "";
    let isBigger = false;

    for (let rows = 1; rows <= number; rows++) {

        for (let cols = 1; cols <= rows; cols++) {
            if (counter > number) {
                isBigger = true;
                break;
            }

            toPrint += counter + " ";
            counter++;
        }

        console.log(toPrint);
        toPrint = "";
        if (isBigger) {
            break;
        }
    }
}