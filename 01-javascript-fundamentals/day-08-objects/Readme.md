# | Method                    | Result                                               |
| ------------------------- | ---------------------------------------------------- |
| `Object.keys(product)`    | `["name", "price", "stock"]`                         |
| `Object.values(product)`  | `["Laptop", 60000, 10]`                              |
| `Object.entries(product)` | `[["name","Laptop"], ["price",60000], ["stock",10]]` |

# - Q1. What is an object in JavaScript?

An object is a collection of key-value pairs used to represent structured data.

# - Q2. What is a property?
A property is a key-value pair inside an object.
const user = {
    name: "John"
};
name is the property.

# - Q3. What is a method?
A function stored inside an object.
const user = {
    greet() {
        console.log("Hello");
    }
};
# - Q4. What is destructuring?
Destructuring allows us to extract values from objects or arrays into variables.
const { name, age } = user;
# - Q5. Difference between Object.keys() and Object.values()?
Object.keys(obj)
returns property names.
Object.values(obj)
returns property values.
# - Q6. What does Object.entries() return?
An array containing [key, value] pairs.
# - Q7. Can objects contain other objects?
Yes.
const user = {
    address: {
        city: "Kolkata"
    }
};

This is called a nested object.
Understand All Three

Take:

const product = {
    name: "Laptop",
    price: 60000,
    stock: 15
};
Object.keys()
Object.keys(product);

Result:

["name", "price", "stock"]
Object.values()
Object.values(product);

Result:

["Laptop", 60000, 15]
Object.entries()
Object.entries(product);

Result:

[
    ["name", "Laptop"],
    ["price", 60000],
    ["stock", 15]
]

# --- Next: Objects Mini Project

Now I don't want to give you another isolated exercise.

Let's build a small real-world Product Manager.

We'll use:

Product
├── properties
├── nested brand object
├── method
├── destructuring
├── Object.keys()
├── Object.values()
├── Object.entries()
└── conditions

Something like:

const product = {
    id: 101,
    name: "Laptop",
    price: 60000,
    stock: 15,

    brand: {
        name: "Dell",
        country: "USA"
    },

    getProductInfo() {
        // ...
    }
};

Then we'll progressively build features like:

1. Display product information
2. Check stock
3. Calculate inventory value
4. Extract product data using destructuring
5. Display brand information
6. Loop through properties
7. Display key/value pairs
8. Add/update product information
