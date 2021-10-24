function charRange(startChar, endChar) {
    startChar = startChar.charCodeAt(0);
    endChar = endChar.charCodeAt(0);
    let currentChar = '';
    let printLine = '';

    if (startChar < endChar) {
        straigth();
    } else if (startChar > endChar) {
        reverse();
    }
    function straigth() {
        for (let i = startChar + 1; i < endChar; i++) {
            currentChar = String.fromCharCode(i);
            printLine += `${currentChar} `;
        }
    }
    function reverse() {
        for (let i = endChar + 1; i < startChar; i++) { 
            currentChar = String.fromCharCode(i);
            printLine += `${currentChar} `;
        }
    }
    console.log(printLine)
}