// Q: You have an array of numbers from 1 to 100, but one number is missing. Find the missing number.

let array = [];
for (let i = 1; i <= 100; i++) {
    if (i !== 65) {
        array.push(i)
    }
}
// console.log(array);

function findNum(arr) {
    let n = arr.length + 1;
    let sum = (n * (n + 1)) / 2;
    let actualSum = 0;
    arr.forEach((num) => {
        actualSum += num;
    });
    return sum - actualSum;
}
console.log(findNum(array));
