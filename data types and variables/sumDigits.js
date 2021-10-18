function solve(number){
    let sum = 0;
    let numString = number.toString()

    for(let digit of numString){
        sum += Number(digit)
    }
    console.log(sum)
}
