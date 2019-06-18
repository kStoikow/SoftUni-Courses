function checkup(input) {
    let browsersCount = Number(input.shift());
    let salary = Number(input.shift());

    for (let i = 0; i <= browsersCount; i++) {
        let site = input.shift(i);
        
        if (site === "Facebook") {
            salary -= 150;
        } else if (site === "Instagram") {
            salary -= 100;
        } else if (site === "Reddit") {
            salary -= 50;
        }

        if (salary <= 0) {
            console.log(`You have lost your salary.`);
            break;
        }
    }

    if (salary > 0) {
        console.log(`${salary}`);
    }
}