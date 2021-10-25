function solve(arr) {
     arr.sort((a, b) => a.localeCompare(b))

    let products = new Map();
    for (let line of arr) {
        let data = line.split(' : ');
        let letter = data[0][0];
        if (!products.has(letter)) {
            products.set(letter, data);
        } else {
            products.set(letter, products.get(letter) + ',' + data);
        }
    }
    let myProducts = new Map([...products.entries()]);
    for (let [letter, items] of myProducts) {
        console.log(letter);
        if (items.constructor !== Array) {
            items = items.split(',');
        }
        for (let i = 0; i < items.length; i += 2) {
            console.log(`  ${items[i]}: ${items[i + 1]}`)
        }
    }
}