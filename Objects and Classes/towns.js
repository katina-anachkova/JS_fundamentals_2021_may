function solve(input) {
    
    for (let i = 0; i < input.length; i++) {
        let [town, latitude, longitude] = input[i].split(' | ');
        latitude = Number(latitude).toFixed(2)
        longitude = Number(longitude).toFixed(2)
        let obj = {
            town,
            latitude,
            longitude
        };

        console.log(obj)
    }
}

