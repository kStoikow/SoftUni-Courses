function graduation(input) {
    let name = input.shift();
    let counter = 1;
    let averageGrade = 0;

    while (counter <= 12) {
        let grade = Number(input.shift());

        if (grade >= 4) {
            averageGrade += grade;
            counter++;
        }
    }

    if (averageGrade / 12 >= 4) {
        console.log(`${name} graduated. Average grade: ${(averageGrade / 12).toFixed(2)}`);
    }
}