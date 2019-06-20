function mountainPercent(input) {
    let groupsCount = Number(input.shift());
    let allMembers = 0;
    let musalaMembers = 0;
    let monblanMembers = 0;
    let kilimanjaroMembers = 0;
    let kTwoMembers = 0;
    let everestMembers = 0;

    for (let i = 1; i <= groupsCount; i++) {
        let CurrentGroup = Number(input.shift());
        allMembers += CurrentGroup;

        if (CurrentGroup <= 5) {
            musalaMembers += CurrentGroup;
        } else if (CurrentGroup > 5 && CurrentGroup <= 12) {
            monblanMembers += CurrentGroup;
        } else if (CurrentGroup > 12 && CurrentGroup <= 25) {
            kilimanjaroMembers += CurrentGroup;
        } else if (CurrentGroup > 25 && CurrentGroup <= 40) {
            kTwoMembers += CurrentGroup;
        } else if (CurrentGroup > 40) {
            everestMembers += CurrentGroup;
        }
    }

    let musalaPercent = (musalaMembers / allMembers) * 100;
    let monblanPercent = (monblanMembers / allMembers) * 100;
    let kilimanjaroPercent = (kilimanjaroMembers / allMembers) * 100;
    let kTwoPercent = (kTwoMembers / allMembers) * 100;
    let everestPercent = (everestMembers / allMembers) * 100;

    console.log(`${musalaPercent.toFixed(2)}%`);
    console.log(`${monblanPercent.toFixed(2)}%`);
    console.log(`${kilimanjaroPercent.toFixed(2)}%`);
    console.log(`${kTwoPercent.toFixed(2)}%`);
    console.log(`${everestPercent.toFixed(2)}%`);
}