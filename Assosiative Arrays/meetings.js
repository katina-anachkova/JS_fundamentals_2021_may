function solve(arr) {
    let result = [];
    let schedule = {};

    for (let line of arr){
        let [day, person] = line.split(' ');
        if(schedule[day]){
            console.log(`Conflict on ${day}!`);
            continue
        }else{
            schedule[day] = person;
        }
        result.push(schedule)
        console.log(`Scheduled for ${day}`);
    }
    let data = Object.entries(schedule);
    for ( let line of data){
        console.log(`${line[0]} -> ${line[1]}`)
    }
}