function json(myJson){
    
    let parsed = JSON.parse(myJson);

    for(let key of Object.keys(parsed))
    console.log(`${key}: ${parsed[key]}`)

}