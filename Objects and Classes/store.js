function solve(current, ordered) {
    let stock = {};

    for (let i = 0; i < current.length; i++) {
        let product = current[i];
        let qty = Number(current[i + 1]);
        stock[product] = qty;
        i++
    }

    for (let i = 0; i < ordered.length; i++) {
        let product = ordered[i];
        let qty = Number(ordered[i + 1]);
        i++
        if (Object.keys(stock).includes(product)) {
            stock[product] += qty;
        } else {
            stock[product] = qty;

        }
    }

    for (let key of Object.keys(stock)) {
        console.log(`${key} -> ${stock[key]}`)
    }
}
