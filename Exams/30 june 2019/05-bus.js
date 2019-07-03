function solve(input) {
    let startingPassangers = Number(input.shift());
    let stopsCount = Number(input.shift());
    let passengers = startingPassangers;

    for (let i = 1; i <= stopsCount; i++) {
        let toGo = Number(input.shift());
        let toCome = Number(input.shift());
        
        if (i % 2 === 1) {
            passengers = (passengers - toGo) + toCome + 2;
        } else {
            passengers = (passengers - toGo) + toCome - 2;
        }
    }

    console.log(`The final number of passengers is : ${passengers}`);
}
