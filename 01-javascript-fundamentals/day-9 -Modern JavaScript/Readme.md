9. Modern JavaScript
│
├── a) Template literals
├── b) Destructuring
├── c) Spread operator
├── d) Rest parameters
├── e) Optional chaining
├── f) Modules
├── g) Named exports
└── h) Default exports

#  Why backticks?
 Template literals use: ( ``)
# Expressions inside ${}
  You can put JavaScript expressions inside:
  const price = 500;
  const quantity = 3;
  console.log(`Total: ${price * quantity}`);
#  Multiline Strings
 # Without template literals:
    const message =
    "Hello\n" +
    "Welcome to JavaScript\n" +
    "Keep learning!";
 # With template literals:
    const message = `
    Hello
    Welcome to JavaScript
    Keep learning!
    `;
    console.log(message);
# - 4️⃣ Spread Operator ...
This is one of the most important modern JavaScript features for React.
The spread operator is:
...
It allows you to expand/copy values.
Array example
const fruits = ["Apple", "Banana"];
const moreFruits = [...fruits, "Mango", "Orange"];
console.log(moreFruits);
# -- Copy an array
  const numbers = [1, 2, 3];
  const copy = [...numbers];
  console.log(copy);
# -- 5️⃣ Rest Parameters
  Rest also uses:
  ...
  But spread and rest have different purposes.
  Spread
  ➡️ expands values.
  Rest
  ➡️ collects values.
# -- 6️⃣ Optional Chaining ?.
    const user = {
      name: "Aditya",
      address: {
          city: "Kolkata"
      }
    };
# -- # -- 7️⃣ Modules
  Now we're entering a very important professional JavaScript concept.
  Instead of putting everything into one giant file:
  project/
      │
      ├── math.js
      ├── user.js
      └── app.js
  Each file can contain its own functionality.This is called modules.
# --- 9️⃣ Default Export
  A module can also have one default export.
  const multiply = (a, b) => {
      return a * b;
  };
  export default multiply;
then :
  import multiply from "./math.js";
  console.log(multiply(5, 4));
# -- Named vs Default
  NAMED EXPORT
     ↓
  export const add = ...
      ↓
  import { add } from "./math.js"

  DEFAULT EXPORT
      ↓
  export default multiply
      ↓
  import multiply from "./math.js"
# -- | Topic                  | Main purpose                 |
| ---------------------- | ---------------------------- |
| Template literals      | Easier string interpolation  |
| Destructuring          | Extract values               |
| Spread `...`           | Expand/copy values           |
| Rest `...`             | Collect values               |
| Optional chaining `?.` | Safely access nested data    |
| Modules                | Split code into files        |
| Named exports          | Export multiple named things |
| Default exports        | Export one main thing        |

🟨 Modern JavaScript — 2️⃣ Destructuring
Take values out of an object or array and store them directly in variables.

# - There are two main types:
      Destructuring
      │
      ├── Object destructuring
      └── Array destructuring
# --- 1️⃣ Object Destructuring
  const product = {
    name: "Laptop",
    brand: "Dell"
};

const { brand = "Unknown" } = product;

console.log(brand);
# -- 1. What is the Spread Operator?
Answer :
    The spread operator is .... It is used to expand elements of an array or properties of an object.
    Array
    const numbers = [10, 20, 30];
    const newNumbers = [...numbers, 40];
    console.log(newNumbers);     
# --- 3. How do you copy an array using Spread?
  const original = [1, 2, 3];
  const copy = [...original];
  console.log(copy);
# --- 2. What is the difference between Spread and Rest?

# --- 4. How do you merge two arrays?
  const fruits = ["Apple", "Banana"];
  const vegetables = ["Carrot", "Potato"];
  const food = [...fruits, ...vegetables];
  console.log(food);