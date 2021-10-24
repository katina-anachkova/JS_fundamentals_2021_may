function search(numbers, conditions) {
    let [amount, startDelete, element] = conditions;
    let newNumbers = [];

    for (let i = 0; i < amount; i++) {
        newNumbers.push(numbers[i]);
    }
    newNumbers.splice(0, startDelete);

    let counter = newNumbers.filter(x => x == element).length;

    console.log(`Number ${element} occurs ${counter} times.`)
}