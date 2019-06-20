function moving(input) {
    let width = Number(input.shift());
    let length = Number(input.shift());
    let height = Number(input.shift());
    let freeSpace = width * length * height;
    let command = input.shift();
    let totalSpace = 0;

    while (command !== "Done" || totalSpace < freeSpace) {
        boxes = Number(command);
        totalSpace += boxes;
        command = input.shift();

        if (command == "Done") {
            console.log(`${freeSpace - totalSpace} Cubic meters left.`);
            break;
        }

        if (totalSpace > freeSpace) {
            console.log(`No more free space! You need ${totalSpace - freeSpace} Cubic meters more.`);
            break;
        }
    }
}