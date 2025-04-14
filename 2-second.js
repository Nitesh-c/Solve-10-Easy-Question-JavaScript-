// Q. Given an array of numbers, return the sum of all even numbers.

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evenNumber = [];
numbers.forEach((n) => {
    if (n % 2 === 0) {
        evenNumber.push(n)
    }
});

let sumOfEven = 0;
evenNumber.forEach((nn) => {
    sumOfEven += nn;
});

console.log(sumOfEven);
// that's fine
