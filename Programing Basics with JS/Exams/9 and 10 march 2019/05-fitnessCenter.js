function workouts(input) {
    let guests = Number(input.shift());
    let back = 0;
    let chest = 0;
    let legs = 0;
    let abs = 0;
    let shake = 0;
    let proteinBar = 0;
    let workoutsPercent = 0;
    let supplementsPercent = 0;

    for (let i = 0; i < guests; i++) {
        let command = input.shift();

        if (command === 'Back') {
            back++;
        } else if (command === 'Chest') {
            chest++;
        } else if (command === 'Legs') {
            legs++;
        } else if (command === 'Abs') {
            abs++;
        } else if (command === 'Protein shake') {
            shake++;
        } else {
            proteinBar++;
        }
    }

    workoutsPercent = ((back + chest + legs + abs) / guests) * 100;
    supplementsPercent = ((shake + proteinBar) / guests) * 100;
    console.log(`${back} - back`);
    console.log(`${chest} - chest`);
    console.log(`${legs} - legs`);
    console.log(`${abs} - abs`);
    console.log(`${shake} - protein shake`);
    console.log(`${proteinBar} - protein bar`);
    console.log(`${workoutsPercent.toFixed(2)}% - work out`);
    console.log(`${supplementsPercent.toFixed(2)}% - protein`);
}