// Write a program two swap two number without using third varaibles.
let x = 10;
let y = 20;

x = x + y; // 20 + 10 = 30
y = x - y; // 30 - 20 = 10
x = x - y; // 30 - 10 = 20;

console.log(x); // 20
console.log(y); // 10

// easy way
let a = 50;
let b = 90;
[a, b] = [b, a];
console.log(a);
console.log(b);
