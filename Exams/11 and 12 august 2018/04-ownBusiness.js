function freeSpace(input) {
    let width = Number(input.shift());
    let length = Number(input.shift());
    let height = Number(input.shift());
    let freeSpace = width * length * height;
    let currSpace = 0;
    let command = input.shift();

    while (command !== "Done" || freeSpace >= currSpace) {
        let computers = Number(command);

        if (command === "Done") {
            console.log(`${freeSpace - currSpace} Cubic meters left.`);
            break;

        } else if (currSpace > freeSpace) {
            console.log(`No more free space! You need ${currSpace - freeSpace} Cubic meters more.`);
            break;
        }

        currSpace += computers;
        command = input.shift();
    }
}