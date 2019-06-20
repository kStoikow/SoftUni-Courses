function graduation(input) {
    let name = input.shift();
    let counter = 1;
    let sum = 0;
    let excluded = 0;
    let isExcluded = false;

    while (counter <= 12) {
        let grade = Number(input.shift());

        if (grade < 4) {
            excluded++;
        }

        if (grade >= 4) {
            sum += grade;
            counter++;
        }

        if (excluded >= 2) {
            isExcluded = true;  
            break;
        }
    }

    if (isExcluded === false) {
        console.log(`${name} graduated. Average grade: ${(sum / 12).toFixed(2)}`);
    } else {
        console.log(`${name} has been excluded at ${counter} grade`);
    }
}