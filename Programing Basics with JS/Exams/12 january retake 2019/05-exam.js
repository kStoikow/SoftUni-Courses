function studentsGrade(input) {
    let studentsCount = Number(input.shift());
    let weak = 0;
    let average = 0;
    let good = 0;
    let excelent = 0;
    let averageGrade = 0;

    for (let i = 1; i <= studentsCount; i++) {
        let currentStudentGrade = Number(input.shift());
        averageGrade += currentStudentGrade;

        if (currentStudentGrade < 3) {
            weak++;
        } else if (currentStudentGrade > 2.99 && currentStudentGrade < 4) {
            average++;
        } else if (currentStudentGrade > 3.99 && currentStudentGrade < 5) {
            good++;
        } else {
            excelent++;
        }
    }

    let weakPercent = (weak / studentsCount) * 100;
    let averagePercent = (average / studentsCount) * 100;
    let goodPercent = (good / studentsCount) * 100;
    let excelentPercent = (excelent / studentsCount) * 100;
    let totalAverage = averageGrade / studentsCount;

    console.log(`Top students: ${excelentPercent.toFixed(2)}%`);
    console.log(`Between 4.00 and 4.99: ${goodPercent.toFixed(2)}%`);
    console.log(`Between 3.00 and 3.99: ${averagePercent.toFixed(2)}%`);
    console.log(`Fail: ${weakPercent.toFixed(2)}%`);
    console.log(`Average: ${totalAverage.toFixed(2)}`);
}