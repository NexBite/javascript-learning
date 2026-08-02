mkdir 01-javascript-fundamentals\day-02-operators-conditions
cd 01-javascript-fundamentals\day-02-operators-conditions
# -- Create the files:
  New-Item index.js -ItemType File
New-Item practice.js -ItemType File
New-Item mini-project.js -ItemType File
New-Item README.md -ItemType File

# ==== Part 1 — Arithmetic operators
-----------------------------------------------
| Operator | Meaning        | Example         |
| -------- | -------------- | --------------- |
| `+`      | Addition       | `10 + 5` → `15` |
| `-`      | Subtraction    | `10 - 5` → `5`  |
| `*`      | Multiplication | `10 * 5` → `50` |
| `/`      | Division       | `10 / 5` → `2`  |
| `%`      | Remainder      | `10 % 3` → `1`  |
| `**`     | Exponent       | `2 ** 3` → `8`  |
-----------------------------------------------

# ===== Part 2 — Assignment operators
  Assignment operators assign or update values.
---------------------------------------
| Operator | Meaning                  |
| -------- | ------------------------ |
| `=`      | Assign                   |
| `+=`     | Add and assign           |
| `-=`     | Subtract and assign      |
| `*=`     | Multiply and assign      |
| `/=`     | Divide and assign        |
| `%=`     | Get remainder and assign |
---------------------------------------

# ====== Part 3 — Comparison operators
  Comparison operators return a Boolean value:
-----------------------------------------
| Operator | Meaning                    |
| -------- | -------------------------- |
| `===`    | Equal value and equal type |
| `!==`    | Not equal value or type    |
| `>`      | Greater than               |
| `<`      | Less than                  |
| `>=`     | Greater than or equal      |
| `<=`     | Less than or equal         |
-----------------------------------------

# ======== Part 4 — Logical operators
  Logical operators combine conditions.
---------------------------------------------------------
| Operator | Name | Meaning                             |
| -------- | ---- | ----------------------------------- |
| `&&`     | AND  | Both conditions must be true        |
| `\|\|`   | OR   | At least one condition must be true |
| `!`      | NOT  | Reverses a Boolean value            |
---------------------------------------------------------

# ================= Part 5 — if statement
  An if statement runs code only when its condition is true.

# ==========  Part 6 — if...else
Use else when you want another result if the condition is false.

# ================ Part 7 — if...else if...else
  Use this when there are multiple conditions.

# ===== Part 8 — switch
Use switch when one value can have several specific cases.

# ==== Day 2 mini-project — Student Result Checker
  Requirements:
    Student name
    Marks
    Check whether marks are valid
    Calculate grade
    Display pass or fail

# ===================  Interview questions
1. What is the difference between == and ===?

== compares values after possible type conversion.

=== compares both value and type without type coercion.

5 == "5"; // true

5 === "5"; // false

Use === in most modern JavaScript code.

2. What does the % operator do?

It returns the remainder after division.

10 % 3; // 1

10 % 2; // 0

It is commonly used to check even and odd numbers.

3. What is the difference between && and ||?

&& returns true only when both conditions are true.

|| returns true when at least one condition is true.

4. What is the purpose of break in a switch statement?

break stops execution from continuing into the next case.

5. When should you use switch?

Use switch when comparing one value against several specific cases. Use if...else for ranges and more complex conditions.

Add the Day 2 README

Put this in:

01-javascript-fundamentals/day-02-operators-conditions/README.md
# Day 02 — Operators and Conditional Statements

## Topics Learned

- Arithmetic operators
- Assignment operators
- Comparison operators
- Logical operators
- `if`
- `else`
- `else if`
- `switch`

## Files

- `index.js` — Topic examples
- `practice.js` — Practice questions
- `mini-project.js` — Student Result Checker

## Key Learning

- Use `===` for strict equality comparisons.
- Use `&&` when all conditions must be true.
- Use `||` when at least one condition must be true.
- Use `if...else` for conditions and ranges.
- Use `switch` for multiple specific values.

## Mini Project

Student Result Checker calculates a grade and pass/fail status based on marks.
Test everything

Run these commands:

node index.js
node practice.js
node mini-project.js

Fix any errors before committing.

Then go back to the main repository:

cd ../..

Check the changes:

git status

Add the Day 2 files:

git add .

Check the staged files:

git status

Commit:

git commit -m "Day 02: Learn operators and conditional statements"

Push:

git push

Verify:

git log --oneline

You should see two commits:

Day 02: Learn operators and conditional statements
Day 01: Learn variables and data types

Complete the code and run the three Node commands first. If you get any error, paste the full error output here. After Day 2 is pushed, we can continue today with Day 3: Loops and Number Patterns.

