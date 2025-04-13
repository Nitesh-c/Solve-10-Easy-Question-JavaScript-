// Q: Write a function to rotate an array to the right by k steps.
function rotate(array) {
    let delVal = array.pop();
    array.unshift(delVal);
    return array
};

let array = [1, 2, 3, 4]

console.log(rotate(array));
