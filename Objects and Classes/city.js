function printCity(city) {

    for (let key of Object.keys(city)) {
        console.log(key, '->', city[key])
    }

    let myCity = {
        name: 'Sofia',
        area: 238,
        population: 336000,
        country: 'Bulgaria',
        postCode: 9000
    };

}
