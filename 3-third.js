// Rotate the elements of an array to the right by k steps.

function rotateArr(arr) {
    let lastVal = arr.pop();
    arr.unshift(lastVal)
    return arr;
};
let array = [1, 2, 3, 4, 5];

console.log(rotateArr(array));
