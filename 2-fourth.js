// An Armstrong number of 3 digits is an integer such that the sum of the cubes of its digits is equal to the number itself.

function findArmNum(num) {
    let numInArr = String(num).split("")
    let sumOf = 0;
    numInArr.forEach((n) => {
        sumOf += n * n * n;
    });

    if (sumOf === num) {
        return true;
    } else {
        return false;
    }
};

console.log(findArmNum(153));
console.log(findArmNum(123));
