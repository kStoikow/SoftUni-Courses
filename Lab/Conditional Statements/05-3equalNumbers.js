function equals(input) {
    let num = Number(input.shift());
    let num2 = Number(input.shift());
    let num3 = Number(input.shift());

    if (num == num2 && num2 == num3) {
        console.log("yes");
    } else {
        console.log("no")
    }

}