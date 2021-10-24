function solve(input){
    let sortedNums = [];
    let numbersLength = input.length
    for ( let i = 0; i < numbersLength; i++){
        let number;
        if ( i % 2 === 0){
            number = Math.max(...input); 
        }else{
            number = Math.min(...input);
        }
        sortedNums.push(number);    
        input.splice(input.indexOf(number), 1) 

    }
    console.log(sortedNums.join(' '))
}

