function solve(input) {
    let info = {};
    for (element of input) {
        let [company, id] = element.split(' -> ');
        if (!Object.keys(info).includes(company)) {
            info[company] = []; 
        }
        if (!info[company].includes(id)) {
            info[company].push(id);
        }
    }
    Object.entries(info)
        .sort((a, b) => a[0].localeCompare(b[0]))
        .map(x => console.log(`${x[0]}\n-- ${x[1].join('\n-- ')}`));
}
