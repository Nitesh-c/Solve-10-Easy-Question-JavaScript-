// Write a function to reverse the digits of a number.
function reverseNum(num) {
    let instr = String(num);
    return instr.split("").reverse().join("");
};

console.log(reverseNum(1234));
