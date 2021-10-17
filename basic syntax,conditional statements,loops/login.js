function log(input) {
    let username = input.shift();
    let password = username.split('').reverse().join('')
    let counter = 0;
    let wrongEntries = true

    while (wrongEntries) {
        let enteredPassword = input.shift();

        if (enteredPassword === password) {
            console.log(`User ${username} logged in.`);
            break;

        } else {
            counter++;
            if (counter === 4) {
                console.log(`User ${username} blocked!`)
                wrongEntries == false;
                break;
            }
            console.log(`Incorrect password. Try again.`);
        }
    }
}

// log(['Acer', 'login', 'go', 'let me in', 'recA'])
log(['sunny',
    'rainy',
    'cloudy',
    'sunny',
    'not sunny'])