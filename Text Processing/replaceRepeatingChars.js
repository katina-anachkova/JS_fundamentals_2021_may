function solve(string) {
    let currentChar = '';
    let newString = '';
    for (char of string) {
        if (char !== currentChar) {
            newString += char;
            currentChar = char;
        } else {
            currentChar = char;
        }
    }
    console.log(newString)
}
