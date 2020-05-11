const readline = require('readline'); // Importing the "readline" library and assigning it to a local variable

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});  // Wire up the input and output of the readline library to the terminal

// let x = 1; // variable
// let y = {
//     z: 1 // property
// };

// let print = (msg) => { // parameter
//     console.log(msg);
// }

// print(x);

let config = {
    winningMessage: "You reached the farm! The land rejoices in your great victory!\r\n",
    losingMessage: "You have died!  Horribly! Nobody celebrates. Everyone is sad.\r\n",
    field: {
        message: "You are standing in a field. There is a farm to the north. There is a sea to the west.\r\n",
        locations: {
            N: 'farm',
            W: 'beach'
        },
        items: [
            'Sword',
            'Bucket'
        ]
    },
    farm: {
        message: "You are standing at a farm. There is a field to the south.\r\n",
        locations: {
            S: 'field',
            SW: 'beach'
        },

    },
    beach: {
        message: "You are at the beach. Your feet are wet. There is a field to the east.\r\n",
        locations: {
            N: 'farm',
            E: 'field',
            SW: 'beach'
        }
    },
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

// get sword


let handleUserInput = (input) => {
    let command = input.toUpperCase();
    let verb = command.split(" ")[0];
    let noun = command.split(" ")[1];
    switch (verb) {
        case "N":
        case "W":
        case "S":
        case "E":
            currentLocation = config[currentLocation].locations[command];
            if (!currentLocation) {
                die();
            }
            describeLocation();
            break;
        case "GET":
            let items = config[currentLocation].items || [];
            let isFound = items.map(x => x.toUpperCase()).indexOf(noun) > -1; // TODO: Explain map function
            if (noun === "" || noun === undefined || !isFound) { // TODO: Explain &&, || and truthy/falsy
                console.log("IDIOT");
            }
            else {
                console.log("Yay you picked up a " + noun);
            }
            describeLocation();

            break;
        default:
            let rnd = Math.floor(Math.random() * insults.length);
            console.log(insults[rnd]);
            process.exit();
    }
}

let die = () => {
    console.log(config.losingMessage);
    process.exit();
}

let describeLocation = () => {
    let location = config[currentLocation];
    let items = location.items;
    let message = location.message;
    let itemsFound = items && items.length > 0; // true if there are items, otherwise false

    if (itemsFound === true) {
        message = message + ' The following items can be found here: ' + items.join(', ') + '\n';
    }

    rl.question(message, handleUserInput);
}

let currentLocation = "farm";
describeLocation();
