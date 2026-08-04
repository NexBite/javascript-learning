// Day 04: JavaScript Conditions

console.log("----- JavaScript Conditions -----");

// 1. if statement

const age = 20;

if (age >= 18) {
  console.log("You are eligible to vote.");
}

// 2. if...else statement

const userAge = 16;

if (userAge >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are a minor.");
}

// 3. if...else if...else

const marks = 76;

if (marks >= 90) {
  console.log("Grade: A+");
} else if (marks >= 80) {
  console.log("Grade: A");
} else if (marks >= 70) {
  console.log("Grade: B");
} else if (marks >= 60) {
  console.log("Grade: C");
} else if (marks >= 40) {
  console.log("Grade: D");
} else {
  console.log("Grade: F");
}

// 4. Nested if

const licenseAge = 20;
const hasDocuments = true;

if (licenseAge >= 18) {
  if (hasDocuments) {
    console.log("You can apply for a license.");
  } else {
    console.log("Documents are required.");
  }
} else {
  console.log("You must be at least 18 years old.");
}

// 5. switch

const day = "Saturday";

switch (day) {
  case "Monday":
    console.log("Start of the work week.");
    break;

  case "Friday":
    console.log("Almost weekend.");
    break;

  case "Saturday":
  case "Sunday":
    console.log("Weekend.");
    break;

  default:
    console.log("Regular weekday.");
}