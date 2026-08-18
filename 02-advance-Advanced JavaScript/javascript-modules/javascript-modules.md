# ================== 32️ JavaScript Modules
Now the final topic. 🎯
Modules allow us to split JavaScript into multiple files.
Instead of:
script.js
    ↓
1000 lines
we can have:
project/
│
├── main.js
├── math.js
├── user.js
└── product.js

This makes applications easier to maintain.

# ========= export
  Suppose:
   math.js:
    export function add(a, b) {
    return a + b;
}
export function subtract(a, b) {
    return a - b;
}

These functions are now available to other modules.

# ===== import
  In main.js:
          import {
              add,
              subtract
          } from "./math.js";

          console.log(add(10, 5));
          console.log(subtract(10, 5));

# ----1️ Named Export
export const name = "Aditya";


export const age = 30;


export function greet() {
    console.log("Hello");
}

Then import them:
import {
    name,
    age,
    greet
} from "./user.js";
The names normally need to match.

# -------------- Renaming Named Imports

You can rename an imported value using as.

import {
    name as userName
} from "./user.js";

console.log(userName);

# ----------------- 2️⃣ Default Export

A file can have one default export.

user.js:

const user = {
    name: "Aditya",
    age: 30
};

export default user;

Import:

import user from "./user.js";
console.log(user.name);
Notice something important:

Named:
import { add } from "./math.js";
Default:
import user from "./user.js";

| Named Export             | Default Export            |
| ------------------------ | ------------------------- |
| Can have multiple        | One default per module    |
| Uses `{}` when importing | Doesn't use `{}`          |
| Name usually matches     | Import name can be chosen |
| `export const x`         | `export default x`        |

Important: HTML Module

When using ES modules in the browser:

<script type="module" src="./main.js"></script>

Not simply:

<script src="./main.js"></script>

The type="module" tells the browser that you're using JavaScript modules.

# --- One important point

Don't normally open the HTML file directly with:
One important point

Don't normally open the HTML file directly with:

file://...

For module development, use a local development server such as VS Code Live Server or Vite.
Since you're moving toward React/Next.js, you'll encounter modules constantly:
import React from "react";
import { useState } from "react";
and:
export default App;
So this topic is directly relevant to your next stage.