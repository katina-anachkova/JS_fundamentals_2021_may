function rotate(array, n){
for(i = 0; i < n; i++){
    let digit = array.shift();
    array.push(digit);
}
console.log(array.join(' '))
}