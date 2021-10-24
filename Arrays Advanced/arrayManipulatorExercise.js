//judge 90/100
function solve(numbers, commands) {
    for (let command of commands) {
        let tokens = command.split(' ');
        if (tokens[0] === 'add') {
            let idx = Number(tokens[1]);
            let element = Number(tokens[2]);
            numbers.splice(idx, 0, element);
        } else if (tokens[0] === 'addMany') {
            let idx = Number(tokens[1]);
            tokens.splice(0, 2) 
            let numbersToAdd = tokens.map(Number);
            numbers.splice(idx, 0, ...numbersToAdd);
        } else if (tokens[0] === 'contains') {
            let result = numbers.indexOf(Number(tokens[1]));
            console.log(result);
        } else if (tokens[0] === 'remove') {
            let idx = Number(tokens[1]);
            numbers.splice(idx, 1);
        } else if (tokens[0] === 'shift') {
            let positions = tokens[1];
            for (let i = 0; i < positions; i++) {
                numbers.push(numbers.shift());
            }
        } else if (tokens[0] === 'sumPairs') {
            let resultArray = [];
            if (numbers % 2 !== 0) {
                numbers.push(0);
            }
            for (let i = 0; i < numbers.length - 1; i += 2) {
                let sum = numbers[i] + numbers[i + 1];
                resultArray.push(sum);
            }
            numbers = resultArray;
        } else if (tokens[0] === 'print') {
            console.log(`[ ${numbers.join(', ')} ]`);
            return;
        }
    }
}