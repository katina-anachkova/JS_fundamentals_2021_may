function sorting(array) {
    array.sort((a, b) => {  // anonymous function
        let firstCriteria = a.length - b.length;
        let secondCriteria = a.localeCompare(b)
        return firstCriteria || secondCriteria;
    })
    console.log(array.join("\n"))
}