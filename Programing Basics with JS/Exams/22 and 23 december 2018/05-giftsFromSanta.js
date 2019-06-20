function addresses(input) {
    let firstAddress = Number(input.shift());
    let lastAddress = Number(input.shift());
    let noGiftAddress = Number(input.shift());
    let toPrint = "";

    for (let i = lastAddress; i >= firstAddress; i--) {
        if (i % 2 === 0 && i % 3 === 0 && i !== noGiftAddress) {
            toPrint += i + " ";
        }

        if (i % 2 === 0 && i % 3 === 0 && i === noGiftAddress) {
            break;
        }
    }
    console.log(toPrint);
}