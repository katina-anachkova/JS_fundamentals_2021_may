function solve(listStrings){
    let wordsToSearch = listStrings.shift().split(' ');
    let words = {};

    for(let word of wordsToSearch){ //for 'this' and 'sentence';
        words[word] = 0;//in the words object, set for every of the loop entries a 0 value;
    }

    for(let word of listStrings){
        if(Object.keys(words).includes(word)){//vzimame keys ot obekta i proverqvame dali v tqh se sydyrja porednata duma ot listStrings
            //ili s hasOwnProperties;
            words[word] += 1; // za da ne gurmi e setnato na 0 na red 6;
        }
    }
//a  and  b sa spisuci key:element; b pred ia, zashtoto e descending; 1 zashtoto v obekta imame [this,3] i [sentence, 2] i iskame da sravnim po broq
    let sortedWords = Object.entries(words).sort((a, b) => b[1] - a[1]);

    for (let [key,value] of sortedWords){// ili na mqsto na key:value slagame elements
        //console.log(key)
        //console.log(value)
        //ili consolvame elememnts
        console.log(`${key} - ${value}`);
    }
}

solve(['this sentence', 'In','this','sentence','you','have','to','count','the','occurances','of','the','words','this','and','sentence','because','this','is','your','task']);