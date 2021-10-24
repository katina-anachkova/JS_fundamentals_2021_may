function distinctArray(numbers) {
    let result = []
    for (let i = 0; i < numbers.length; i++) {
        let current = numbers[i]
        if (!result.includes(current)) { 
            result.push(current);
        }
    }
    console.log(result.join(" "))
}