function outfit(input) {
    let temperature = Number(input.shift());
    let partOfTheDay = input.shift();
    let outfit = "";
    let shoes = "";

    if (partOfTheDay === "Morning") {

        if (temperature >= 10 && temperature <= 18) {
            outfit = "Sweatshirt";
            shoes = "Sneakers";

        } else if (temperature > 18 && temperature <= 24) {
            outfit = "Shirt";
            shoes = "Moccasins";

        } else {
            outfit = "T-Shirt";
            shoes = "Sandals";
        }

    } else if (partOfTheDay === "Afternoon") {

        if (temperature >= 10 && temperature <= 18) {
            outfit = "Shirt";
            shoes = "Moccasins";

        } else if (temperature > 18 && temperature <= 24) {
            outfit = "T-Shirt";
            shoes = "Sandals";

        } else {
            outfit = "Swim Suit";
            shoes = "Barefoot";
        }

    } else {
        outfit = "Shirt";
        shoes = "Moccasins";
    }

    console.log(`It's ${temperature} degrees, get your ${outfit} and ${shoes}.`);
}