function substract(input) {
    let sumEven = 0;
    let sumOdd = 0;

    for (let i = 0; i < input.length; i++) {
        let number = input[i];
        if (number % 2 == 0) {
            sumEven += number;
        } else {
            sumOdd += number;
        }
    }
    let diff = sumEven - sumOdd;
    console.log(diff);
}