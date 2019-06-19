function magicalNumber(input) {
    let firstOfInterval = Number(input[0]);
    let lastOfInterval = Number(input[1]);
    let magicalNum = Number(input[2]);
    let counter = 0;
    let isMagical = false;

    for (let i = firstOfInterval; i <= lastOfInterval; i++) {
        for (let j = firstOfInterval; j <= lastOfInterval; j++) {
            counter++;

            if (i + j === magicalNum) {
                isMagical = true;
                console.log(`Combination N:${counter} (${i} + ${j} = ${magicalNum})`);
                break;
            }
        }

        if (isMagical) {
            break;
        }
    }

    if (!isMagical) {
        console.log(`${counter} combinations - neither equals ${magicalNum}`);
    }
}