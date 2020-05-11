let isOdd = (num) => {
    let remainder = num % 2;
    return remainder === 1;
}
for (let num = 1; num <= 10; num++) {
    if (isOdd(num))
        console.log(num * 2);
}

// I want a function called isOdd that will accept a number and return a boolean that tells me if that number is odd
// I want you to use that function on line 2