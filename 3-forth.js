// Return an array containing the common elements of two arrays.
let arr1 = [1, 2, 3];
let arr2 = [1, 2, 3, 4];

function findCommon(a, b) {
    for (let i of a) {
        for (let j of b) {
            if (i === j) {
                console.log(j);
            }
        }
    }
};
console.log(findCommon(arr1, arr2));
