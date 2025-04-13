// Q: Write a function that takes a sentence string and returns it with the words reversed, not the letters.
/*
// Input: "I love JavaScript"
// Output: "JavaScript love I"
*/
function reversed(sentence) {
    let sentenceInArray = sentence.split(" ");
    return sentenceInArray.reverse().join(" ");
};

console.log(reversed("I love JavaScript"));

// that's fine question solved
