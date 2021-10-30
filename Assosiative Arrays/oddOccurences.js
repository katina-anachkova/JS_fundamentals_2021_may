//vseki element ot izrechenie, koito se sreshta odd number of times;
function solve(string) {
    let occurrences = {};
    let listOfStrings = string.split(' ');

    for (let string of listOfStrings) {
        //set to lower case
        let stringToLower = string.toLowerCase();
        // check if string exists in occurance
        if (!Object.keys(occurrences).includes(stringToLower)) {
            //if not exists -> create with count 0;
            occurrences[stringToLower] = 0;
        }
        //increase count;
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

solve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')