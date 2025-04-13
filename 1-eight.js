// Q: Write a function that capitalizes the first letter of every word in a sentence.
function capitalizes(string) {
    let str = string.split(" ");
    for (let i = 0; i < str.length; i++) {
        str[i] = str[i][0].toUpperCase() + str[i].substring(1);
    }
    return str.join(" ");
}
console.log(capitalizes("nitesh is here"));
console.log(capitalizes("write and learn"));
