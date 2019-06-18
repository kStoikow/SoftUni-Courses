function hotelPrices(input) {
    let month = input.shift();
    let nightsToStay = Number(input.shift());
    let studioPrice = 0;
    let apartmentPrice = 0;

    if (month === "May" || month === "October") {
        studioPrice = 50;

        if (nightsToStay > 7 && nightsToStay <= 14) {
            studioPrice *= 0.95;
        } else if (nightsToStay > 14) {
            studioPrice *= 0.7;
        }

        apartmentPrice = 65;

        if (nightsToStay > 14) {
            apartmentPrice *= 0.9;
        }


    } else if (month === "June" || month === "September") {
        studioPrice = 75.20;

        if (nightsToStay > 14) {
            studioPrice *= 0.8;
        }

        apartmentPrice = 68.70;

        if (nightsToStay > 14) {
            apartmentPrice *= 0.9;
        }

    } else {
        studioPrice = 76;
        apartmentPrice = 77;

        if (nightsToStay > 14) {
            apartmentPrice *= 0.9;
        }
    }

    console.log(`Apartment: ${(apartmentPrice * nightsToStay).toFixed(2)} lv.`);
    console.log(`Studio: ${(studioPrice * nightsToStay).toFixed(2)} lv.`);
}