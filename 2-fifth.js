// Write a function to find the GCD of two positive integers.

function gcd(a, b) {
    if (b === 0) {
        return a;
    }
    return gcd(b, a % b)
};

console.log(gcd(12, 12));
console.log(gcd(12, 24));
console.log(gcd(18, 6));
