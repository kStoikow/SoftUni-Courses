function winner(input) {
    let name = input.shift();
    let startingPoints = 301;
    let command = input.shift();
    let shots = 0;
    let miss = 0;

    while (command !== 'Retire') {
        let sector = (command);
        let score = Number(input.shift());

        if (sector === 'Double') {
            score *= 2;
        } else if (sector === 'Triple') {
            score *= 3;
        }

        if(score <= startingPoints){
            startingPoints -= score;
            shots++;
        }else{
            miss++;
        }

        if(startingPoints === 0){
            console.log(`${name} won the leg with ${shots} shots.`); 
            break;
        }

        command = input.shift();
    }

    if(command === 'Retire'){
        console.log(`${name} retired after ${miss} unsuccessful shots.`);
    }
}