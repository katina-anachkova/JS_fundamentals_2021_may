function oddNums(n) {
    let sum = 0;
    let counter = 0;
    for (let i = 1; i <= 100; i++) {
        if (i % 2 == 1) {
            counter++;
            if (counter <= n) {
                sum += i;
                console.log(i)
            } else {
                break;
            }
        }
    }
    console.log(`Sum: ${sum}`)
}