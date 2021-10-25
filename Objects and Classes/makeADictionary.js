function dictionary(arr) {

    let fullDictionary = {};

    for (let i = 0; i < arr.length; i++) {

        const jsonObj = arr[i];
        let currentObj = JSON.parse(jsonObj);

        Object.assign(fullDictionary, currentObj);
    }

    let terms = Object.keys(fullDictionary).sort();

    for (let i = 0; i < terms.length; i++) {
        const term = terms[i];

        console.log(`Term: ${term} => Definition: ${fullDictionary[term]}`)
    }
}
