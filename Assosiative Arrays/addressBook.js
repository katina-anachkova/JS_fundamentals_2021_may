function solve(arr) {
    let result = [];
    let data = {};

    for (let line of arr) {
        let [name, address] = line.split(':');
        data[name] = address;
        result.push(data)
    }
    let peopleData = Object.entries(data).sort()
    for (let line of peopleData) {
        console.log(`${line[0]} -> ${line[1]}`)
    }
}
