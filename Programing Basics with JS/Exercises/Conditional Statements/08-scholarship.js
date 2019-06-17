function scholarship(input) {
    let income = Number(input.shift());
    let grade = Number(input.shift());
    let minimumIncomePossible = Number(input.shift());

    let socialHelp = minimumIncomePossible * 0.35;
    let helpForExcellent = grade * 25;

    if (grade >= 5.5 && helpForExcellent >= socialHelp) {
        console.log(`You get a scholarship for excellent results ${Math.floor(helpForExcellent)} BGN`);
    } else if (grade >= 5.5 && income >= minimumIncomePossible) {
        console.log(`You get a scholarship for excellent results ${Math.floor(helpForExcellent)} BGN`);

    } else if (grade > 4.5 && helpForExcellent < socialHelp && income < minimumIncomePossible) {
        console.log(`You get a Social scholarship ${Math.floor(socialHelp)} BGN`);
    } else if (grade > 4.5 && income < minimumIncomePossible) {
        console.log(`You get a Social scholarship ${Math.floor(socialHelp)} BGN`);
    } else if (grade < 5.5 && income > minimumIncomePossible) {
        console.log(`You cannot get a scholarship!`);
    } else if (grade <= 4.5) {
        console.log(`You cannot get a scholarship!`);
    }

}