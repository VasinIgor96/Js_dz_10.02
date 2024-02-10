const arrayA = [1, 2, 3, 4, 5];
const arrayB = [3, 4, 5, 6, 7];

const combinedArray = [];

for (let element of arrayA) {
    if (!combinedArray.includes(element)) {
        combinedArray.push(element);
    }
}

for (let element of arrayB) {
    if (!combinedArray.includes(element)) {
        combinedArray.push(element);
    }
}

console.log(combinedArray);
