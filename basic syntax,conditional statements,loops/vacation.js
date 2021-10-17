function vac(n, type, day) {

    let price = 0;

    switch (type) {
        case "Students":
            if (day === "Friday") {
                price = 8.45
            } else if (day === "Saturday") {
                price = 9.80
            } else if (day === "Sunday") {
                price = 10.46
            }
            break;
        case "Business":
            if (day === "Friday") {
                price = 10.90
            } else if (day === "Saturday") {
                price = 15.60
            } else if (day === "Sunday") {
                price = 16
            }
            break;
        case "Regular":
            if (day === "Friday") {
                price = 15
            } else if (day === "Saturday") {
                price = 20
            } else if (day === "Sunday") {
                price = 22.50
            }
            break;
    }
    let totalPrice = price * n

    if (type === "Students" && n >= 30) {
        totalPrice *= 0.85;
    } else if (type === "Business" && n >= 100) {
        totalPrice = price*(n - 10)
    } else if (type === "Regular" && n >= 10 && n <= 20) {
        totalPrice *= 0.95
    }
    console.log(`Total price: ${totalPrice.toFixed(2)}`)
}

vac(30, "Students", "Sunday");
vac(40, "Regular", "Saturday");
vac(100, "Business", "Saturday");
