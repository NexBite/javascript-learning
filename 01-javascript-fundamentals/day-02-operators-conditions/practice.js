// Question 1
// Create two numbers and print:
// addition, subtraction, multiplication, division

const numberOne = 25;
const numberTwo = 5;

console.log("Addition:", numberOne + numberTwo);
console.log("Subtraction:", numberOne - numberTwo);
console.log("Multiplication:", numberOne * numberTwo);
console.log("Division:", numberOne / numberTwo);

// Question 2
// Check whether a number is even or odd

const number = 17;

if (number % 2 === 0) {
  console.log(number + " is even");
} else {
  console.log(number + " is odd");
}

// Question 3
// Check whether a person can vote

const age = 17;

if (age >= 18) {
  console.log("Eligible to vote");
} else {
  console.log("Not eligible to vote");
}

// Question 4
// Print a grade based on marks

const marks = 85;

if (marks >= 90) {
  console.log("Grade A+");
} else if (marks >= 80) {
  console.log("Grade A");
} else if (marks >= 70) {
  console.log("Grade B");
} else if (marks >= 60) {
  console.log("Grade C");
} else if (marks >= 40) {
  console.log("Grade D");
} else {
  console.log("Fail");
}

// Question 5
// Use switch to print a month name

const monthNumber = 3;

switch (monthNumber) {
  case 1:
    console.log("January");
    break;

  case 2:
    console.log("February");
    break;

  case 3:
    console.log("March");
    break;

  default:
    console.log("Invalid month");
}