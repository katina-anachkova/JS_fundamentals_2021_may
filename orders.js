function orders(product, qty) {
    let coffeePrice = 1.50;
    let waterPrice = 1.00;
    let cokePrice = 1.40;
    let snacksPrice = 2.00;
    let totalPrice = 0;

    switch (product) {
        case "coffee":
            totalPrice += qty * coffeePrice;
            break;
        case "water":
            totalPrice += qty * waterPrice;
            break;
        case "coke":
            totalPrice += cokePrice * qty;
            break;
        case "snacks":
            totalPrice += snacksPrice * qty;
            break;
    }
    console.log(totalPrice.toFixed(2));
}
