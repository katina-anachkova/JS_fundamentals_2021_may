function palindrome(input){
  
    for (let i = 0; i < input.length; i++){
        let string = String(input[i]);
        let reversedString = string.split("").reverse().join("")   
        if(string === reversedString){
            console.log(true);
        }else if(string !== reversedString){
            console.log(false)
        }
    }
}