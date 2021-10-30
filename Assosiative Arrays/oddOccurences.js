function solve(string) {
    let occurrences = {};
    let listOfStrings = string.split(' ');

    for (let string of listOfStrings) {
        let stringToLower = string.toLowerCase();
        if (!Object.keys(occurrences).includes(stringToLower)) {
            occurrences[stringToLower] = 0;
        }
        occurrences[stringToLower] += 1;
    }
    let resultString = '';
    for (let [key, value] of Object.entries(occurrences)) {
        if (value % 2 !== 0) {
            resultString += `${key} `
        }
    }
    console.log(resultString)
}
