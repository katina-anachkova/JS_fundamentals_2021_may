function solve(input) {
    let info = {};

    for (element of input) {
        let [company, id] = element.split(' -> ');
        //if company doesnt exist in info{}:
        if (!Object.keys(info).includes(company)) {
            info[company] = []; //add key
        }
        //if company exists
        ////employee doesnt exist
        if (!info[company].includes(id)) {
            info[company].push(id);
        }
    }
    Object.entries(info)
        .sort((a, b) => a[0].localeCompare(b[0]))
        .map(x => console.log(`${x[0]}\n-- ${x[1].join('\n-- ')}`));
}

solve([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345'
]);