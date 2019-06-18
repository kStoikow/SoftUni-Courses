function coins(input) {
    let changeInLeva = Number(input.shift());
    let changeInSt = Math.trunc(changeInLeva * 100);
    let coins = 0;

    while (changeInSt >= 200) {
        let twoLeva = Math.trunc(changeInSt / 200);
        changeInSt = changeInSt % 200;
        coins += twoLeva;
    }

    while (changeInSt >= 100) {
        let oneLeva = Math.trunc(changeInSt / 100);
        changeInSt = changeInSt % 100;
        coins += oneLeva;
    }

    while (changeInSt >= 50) {
        let fiftyCent = Math.trunc(changeInSt / 50);
        changeInSt = changeInSt % 50;
        coins += fiftyCent;
    }

    while (changeInSt >= 20) {
        let twentyCent = Math.trunc(changeInSt / 20);
        changeInSt = changeInSt % 20;
        coins += twentyCent;
    }

    while (changeInSt >= 10) {
        let tenCent = Math.trunc(changeInSt / 10);
        changeInSt = changeInSt % 10;
        coins += tenCent;
    }

    while (changeInSt >= 5) {
        let fiveCent = Math.trunc(changeInSt / 5);
        changeInSt = changeInSt % 5;
        coins += fiveCent;
    }

    while (changeInSt >= 2) {
        let twoCent = Math.trunc(changeInSt / 2);
        changeInSt = changeInSt % 2;
        coins += twoCent;
    }

    while (changeInSt > 0) {
        coins += changeInSt;
        changeInSt -= changeInSt;
    }

    console.log(coins);
}