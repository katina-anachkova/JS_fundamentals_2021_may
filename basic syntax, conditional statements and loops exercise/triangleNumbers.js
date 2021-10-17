function tri(n) {
    let string = "";
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= i; j++) {
            string += `${i} `;
        }
        string += "\n";
    }
    console.log(string);
}
tri(3)
console.log(`---`)
tri(5)
console.log(`---`)
tri(6)

