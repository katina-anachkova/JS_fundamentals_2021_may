function print(n,m){
    let sum = 0;
    let printLine = ""
    for(let i = n; i <=m; i++){
        sum += i
        printLine += ` ${i}`   
    }
    console.log(printLine)
    console.log(`Sum: ` + sum)
}

print(5,10)
console.log(`-----------------------`)
print(0,26)
console.log(`-----------------------`)
print(50,60)

