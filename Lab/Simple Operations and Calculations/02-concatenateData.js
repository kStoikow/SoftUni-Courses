function user(input) {
    let name = input.shift();
    let lastName = input.shift();
    let age = Number(input.shift());
    let town = input.shift();
    let userdata = `You are ${name} ${lastName}, a ${age}-years old person from ${town}. `;
    console.log(userdata);
}
