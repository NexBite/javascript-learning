# == Phase 2: Advanced JavaScript ===============================
 # ------- Topics :
                  1.	Execution context 
                  2.	Call stack 
                  3.	Scope 
                  4.	Lexical scope 
                  5.	Closures 
                  6.	Hoisting 
                  7.	Temporal Dead Zone 
                  8.	this keyword 
                  9.	call(), apply(), and bind() 
                  10.	Prototypes 
                  11.	Prototype inheritance 
                  12.	Classes 
                  13.	Constructor functions 
                  14.	Event loop 
                  15.	Microtask queue 
                  16.	Callback queue 
                  17.	Callbacks 
                  18.	Promises 
                  19.	async and await 
                  20.	Error handling 
                  21.	try, catch, and finally 
                  22.	Fetch API 
                  23.	JSON 
                  24.	Local storage 
                  25.	Session storage 
                  26.	DOM manipulation 
                  27.	Event bubbling 
                  28.	Event capturing 
                  29.	Event delegation 
                  30.	Debouncing 
                  31.	Throttling 
                  32.	JavaScript modules
# --- 1️⃣ Execution Context
    First understand this simple idea:
    Execution Context = the environment in which JavaScript code is evaluated and executed.
    Whenever JavaScript runs code, it creates an environment to keep track of things such as:
    variables
    functions
    scope
    this
    the code currently being executed
    There are mainly two execution contexts you should know initially:
  # -- Global Execution Context
      const name = "Aditya";
      let age = 30;
      function greet() {
        console.log("Hello");
      }
      Global Execution Context
      │
      ├── name → "Aditya"
      ├── age → 30
      └── greet → function
  # -- Function Execution Context
    const name = "Aditya";
        function greet() {
            const message = "Hello";
            console.log(message);
        }
        greet();

# --- Two important phases
      Creation Phase
       ↓
      Execution Phase


# --- 2️⃣ Call Stack
    Call Stack keeps track of which function JavaScript is currently executing.
      ┌─────────────┐
      │   greet()   │  ← currently executing
      ├─────────────┤
      │    main     │
      └─────────────┘
      LIFO — Last In, First Out
# --- Execution Context vs Call Stack
    This distinction is very important for interviews.
    Execution Context
    Answers:
    "Where is this code being executed?"
    It contains the environment needed to execute the code.
    Call Stack
    Answers:
    "Which function is currently executing, and what called it?"
    So:
    Execution Context
            ↓
    Environment for execution
    Call Stack
            ↓
    Tracks execution order

🎯 Interview Question #1
What is an Execution Context?

Answer:

An execution context is the environment created by JavaScript to execute code. It contains information required for execution, such as variables, functions, scope information, and the this value.

🎯 Interview Question #2
What is the Call Stack?

Answer:

The Call Stack is a LIFO data structure used by JavaScript to keep track of function calls and their execution order.

🎯 Interview Question #3
What happens when a function is called?

For example:

function greet() {
    console.log("Hello");
}

greet();

Conceptually:

greet()
   ↓
Function Execution Context created
   ↓
Pushed onto Call Stack
   ↓
Function executes
   ↓
Function finishes
   ↓
Context removed from Call Stack
⚠️ Call Stack Overflow

Here's an interesting example:

function test() {
    test();
}

test();

What happens?

test()
test()
test()
test()
test()
...

The function keeps calling itself.

Eventually the Call Stack becomes full.

JavaScript throws:

RangeError: Maximum call stack size exceeded

This is called a:

Stack Overflow

This is also where you'll eventually understand recursion much better.

🧪 Today's Practice

Don't just memorize these definitions.

Challenge 1

Predict the output:

function one() {
    console.log("One");
}

function two() {
    console.log("Two");
}

function three() {
    console.log("Three");
}

one();
two();
three();

Write:

Output:
1.
2.
3.
Challenge 2

Now predict this:

function first() {

    console.log("First");

    second();
}

function second() {

    console.log("Second");

    third();
}

function third() {

    console.log("Third");
}

first();

Also draw the Call Stack at the moment third() is executing.

Challenge 3 ⭐

Predict the output:

function a() {
    console.log("A");
    b();
    console.log("A End");
}

function b() {
    console.log("B");
}

