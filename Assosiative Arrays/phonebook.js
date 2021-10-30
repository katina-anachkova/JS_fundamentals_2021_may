function solve(arr) {
    const person = {}

    let result = [];

    for (let line of arr) {
        let [name, contact] = line.split(' ');
        person[name] = contact;
        result.push(person)
    }
    let data = Object.entries(person)
    for (let line of data) {
        console.log(`${line[0]} -> ${line[1]}`)
    }
}
