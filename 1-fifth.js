// Q: Write a function that takes a nested array and returns a single flat array.

// here only work with 3 arrays
function giveFlatArray(arr1) {
    return (arr2) => {
        return (arr3) => {
            return [...arr1, ...arr2, ...arr3]
        };
    };
};
let combinedArr = giveFlatArray([1, 2, 3])([4, 5, 6])([7, 8, 9]);
console.log(combinedArr);

let fruit1 = ["mango", "apple", "guava"];
let fruit2 = ["grapes", "litch", "pineapple"];
let fruit3 = ["orange", "banana"];

let allFruits = giveFlatArray(fruit1)(fruit2)(fruit3)
console.log(allFruits);
