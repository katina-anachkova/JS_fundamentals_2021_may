function solve2(text, word) {
    console.log(text.split(' ').filter(x => x == word).length);
}