function solve(listOfGuests) {
    //sth happend before party - adding into lists
    //sth happened after party - removing form list

    let indexOfParty = listOfGuests.indexOf('PARTY')// to know how to separate them
    let digitlist = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
    let vip = [];
    let regular = [];

    //adding guests
    for (let i = 0; i < indexOfParty; i++) {
        let currentGuest = listOfGuests[i];

        if (digitlist.includes(currentGuest[0])) {
            vip.push(currentGuest);
        } else {
            regular.push(currentGuest);
        }
    }

    //removing guests
    let counter = 0;
    for (let i = indexOfParty + 1; i < listOfGuests.length; i++) {
        let currentGuest = listOfGuests[i];
        if (vip.includes(currentGuest)) {
            vip.splice(vip.indexOf(currentGuest), 1);
        } else if (regular.includes(currentGuest)) {
            regular.splice(regular.indexOf(currentGuest), 1);
        }
    }
    let totalGuestsLeft = vip.length + regular.length;
    console.log(totalGuestsLeft);
    
    for (let guest of vip){
        console.log(guest)
    }

    for(guest of regular){
        console.log(guest)
    }
}

solve(['7IK9Yo0h', '9NoBUajQ', 'Ce8vwPmE', 'SVQXQCbc', 'tSzE5t0p', 'PARTY', '9NoBUajQ', 'Ce8vwPmE', 'SVQXQCbc']);