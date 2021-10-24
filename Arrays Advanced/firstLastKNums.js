function firstLast(input) {
    let n = input.shift();
    console.log(input.slice(0, n).join(" "));
    console.log(input.slice(input.length - n, input.length).join(" "))
}
