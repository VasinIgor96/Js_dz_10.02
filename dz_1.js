const wordsArray = ["apple", "banana", "orange", "kiwi", "grape"];
const n = 5;
const filteredWords = [];

for (let i = 0; i < wordsArray.length; i++) {
    if (wordsArray[i].length > n) {
        filteredWords.push(wordsArray[i]);
    }
}

console.log(filteredWords);
