// const firstName = "Aditya";
// const lastName = "Sharma";

// const fullName = `${firstName} ${lastName}`;
// console.log(fullName);
// console.log(`My full name is ${fullName}`);
// console.log("type :", typeof fullName);

//  -----Part 2 — Number
// const age = 22;
// const price = 99.99;
// const  temperature = -5;

// console.log("type :", typeof age);
// console.log("type :", typeof price);
// console.log("type :", typeof temperature);


// -----Part 3 — Boolean
// const isLoggedIn = true;
// const hasPermission = true;

// console.log("Logged In:", isLoggedIn);
// console.log("Has Permission:", hasPermission);
// console.log("type :", typeof isLoggedIn);
// console.log("type :", typeof hasPermission);

// if(isLoggedIn && hasPermission){   
//     console.log("Welcome to the dashboard .");
// }


// -----Part 4 — Undefined

// let userEmail;
// console.log("userEmail:", userEmail);
// console.log("type :", typeof userEmail);

// let value;
// console.log("value:", value);
// console.log("type :", typeof value);

// -----Part 5 — Null
// const selectedProduct = null;
// console.log("selectedProduct:", selectedProduct);
// console.log("type :", typeof selectedProduct);

// -----Part 6 — Symbol
// const uniqueId = Symbol("id");
// console.log("uniqueId:", uniqueId);
// console.log("type :", typeof uniqueId);

// const userId = Symbol("id");
// const user = {
//     name: "Aditya",
//     age: 22,
//     [userId]: 12345
// };
// console .log("user:", user);
// console.log("userId:", user[userId]);

// -----Part 7 — BigInt
// const bigNumber = 1234567890123456789012345678901234567890n;
// console.log("bigNumber:", bigNumber);
// console.log("type :", typeof bigNumber);

// const firstBigNumber = 1234567890123456789012345678901234567890n;
// const secondBigNumber = 9876543210987654321098765432109876543210n;
// const sum = firstBigNumber + secondBigNumber;
// console.log("Sum of BigInt numbers:", sum);
// console.log("type :", typeof sum);

// Day 03: JavaScript Data Types

console.log("----- JavaScript Data Types -----");

// 1. String
const firstName = "Aditya";
const lastName = "Kumar";
const fullName = `${firstName} ${lastName}`;

console.log("\n1. String");
console.log("Value:", fullName);
console.log("Type:", typeof fullName);

// 2. Number
const age = 22;
const price = 99.99;

console.log("\n2. Number");
console.log("Age:", age);
console.log("Price:", price);
console.log("Type:", typeof age);

// 3. Boolean
const isLearningJavaScript = true;

console.log("\n3. Boolean");
console.log("Value:", isLearningJavaScript);
console.log("Type:", typeof isLearningJavaScript);

// 4. Undefined
let userEmail;

console.log("\n4. Undefined");
console.log("Value:", userEmail);
console.log("Type:", typeof userEmail);

// 5. Null
const selectedProduct = null;

console.log("\n5. Null");
console.log("Value:", selectedProduct);
console.log("Type:", typeof selectedProduct);

// 6. Symbol
const uniqueUserId = Symbol("userId");

console.log("\n6. Symbol");
console.log("Value:", uniqueUserId);
console.log("Type:", typeof uniqueUserId);

// 7. BigInt
const largeNumber = 9007199254740993n;

console.log("\n7. BigInt");
console.log("Value:", largeNumber);
console.log("Type:", typeof largeNumber);