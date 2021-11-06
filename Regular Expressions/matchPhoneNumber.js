function solve(numbers) {
    let pattern = /\+359([- ])2{1}\1(\d{3})\1(\d{4})\b/g;
    let validPhones = [];
    let match = pattern.exec(numbers)

    while (match !== null) {
        validPhones.push(match[0]);
        match = pattern.exec(numbers)
    }
    console.log(validPhones.join(', '));
}