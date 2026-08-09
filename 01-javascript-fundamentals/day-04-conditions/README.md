# ----------------- 1. What are conditions?
  Conditions allow a program to make decisions.
  For example:

If a person's age is 18 or greater, allow voting. Otherwise, do not allow voting.
In JavaScript:
const age = 20;
if (age >= 18) {
  console.log("Eligible to vote");
}
The condition is:
age >= 18

JavaScript evaluates it to either:
true
or:
false
If the result is true, the code inside the {} block runs.


# ---------------------- 2. if statement
Use if when code should run only if a condition is true.
Add this to index.js:
// Day 04: JavaScript Conditions
console.log("----- JavaScript Conditions -----");
// 1. if statement
const age = 20;
if (age >= 18) {
  console.log("You are eligible to vote.");
}
console.log("Program finished.");
Run:
node index.js
Output:
----- JavaScript Conditions -----
You are eligible to vote.
Program finished.
Now change:
const age = 16;
The output becomes:
----- JavaScript Conditions -----
Program finished.
The condition is false, so the code inside the if block does not run.
Another if example
const marks = 85;
if (marks >= 40) {
  console.log("You passed the examination.");
}

# ---------------- 3. else statement
Use else to run code when the if condition is false.
Add this below the first example:
// 2. if...else statement
  const userAge = 16;
  if (userAge >= 18) {
    console.log("You are an adult.");
  } else {
    console.log("You are a minor.");
  }
# ----------------- 4. else if
Use else if when there are multiple conditions.
Example: calculate a student's grade.
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
JavaScript checks the conditions from top to bottom.
Write conditions from the highest range to the lowest range.

# ------------- 5. Nested conditions
An if statement can be placed inside another if statement.

const ageForLicense = 20;
const hasDocuments = true;

if (ageForLicense >= 18) {
  if (hasDocuments) {
    console.log("You can apply for a license.");
  } else {
    console.log("Documents are required.");
  }
} else {
  console.log("You must be at least 18 years old.");
}

# ---------------- 6. switch statement
Use switch when one value is compared with several specific values.
// 4. switch statement

const day = "Monday";

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

# Why is break used?
  break stops the switch after a matching case runs.
  Without break, JavaScript continues to the next case. This is called fall-through.
  Because there is no break, execution continues.

# ------ Day 04 mini-project — Login Access Checker

// Day 04 Mini Project: Login Access Checker

const userName = "Aditya";
const password = "JavaScript123";
const isAccountActive = true;

console.log("----- Login Access Checker -----");

if (userName === "") {
  console.log("Username is required.");
} else if (password === "") {
  console.log("Password is required.");
} else if (!isAccountActive) {
  console.log("Your account is inactive.");
} else if (userName === "Aditya" && password === "JavaScript123") {
  console.log("Login successful.");
  console.log(`Welcome, ${userName}!`);
} else {
  console.log("Invalid username or password.");
}

Interview questions
1. What is the difference between if and else?

if runs when its condition is true.

else runs when the if condition is false.

if (age >= 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}
2. When should you use else if?

Use else if when you need to check multiple conditions.

if (marks >= 90) {
  console.log("A+");
} else if (marks >= 80) {
  console.log("A");
} else {
  console.log("Other grade");
}
3. What is the purpose of break in switch?

break stops execution after a matching case. Without it, execution continues into the next case.

4. What is the purpose of default in switch?

default runs when none of the cases match.

5. When should you use switch instead of if...else?

Use switch when one value is compared against many specific values.

Use if...else for ranges and complex conditions.

For example:

if (marks >= 90)

is better with if...else, because it checks a range.

switch (day)

is suitable when checking exact values.

Add Day 04 README.md
# Day 04 — JavaScript Conditions

## Topics Learned

- `if`
- `else`
- `else if`
- Nested conditions
- `switch`
- `case`
- `break`
- `default`

## Files

- `index.js` — Condition examples
- `practice.js` — Practice questions
- `mini-project.js` — Login Access Checker

## Key Learning

- `if` runs when a condition is true.
- `else` runs when the condition is false.
- `else if` checks additional conditions.
- JavaScript checks `if...else if` conditions from top to bottom.
- `switch` compares one value with multiple cases.
- `break` prevents unwanted fall-through.
- `default` runs when no case matches.

## Mini Project

Login Access Checker validates username, password, and account status.