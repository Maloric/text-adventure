const readline = require('readline'); // Importing the "readline" library and assigning it to a local variable

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});  // Wire up the input and output of the readline library to the terminal

let config = {
    fieldMessage: "You are standing in a field. There is a farm to the north. There is a sea to the west.\r\n",
    winningMessage: "You reached the farm! The land rejoices in your great victory!\r\n",
    losingMessage: "You have died!  Horribly! Nobody celebrates. Everyone is sad.\r\n",
    farmMessage: "You are standing at a farm. There is a field to the south.\r\n",
    beachMessage: "You are at the beach. Your feet are wet. There is a field to the east.\r\n"
};

let insults = [
    "You have entered an invalid input you twat.",
    "You have entered incoherent jibberish, idiot.",
    "Who taught you to type?",
    "Can't you do anything right?",
    "You realise that this is a text adventure, right?",
    "lksdjfh;lsdjhfsdk. There! That's how it feels! Not nice, is it?",
    "Do you even have working fingers?",
    "Were you even trying?",
];

let farmCallback = function (input) {
    let direction = input.toUpperCase();
    switch (direction) {
        case "S":
            rl.question(config.fieldMessage, fieldCallback);
    }
}

let beachCallback = function (input) {
    let direction = input.toUpperCase();
    switch (direction) {
        case "E":
            rl.question(config.fieldMessage, fieldCallback);
    }
}

let fieldCallback = function (input) {
    let direction = input.toUpperCase();
    switch (direction) {
        case "N":
            // console.log(config.winningMessage);
            rl.question(config.farmMessage, farmCallback);
            break;
        case "W":
            rl.question(config.beachMessage, beachCallback);
            break;
        case "S":
        case "E":
            console.log(config.losingMessage);
            break;
        default:
            let rnd = Math.floor(Math.random() * insults.length);
            console.log(insults[rnd]);
    }

    // process.exit();
}

rl.question(config.fieldMessage, fieldCallback);



