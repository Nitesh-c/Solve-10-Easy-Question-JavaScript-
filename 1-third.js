//  Q: Write a function that removes duplicate values from an array without using Set.
let array = [1, 2, 3, 4, 1, 2, 3, 4, 1, 1, 2, 3, 3, 2, 4];
// output: [1,2,3,4];
let clearData = [];

for (let i = 0; i < array.length; i++) {
    if (!clearData.includes(array[i])) {
        clearData.push(array[i])
    }
};
console.log(clearData);
