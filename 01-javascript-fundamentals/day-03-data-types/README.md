# ============= Day 03 — JavaScript Data Types
  What is a data type?
    A data type tells JavaScript what kind of value is stored in a variable.
    Example:
        const userName = "Aditya";
        const age = 22;
        const isLearning = true;
     Here:
        "Aditya" is a string
        22 is a number
        true is a boolean
        JavaScript is a dynamically typed language. You do not need to declare the type separately. 
          let value = "Hello";
              console.log(typeof value); // string
              value = 100;
              console.log(typeof value); // number
    # ------------ Part 1 — String
        A string stores text.
                Strings can use:
                Double quotes: "Hello"
                Single quotes: 'Hello'
                Backticks: `Hello`
  # ---------- 
    Template literals
    Backticks allow you to insert variables using ${}:
    const name = "Aditya";
    const age = 22;
    console.log(`My name is ${name} and I am ${age} years old.`);
# ================= Part 2 — Number
The number type stores:
      Whole numbers
      Decimal numbers
      Negative numbers
      Add this below the string section:
      // 2. Number

          const age = 22;
          const price = 99.99;
          const temperature = -5;

          console.log("Age:", age);
          console.log("Price:", price);
          console.log("Temperature:", temperature);

          console.log("Type of age:", typeof age);
          console.log("Type of price:", typeof price);
# =============== Part 3 — Boolean
  A boolean has only two values:
    true
    false
    // 3. Boolean

      const isLoggedIn = true;
      const hasPermission = false;

      console.log("Logged in:", isLoggedIn);
      console.log("Has permission:", hasPermission);

      console.log("Type:", typeof isLoggedIn);
# ==================== Part 4 — Undefined
  A variable has the value undefined when it has been declared but no value has been assigned.
  You can also explicitly assign undefined, but usually it is better to let JavaScript use it naturally.
  // 4. Undefined

    let userEmail;
    console.log("Email:", userEmail);
    console.log("Type:", typeof userEmail);
let value;
# ========== Part 5 — Null
  null means intentionally empty or no value.
This is a historical behavior in JavaScript. null is not actually an object.
Difference between undefined and null :
  userName is undefined because no value was assigned.
  selectedUser is null because we intentionally assigned an empty value.
# ============== Part 6 — Symbol
  A Symbol creates a unique value.
  Each call to Symbol() creates a new unique value.
  Symbols are often used as unique object property keys.
# ========= Part 7 — BigInt
  BigInt stores very large integers.
  Create a BigInt by adding n at the end:

# =============== Mini-project — Developer Profile

# =========== Interview questions and answers

  # 1. What are JavaScript data types?
    JavaScript has seven primitive data types:
    String
    Number
    Boolean
    Undefined
    Null
    Symbol
    BigInt
  JavaScript also has non-primitive values such as objects, arrays, and functions.
  # 2. What is the difference between null and undefined?
    undefined usually means a variable has not received a value.
    let userName;
    console.log(userName); // undefined
    null is intentionally assigned to represent no value.
    const selectedUser = null;
 # 3. Why does typeof null return "object"?
    This is a long-standing historical behavior in JavaScript. null is a primitive value, not an object.
    console.log(typeof null); // object
  # 4. What is the difference between number and BigInt?
    number stores normal integers and decimal values.
    BigInt stores very large integers exactly.
    const normalNumber = 100;
    const largeInteger = 9007199254740993n;
  # 5. What is a Symbol?
    A Symbol is a unique primitive value. Every call to Symbol() creates a new unique value.
    const first = Symbol("id");
    const second = Symbol("id");
    console.log(first === second); // false
  # 6. Is JavaScript statically typed or dynamically typed?
    JavaScript is dynamically typed.
    let value = "Hello";
    value = 100;
    The variable can hold values of different types.
