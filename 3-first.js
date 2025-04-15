// Given a sorted array of unique numbers from 1 to n with one missing, find the missing number.

let arr = [1, 2, 3, 4, 5, 7, 8, 9, 10];

// let's check

function findMissing(numArr) {
    // formula = (n*(n+1))/2
    let n = numArr[numArr.length - 1]; // -1 why because started from 0
    // console.log(n);
    let expectedSum = (n * (n + 1)) / 2;
    let actualSum = numArr.reduce((a, b) => a + b);
    // console.log(actualSum);

    return (expectedSum - actualSum) + " is missing number in given array.";
};
console.log(findMissing(arr));