a();

console.log("Done");

Think carefully about when functions are pushed and popped from the Call Stack. 

# --- 3️⃣ Hoisting
  Simple definition
  Hoisting is JavaScript's behavior of processing declarations before executing the code.
  Important: JavaScript does not literally move your code to the top.
  Instead, during the creation phase of the execution context, JavaScript registers declarations.
  # --- Example 1 — var
    console.log(name);
    var name = "Aditya";
  # --- var Hoisting
    console.log(x);
    var x = 10;
    console.log(x);
# -- Why?
    Because let and const are hoisted too, but they are not initialized before their declaration is reached.
    This period is called the:
    Temporal Dead Zone — TDZ 
# --- Temporal Dead Zone
  console.log(age);
  let age = 25;
  Creation phase:
  age → uninitialized
          ↓
  console.log(age)
          ↓
  ReferenceError
          ↓
  age = 25

# ---- var vs let vs const
-------------------------------------------------------------------------
|                           | `var`       | `let`          | `const`        |
| ------------------------- | ----------- | -------------- | --------------|
| Hoisted                   | ✅          | ✅            | ✅            |
| Initialized immediately   | `undefined` | ❌             | ❌            |
| TDZ                       | ❌           | ✅              | ✅         |
| Access before declaration | `undefined` | ReferenceError | ReferenceError|
| Redeclaration             | ✅           | ❌              | ❌         |
| Reassignment              | ✅           | ✅              | ❌          |
let and const are hoisted but remain in the Temporal Dead Zone until their declaration is executed.

#-- Hoisting Interview Questions
# -- Q1. What is hoisting?
Hoisting is JavaScript's behavior of processing declarations during the creation phase of an execution context before the code is executed.
# -- Q2. Are let and const hoisted?
Yes.
But they remain uninitialized in the Temporal Dead Zone until execution reaches their declaration.
# -- Q3. Why does var return undefined?
Because the variable is initialized with undefined during the creation phase.
# -- Q4. Are function declarations hoisted?
Yes. Their function definition is available during execution before the declaration's position.

# ---4️⃣ Scope
Scope determines where a variable can be accessed in your code.
Global Scope
Function Scope
Block Scope
# -- Global Scope
    const name = "Aditya";
      function greet() {
          console.log(name);
      }
      greet();
  name is outside the function.
  Therefore it has global/module-level visibility in this simple script context, and the function can access it.
      Global
      │
      ├── name
      │
      └── greet()
            ↓
        can access name
# -- Function Scope
    function test() {
    const age = 25;
    console.log(age);
      }
      test();
      console.log(age);
     // Inside the function:
      25
      Outside:
      ReferenceError
      Because age belongs to the function's scope.
# -- Block Scope
      {
    }
    if (true) {

        let age = 25;

        console.log(age);
    }
# --- Scope Chain
      const globalName = "Aditya";
      function outer() {
          const outerName = "Rahul";
          function inner() {
              const innerName = "Amit";
              console.log(innerName);
              console.log(outerName);
              console.log(globalName);
          }
          inner();
      }
      outer();

      inner() can access:
      innerName
        ↓
      outerName
        ↓
      globalName
      This is called the Scope Chain.
      JavaScript searches from the current scope outward.
      Inner Scope
          ↓
      Outer Scope
          ↓
      Global Scope
          ↓
      Not found → ReferenceError

  # ---- Important Rule
  JavaScript looks outward, not inward.
          function outer() {
            const name = "Rahul";
            function inner() {
                const age = 25;
            }
            console.log(age);
        }
Can outer() access age?
no.Because age belongs to the inner scope.
But:
function outer() {
    const name = "Rahul";
    function inner() {
        console.log(name);

    }
}
works.
Because inner scope can access outer scope.


# --- Challenge 1
  console.log(a);
  var a = 10;
  console.log(a);
                  JavaScript
                    │
        ┌───────────┴───────────┐
        ↓                       ↓
     Hoisting                 Scope
        │                       │
        ↓                       ↓
 declarations             Where variable
 processed early           can be accessed
        │                       │
   ┌────┴────┐             ┌────┴────┐
   ↓         ↓             ↓         ↓
  var     let/const     function    block
   ↓         ↓
undefined   TDZ
