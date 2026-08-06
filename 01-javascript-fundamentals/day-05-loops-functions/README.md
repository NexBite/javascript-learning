#  ---- 1. for Loop
  # - Syntax
    for (initialization; condition; update) {
    }
  # Example
    for (let i = 1; i <= 5; i++) {
    console.log(i);
    }
    If true
      ↓
      Execute loop
      ↓
      Increment
      ↓
    Repeat
  # -- Example
    for (let i = 1; i <= 10; i++) {
    console.log(i);
    }
  # -- Reverse Loop
    for (let i = 10; i >= 1; i--) {
    console.log(i);
    }
  # -- Even Numbers
    for (let i = 2; i <= 20; i += 2) {
    console.log(i);
    }
  # -- Odd Numbers
    for (let i = 1; i <= 20; i += 2) {
    console.log(i);
    }
# --- 2. while Loop
  The condition is checked before each iteration.
  # -- Syntax
    while(condition){
    }
  # -- Example
    let i = 1;
    while (i <= 5) {
        console.log(i);
        i++;
    }
# -- Infinite Loop Example
   while(true){
   }
   Never write this unless you know how to stop it.
# -- 3. do...while Loop
  A do...while loop always runs at least once
     let i = 1;
        do {
          console.log(i);
            i++;
        } while(i<=5);
  Even if the condition is false initially:

# ---------- 4. for...of
  Used for arrays and other iterable objects.
  const fruits = ["Apple","Banana","Orange"];
  for(const fruit of fruits){
  console.log(fruit);
  }

  const numbers=[10,20,30];
  for(const number of numbers){
  console.log(number);
  }
# ---- 5. for...in
  Used to loop through object keys.
  const student={
    name:"Aditya",
    age:22,
    course:"JavaScript"
    };
    for(const key in student){
    console.log(key);
    }
# --- Loop Comparison
---------------------------------------------
| Loop       | Best Use                     |
| ---------- | ---------------------------- |
| for        | Known number of iterations   |
| while      | Unknown number of iterations |
| do...while | Execute at least once        |
| for...of   | Arrays, strings, iterables   |
| for...in   | Object properties            |
---------------------------------------------

# --- Functions
  Imagine adding two numbers repeatedly.
    Without a function:
      console.log(10+20);
      console.log(50+30);
      console.log(100+200);
    Better:
      function add(a,b){
      return a+b;
      }
# --- Function Declaration
  function greet(){
    console.log("Welcome");
    }
    greet();
# --- Parameters
  function greet(name){
  console.log("Welcome "+name);
  }
  greet("Aditya");
# --- Multiple Parameters
  function add(a,b){
    console.log(a+b);
    }
    add(10,20);
    add(100,50);
# --- Return Value
    function multiply(a,b){
      return a*b;
      }
      const answer=multiply(10,5);
      console.log(answer);
# ---- Default Parameters
  function greet(name="Guest"){
    console.log("Welcome "+name);
    }
    greet();
    greet("Aditya");
# ---- Function Expression
  const square=function(number){
    return number*number;
    };
    console.log(square(8));
# -- Arrow Function
  Modern JavaScript uses arrow functions extensively, especially in React.
  const add=(a,b)=>{
    return a+b;
    };
    console.log(add(10,20));
   Short version:
# ----- Mini Project
  Features:
    Check Even/Odd
    Check Positive/Negative
    Square Number
    Cube Number
    Factorial
    Multiplication Table
    Sum 1–100
    Largest Number
    You'll use:
    for loop
    while loop
    functions
    return values
    arrow functions
    This combines everything you've learned so far.
# =================================================== Interview Questions
  # 1. Difference between for and while?
  for is best when the number of iterations is known.
  while is best when the number of iterations depends on a condition.
  Difference between for...of and for...in?
  # 2. What is a function?
    A reusable block of code that performs a specific task.
  # 3.Why use return?
    It sends a value back to the caller.
  # 4. Difference between function declaration and arrow function?
    Function declaration:
      function add(a,b){
      return a+b;
      }
      Arrow:
      const add=(a,b)=>a+b;
      Arrow functions are shorter and commonly used in React.
  Interview Check

Before finishing Day 05, make sure you can answer these without looking at notes.

Q1. What's the difference between for and while?

for is commonly used when the number of iterations is known.

while is useful when repetition depends primarily on a condition.

Q2. What is do...while?

A loop that executes its body at least once before checking its condition.

Q3. for...of vs for...in?

for...of iterates values from an iterable.

for...in iterates enumerable property keys.

Q4. What is a function parameter?
A variable listed in a function definition:
fuction add(a, b) {}
a and b are parameters.
Q5. What are arguments?
The actual values supplied when calling the function:
add(10, 20);
10 and 20 are arguments.
Q6. What does return do?
It sends a value back from a function and ends that function invocation.
function add(a, b) {
    return a + b;
}
const result = add(10, 20);
# ============  Today's Assignment
Create the following in practice.js:
    1.	Print numbers 1–100 using for. 
    2.	Print even numbers from 1–50. 
    3.	Print odd numbers from 1–50. 
    4.	Print the multiplication table of 7. 
    5.	Calculate the sum of numbers from 1 to 100. 
    6.	Create a function to calculate the area of a rectangle. 
    7.	Create an arrow function to check if a number is even. 
    8.	Use for...of to print all colors in an array. 
    9.	Use for...in to print all properties of an object. 
    10.	Create a function that returns the largest of three numbers.
# --- stdin and stdout are two of the three standard streams that every program has.

Stream	Full Form	Purpose
stdin	Standard Input	Receives input (usually from the keyboard).
stdout	Standard Output	Sends output (usually to the terminal).
stderr	Standard Error	Sends error messages to the terminal.

# ============== GitHub Commit
  git add .
  git commit -m "Day 05: Learn JavaScript loops and functions"
  git push
   
