function solve(listStrings){
    let wordsToSearch = listStrings.shift().split(' ');
    let words = {};

    for(let word of wordsToSearch){ 
        words[word] = 0;
    }

    for(let word of listStrings){
        if(Object.keys(words).includes(word)){
            words[word] += 1; 
        }
    }
    let sortedWords = Object.entries(words).sort((a, b) => b[1] - a[1]);

    for (let [key,value] of sortedWords){
        console.log(`${key} - ${value}`);
    }
}
