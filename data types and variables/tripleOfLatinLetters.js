function letters(n) {
    let row = '';
    for (let i = 0; i < n; i++) {
        let letter = String.fromCharCode(97 + i);
        row1 = row;
        row1 += letter;
        for (let j = 0; j < n; j++) {
            let letter = String.fromCharCode(97 + j);
            row2 = row1;
            row2 += letter;
            for (let k = 0; k < n; k++) {
                let letter = String.fromCharCode(97 + k);
                row3 = row2;
                row3 += letter;
                console.log(row3)
                row3 = ""
            }
        }
    }
}