# === Part 2: Understand var, let, and const
| Keyword | Scope          | Can reassign? | Can redeclare? |
| ------- | -------------- | ------------: | -------------: |
| `var`   | Function scope |           Yes |            Yes |
| `let`   | Block scope    |           Yes |             No |
| `const` | Block scope    |            No |             No |

let score = 50;
score = 80;
console.log(score); // 80

# -- let can be reassigned.
const appName = "JavaScript Learning";
console.log(appName);

# -- const cannot be reassigned:
const appName = "JavaScript Learning";
// appName = "React Learning"; // Error
Use const by default. Use let when the variable needs to change. Avoid var in modern JavaScript unless you are learning older code or need to understand legacy behavior.
# Day 1 practice questions
Try answering these without searching:
What is the difference between let and const?
Can a const variable be reassigned?
Which keyword is block-scoped?
What is the output?

# - Mini challenge
Create a Developer Profile in practice.js.
Requirements:
Name
Age
City
Country
Current learning technology
Whether you are a beginner
Your job goal

# - # Day 01 — Variables and Data Types

## Topics Learned

- `var`
- `let`
- `const`
- Variable reassignment
- JavaScript primitive data types
- The `typeof` operator

## Files

- `index.js` — Examples of variables and data types
- `practice.js` — Practice exercises

## Key Learning

- Use `const` when a variable does not need reassignment.
- Use `let` when a variable needs to change.
- Avoid `var` in modern JavaScript code.

# ========== Now go to the main repository folder:
  cd ../..

# === git status
git add .
git commit -m "Day 02: Learn operators and conditions"
git push