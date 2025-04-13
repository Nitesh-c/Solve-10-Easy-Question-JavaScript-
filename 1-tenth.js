// Q: Write a function that returns the longest word in a given sentence.
function findLongest(sentence) {
    let s = sentence.split(" ");
    let l = "";
    for (let i = 0; i < s.length; i++) {
        if (s[i].length > l.length) {
            l = s[i];
        }
    }
    return l;
}

console.log(findLongest("i love javascript very much and i love also backenddeveloper"));
