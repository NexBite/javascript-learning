// ----------------- 1.	Print numbers 1–100 using for.

// for (let i = 1; i <= 100; i++) {
//     console.log(i);
// }

// ----------------- 2.	Print even numbers from 1–50. 

// for (let i = 1; i <= 50; i++) {
//     if (i % 2 === 0) {
//         console.log(i + " is an even number");
//     } else {
//       console.log(i + " is not an even number");
//     }
// }

// for (let i = 1; i <= 50; i++){
//   if (i % 2 === 0) {
//     console.log(i );
//   } 
// }

// ----------------- 3.	Print odd numbers from 1–50.

// for (let i = 1; i <=50; i++){
//   if (i % 2 !== 0){
//     console.log("Odd number: " + i);
//   }
// }

// ----------------- 4.	Print the multiplication table of 7.

// for (let i = 1; i <= 10; i++) {
//     console.log("7 x " + i + " = " + (7 * i));
// }

// ----------------- 5.	Calculate the sum of numbers from 1 to 100.

// let sum = 0;
// for (let i = 1; i <= 100; i++) {
//     sum += i;
// }
// console.log("The sum of numbers from 1 to 100 is: " + sum);

// ----------------- 6.	Create a function to calculate the area of a rectangle.



// const readline = require("readline");

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// function calculateRectangleArea(length, width) {
//     return length * width;
// }

// rl.question("Enter the length: ", (length) => {
//     rl.question("Enter the width: ", (width) => {

//         length = Number(length);
//         width = Number(width);

//         if (isNaN(length) || isNaN(width) || length <= 0 || width <= 0) {
//             console.log("Please enter valid positive numbers.");
//         } else {
//             let area = calculateRectangleArea(length, width);
//             console.log(`The area of the rectangle is ${area}`);
//         }

//         rl.close();
//     });
// });

// ---------------- 7.	Create an arrow function to check if a number is even.


// const readline = require("readline");

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// function oddEvenChecker(num) {
//     return num % 2 === 0;
// }

// rl.question("Enter a number: ", (num) => {
//         num = Number(num);
//         if (isNaN(num)) {
//             console.log("Please enter a valid number.");
//         } else if {
//           console.log (num + "This is Odd number");
//         } else if {
//           console.lgo(num + "This number is Even ")
//         }
//         rl.close(); }
//     });
// );


// const readline = require("readline");

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// function oddEvenChecker(num) {
//     return num % 2 === 0;
// }

// rl.question("Enter a number: ", (num) => {

//     num = Number(num);

//     if (isNaN(num)) {
//         console.log("Please enter a valid number.");
//     } else if (oddEvenChecker(num)) {
//         console.log(num + " is an Even number.");
//     } else {
//         console.log(num + " is an Odd number.");
//     }

//     rl.close();
// });


// ----------------------- 8.	Use for...of to print all colors in an array.

// const colors = ['red', "green","blue","yellow"]
// for (const color of colors){
//   console.log(color);
// };

// -----------  10.	Create a function that returns the largest of three numbers.
