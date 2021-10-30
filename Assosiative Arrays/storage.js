function solve(arr) {
    let map = new Map();

    for (let line of arr){
        let [product, qty] = line.split(' ');
        qty = Number(qty)

        if(!map.has(product)){
            map.set(product, +qty);
        }else{
            let currentQty = map.get(product);
            let newQty = currentQty += qty;
            map.set(product, newQty);
        }
    }

    for(let entry of map){
        console.log(`${entry[0]} -> ${entry[1]}`)
    }
}