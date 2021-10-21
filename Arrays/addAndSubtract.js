function addSubstract(input){
    let newArray = [];
    let sumFirst = 0;
    let sumSecond = 0;


    for (let i = 0; i < input.length; i++){
        let digit = Number(input[i]);
        sumFirst += digit;
        if(digit % 2 == 0){
            digit += i;
            newArray.push(digit)
            sumSecond += digit;
            
        }else if( digit % 2 != 0){
            digit -= i;
            newArray.push(digit)
            sumSecond += digit;
        }
    }
    console.log(newArray);
    console.log(sumFirst);
    console.log(sumSecond);
}
