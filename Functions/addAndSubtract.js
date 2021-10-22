function solve(n1, n2, n3) {
    function sum(n1, n2) {
        let result = n1 + n2;
        return result;
    }

    function substract(n1, n2) {
        let result = n1 - n2;
        return result;
    }

    let numbersSum = sum(n1, n2);
    let result = substract(numbersSum, n3);
    return result;
}