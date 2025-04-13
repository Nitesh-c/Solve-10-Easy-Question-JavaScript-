// Q: Write a function that counts the frequency of each character in a string (ignore spaces and case).

function countChar(string) {
    const obj = {};
    for (let i = 0; i < string.length; i++) {
        const char = string[i];
        if (obj[char]) {
            obj[char] += 1
        } else {
            obj[char] = 1;
        }
    }
    return obj
}
console.log(countChar("niteshistherer"));
console.log(countChar("aabbcc"));
