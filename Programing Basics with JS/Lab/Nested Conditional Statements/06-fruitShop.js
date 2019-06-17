function prices(input) {
    let product = input.shift();
    let day = input.shift();
    let quantity = Number(input.shift());
    let price = 0;

    if (day === "Monday" || day === "Tuesday" || day === "Wednesday" || day === "Thursday" || day === "Friday") {

        if (product === "banana") {
            price = quantity * 2.50;
        } else if (product === "apple") {
            price = quantity * 1.20;
        } else if (product === "orange") {
            price = quantity * 0.85;
        } else if (product === "grapefruit") {
            price = quantity * 1.45;
        } else if (product === "kiwi") {
            price = quantity * 2.70;
        } else if (product === "pineapple") {
            price = quantity * 5.50;
        } else if (product === "grapes") {
            price = quantity * 3.85;
        } else {
            console.log("error");
        }

        if (price != 0) {
            console.log(price.toFixed(2));
        }

    } else if (day === "Saturday" || day === "Sunday") {
        if (product === "banana") {
            price = quantity * 2.70;
        } else if (product === "apple") {
            price = quantity * 1.25;
        } else if (product === "orange") {
            price = quantity * 0.90;
        } else if (product === "grapefruit") {
            price = quantity * 1.60;
        } else if (product === "kiwi") {
            price = quantity * 3.00;
        } else if (product === "pineapple") {
            price = quantity * 5.60;
        } else if (product === "grapes") {
            price = quantity * 4.20;
        } else {
            console.log("error");
        }

        if (price != 0) {
            console.log(price.toFixed(2));
        }

    } else {
        console.log("error");
    }

}