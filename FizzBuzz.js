const MAX = 100
const FIRST = 3
const SECOND = 5

let num = 1


for (num = 1; num <= MAX; num++) {
    let firstmult = num % FIRST;
    let secmult = num % SECOND;

    if (firstmult === 0 && secmult === 0) {
        console.log("FizzBuzz");
    }
    else if (firstmult === 0) {
        console.log("Fizz");
    }
    else if (secmult === 0) {
        console.log("Buzz");
    }
    else {
        console.log(num);
    }
}



/**
if (num) [] === /3 + /5
return "fizzbuzz";

if (num) /3=== ???
return "fizz";

if (num) /5 === ???
return "buzz";
*/
