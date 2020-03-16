const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let config = {
    startingMessage: "You are standing in a field.  There is a farm to the north.\r\n",
    winningMessage: "You reached the farm!  The land rejoices in your great victory!",
    losingMessage: "You have died!  Horribly!  Nobody celebrates.  Everyone is sad."
};

let insults = [
    "You have entered an invalid input you twat.",
    "You have entered incoherent jibberish, idiot.",
    "Who taught you to type?",
    "Can't you do anything right?",
    "You realise that this is a text adventure, right?",
    "lksdjfh;lsdjhfsdk.  There!  That's how it feels!  Not nice, is it?",
    "Do you even have working fingers?",
    "Were you even trying?",
];


rl.question(config.startingMessage, function (input) {
    let direction = input.toUpperCase()
    switch (direction) {
        case "N":
            console.log(config.winningMessage);
            break;
        case "S":
        case "W":
        case "E":
            console.log(config.losingMessage);
            break;
        default:
            let rnd = Math.floor(Math.random() * insults.length);
            console.log(insults[rnd]);
    }

    process.exit();
});


