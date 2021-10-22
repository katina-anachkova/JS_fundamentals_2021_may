function solve(number) {
    let sumEven = 0;
    let sumOdd = 0;
    let numb = number.toString()

    for (let digit of numb) {
        if (digit % 2 == 0){
            sumEven+= Number(digit);
        }else{
            sumOdd += Number(digit)
        }
    }
    console.log(`Odd sum = ${sumOdd}, Even sum = ${sumEven}`)
}