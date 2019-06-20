function recepie(input) {
    let batch = Number(input.shift());
    let flour = 0;
    let eggs = 0;
    let sugar = 0;
    let canBake = 0;

    for (let i = 1; i <= batch; i++) {
        let nextProduct = input.shift();

        while (canBake <= 0 || flour <= 0 || eggs <= 0 || sugar <= 0) {

            if (nextProduct === "flour") {
                flour++;
            } else if (nextProduct === "eggs") {
                eggs++;
            } else if (nextProduct === "sugar") {
                sugar++;
            }

            if (nextProduct === "Bake!" && flour > 0 && sugar > 0 && eggs > 0) {
                canBake++;
            } else if (nextProduct === "Bake!" && (flour <= 0 || sugar <= 0 || eggs <= 0)) {
                console.log(`The batter should contain flour, eggs and sugar!`);
            }

            if (canBake > 0) {
                console.log(`Baking batch number ${i}...`);
                canBake = 0;
                flour = 0;
                eggs = 0;
                sugar = 0;
                break;
            }

            nextProduct = input.shift();
        }
    }
}
