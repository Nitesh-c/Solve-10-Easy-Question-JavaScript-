// Q: Write a function that checks if a given string is a palindrome (reads the same forward and backward), ignoring spaces and punctuation.

/*
Palindrome means =  dad = dad // true
                    mon = nom // false
                    mom = mom // true
*/
function checksPalindrome(word) {
    word.toLowerCase();
    // logic from there
    if (word.split("").reverse("").join("") === word) {
        return true;
    } else {
        return false;
    };
};

console.log(checksPalindrome("dad"));
console.log(checksPalindrome("nitesh"));
console.log(checksPalindrome("mom"));
console.log(checksPalindrome("Abba"));
console.log(checksPalindrome("Aibohphobia"));
console.log(checksPalindrome("doll"));
console.log(checksPalindrome("javascript"));

/*
Some Palindrome words:-
Abba
Aibohphobia
Bib
Bob
Civic
Deified
Detartrated
Dewed
Eve
Hannah
Kayak
Level
Madam
Malayalam
Minim
Mom
Murdrum
Noon
Nun
Otto
Peep
Pop
Racecar
Radar
Redder
Refer
Repaper
Rotator
Rotavator
Sagas
Sis
Solos
Stats
Tattarrattat
Tenet
Wow
Aha
Ava
Dad
Did
Eke
Ewe
Eye
Gag
Gig
Pip
Pup
Reviver
Sees
Sexes
Succus
Deed
Adda
Ada
Ama
Ana
Lil
Tit
Tot
Tut
Mum
Dud
Tat
Waw
Yay
Pap
Did
*/
