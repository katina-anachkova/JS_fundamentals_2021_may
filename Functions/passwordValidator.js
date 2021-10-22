function passValidator(password) {
    function isLengthBetweenSinandTen(string) {
        if (string.length >= 6 && string.length <= 10) {
            return true;
        } else {
            return false;
        }
    }
    function consistsOfLettersAndDigits(string) {
        for (let char of string) {
            let charCode = char.charCodeAt(0);
            if (!(charCode >= 48 && charCode <= 57) && !(charCode >= 65 && charCode <= 90) && !(charCode >= 97 && charCode <= 122)) {
                return false;
            }
        }
        return true;
    }

    function hasAtLeastTwoDigits(string) {
        let counter = 0;

        for (let char of string) {
            let charCode = char.charCodeAt(0);

            if (charCode >= 48 && charCode <= 57) {
                counter++
            }
        }
        return counter >= 2 
  
    }
    let isLengthValid = isLengthBetweenSinandTen(password);
    let isContainingLettersAndDigits = consistsOfLettersAndDigits(password);
    let hasTwoDigits = hasAtLeastTwoDigits(password);

    if (isLengthValid && isContainingLettersAndDigits && hasTwoDigits) {
        console.log('Password is valid');
        return
    }
    if (!isLengthValid) {
        console.log(`Password must be between 6 and 10 characters`);

    }
    if (!isContainingLettersAndDigits) {
        console.log(`Password must consist only of letters and digits`);
    }
    if (!hasTwoDigits) {
        console.log(`Password must have at least 2 digits`);
    }
}