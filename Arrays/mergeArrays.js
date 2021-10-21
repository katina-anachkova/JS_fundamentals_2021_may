function mergeArrays(arr1, arr2) {
    let newArray = [];
    let result = 0;
    let j = 0;
    for (let i = 0; i < arr1.length; i++) {
        let digit1 = arr1[i];
        let digit2 = arr2[i];
        if (i % 2 == 0) {
            result = Number(digit1) + Number(digit2);
            newArray.push(result);
        } else if (i % 2 != 0) {
            result = digit1 + digit2;
            newArray.push(result);
        }
    }
    console.log(newArray.join(' - '));
}

