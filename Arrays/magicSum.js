function sum(input, n) {

    for (let i = 0; i < input.length; i++) {
        let digitOne = input[i];
        for (let j = i + 1; j < input.length; j++) {
            let digitTwo = input[j];
            if (digitOne + digitTwo == n) {
                console.log(`${digitOne} ${digitTwo}`)
            } else {
                continue;
            }
        }
    }
}