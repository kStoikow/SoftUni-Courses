function price(input) {
    let singerPrice = Number(input.shift());
    let command = input.shift();
    let totalSum = 0;
    let guests = 0;
    
    while (command !== 'The restaurant is full') {
        let groupCount = Number(command);
        if (groupCount < 5) {
            totalSum += groupCount * 100;
            guests += groupCount;
        } else {
            totalSum += groupCount * 70;
            guests += groupCount;
        }

        command = input.shift();
    }

    if (totalSum >= singerPrice) {
        console.log(`You have ${guests} guests and ${totalSum - singerPrice} leva left.`);
    } else {
        console.log(`You have ${guests} guests and ${totalSum} leva income, but no singer.`);
    }
}